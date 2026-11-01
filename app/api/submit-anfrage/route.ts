import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Anfragen aus allen Formularen (Webdesign, Branding, Social Media, Kontakt)
// gehen direkt per E-Mail an die Agentur. SMTP-Zugang über dieselben
// Variablen wie im Vecturo-Backend: EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE,
// EMAIL_USER, EMAIL_PASS, optional EMAIL_FROM und ANFRAGE_EMPFAENGER.
// Fehlen sie, gehen Anfragen über VECTURO_API_URL / VECTURO_WEBHOOK_SECRET.
export const runtime = "nodejs";

const FORM_LABEL: Record<string, string> = {
  webdesign: "Webdesign",
  branding: "Branding",
  "social-media": "Social Media",
  kontakt: "Kontaktformular",
};

// Das Feld "pages" trägt je nach Formular etwas anderes
const PAGES_LABEL: Record<string, string> = {
  webdesign: "Gewünschte Seiten",
  branding: "Stil",
  "social-media": "Kanäle",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(v: unknown, max = 2000): string {
  if (Array.isArray(v)) v = v.join(", ");
  if (typeof v === "boolean") v = v ? "Ja" : "Nein";
  if (typeof v !== "string" && typeof v !== "number") return "";
  return String(v).trim().slice(0, max);
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  // Unsichtbares Feld: Bots füllen es aus, Menschen nicht
  if (text(body.website_hp)) return NextResponse.json({ success: true });

  const formType = FORM_LABEL[text(body.formType)] ? text(body.formType) : "webdesign";
  const email = text(body.email, 200);
  const name = text(body.contactPerson, 200) || text(body.name, 200) || text(body.companyName, 200);

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Bitte eine gültige E-Mail-Adresse angeben." }, { status: 400 });
  }

  const { EMAIL_HOST, EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS) {
    console.error("[submit-anfrage] EMAIL_HOST / EMAIL_USER / EMAIL_PASS nicht gesetzt, nutze Vecturo");
    return (await forwardToVecturo(formType, body))
      ? NextResponse.json({ success: true })
      : NextResponse.json({ error: "E-Mail-Versand nicht eingerichtet" }, { status: 500 });
  }

  const termin = [text(body.appointmentDate), text(body.appointmentTime) && `${text(body.appointmentTime)} Uhr`]
    .filter(Boolean)
    .join(", ");

  const rows: [string, string][] = [
    ["Formular", FORM_LABEL[formType]],
    ["Firma", text(body.companyName, 200)],
    ["Ansprechpartner", name],
    ["E-Mail", email],
    ["Telefon", text(body.phone, 60)],
    ["Branche", text(body.industry, 200)],
    ["Website vorhanden", text(body.hasWebsite, 20)],
    ["Aktuelle Website", text(body.websiteUrl, 300)],
    ["Projekt", text(body.projectTypeLabel, 200) || text(body.projectType, 200)],
    [formType === "branding" ? "Leistungen" : "Ziel", text(body.goalLabel, 500) || text(body.goal, 500)],
    [PAGES_LABEL[formType] ?? "Seiten", text(body.pagesLabel, 500) || text(body.pages, 500)],
    ["Zeitplan", text(body.timelineLabel, 200)],
    ["Wunschtermin", termin],
    ["Demo gewünscht", formType === "kontakt" ? text(body.demo, 10) : ""],
    ["Nachricht", text(body.message) || text(body.firstNotes)],
  ];
  const filled = rows.filter(([, v]) => v);

  const html = `<div style="font-family:Arial,sans-serif;max-width:620px;color:#181818">
<h2 style="margin:0 0 4px;font-size:20px">Neue Anfrage: ${esc(name || email)}</h2>
<p style="margin:0 0 18px;color:#6E6E73;font-size:13px">über jragencyservices.com · ${esc(FORM_LABEL[formType])}</p>
<table style="border-collapse:collapse;width:100%">${filled
    .map(
      ([l, v]) =>
        `<tr><td style="padding:7px 12px 7px 0;color:#6E6E73;font-size:13px;width:38%;vertical-align:top;border-top:1px solid #eee">${esc(l)}</td><td style="padding:7px 0;font-size:13px;font-weight:600;border-top:1px solid #eee">${esc(v)}</td></tr>`
    )
    .join("")}</table>
<p style="margin:18px 0 0;color:#6E6E73;font-size:12px">Mit „Antworten“ schreibst du direkt an ${esc(email)}.</p>
</div>`;

  const plain = filled.map(([l, v]) => `${l}: ${v}`).join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587", 10),
      secure: process.env.EMAIL_SECURE === "true",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || `JR Agency Services Website <${EMAIL_USER}>`,
      to: process.env.ANFRAGE_EMPFAENGER || EMAIL_USER,
      replyTo: name ? { name, address: email } : email,
      subject: `Neue Anfrage (${FORM_LABEL[formType]}): ${name || email}`,
      html,
      text: plain,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[submit-anfrage] Versand fehlgeschlagen, versuche Vecturo:", err);
    return (await forwardToVecturo(formType, body))
      ? NextResponse.json({ success: true })
      : NextResponse.json({ error: "Versand fehlgeschlagen" }, { status: 502 });
  }
}

// Absicherung: Ist der Mailversand nicht eingerichtet oder fällt aus, geht die
// Anfrage wie früher an das Vecturo-CRM (das selbst eine Mail verschickt).
async function forwardToVecturo(formType: string, body: Record<string, unknown>): Promise<boolean> {
  const url = process.env.VECTURO_API_URL;
  const secret = process.env.VECTURO_WEBHOOK_SECRET;
  if (!url || !secret) return false;
  try {
    const res = await fetch(`${url}/api/webhook/anfrage`, {
      method: "POST",
      signal: AbortSignal.timeout(15000),
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        // Vecturo kennt kein Kontaktformular; die Nachricht landet dort als Hinweis
        formType: formType === "kontakt" ? "webdesign" : formType,
        name: text(body.name, 200) || text(body.contactPerson, 200) || text(body.companyName, 200),
        firstNotes: text(body.message) || text(body.firstNotes),
        secret,
      }),
    });
    if (!res.ok) console.error("[submit-anfrage] Vecturo antwortet", res.status);
    return res.ok;
  } catch (err) {
    console.error("[submit-anfrage] Vecturo nicht erreichbar:", err);
    return false;
  }
}
