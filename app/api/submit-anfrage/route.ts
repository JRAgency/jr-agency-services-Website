import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const vecturoUrl = process.env.VECTURO_API_URL || "http://localhost:3001";
    const secret     = process.env.VECTURO_WEBHOOK_SECRET;

    if (!secret) {
      return NextResponse.json({ error: "VECTURO_WEBHOOK_SECRET nicht konfiguriert" }, { status: 500 });
    }

    const res = await fetch(`${vecturoUrl}/api/webhook/anfrage`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ ...body, secret }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("[submit-anfrage] Vecturo Fehler:", data);
      return NextResponse.json({ error: data.error || "Fehler beim Speichern" }, { status: res.status });
    }

    return NextResponse.json({ success: true, ...data });
  } catch (err) {
    console.error("[submit-anfrage]", err);
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
