"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BookingCalendar, { formatDate } from "@/components/ui/BookingCalendar";

const EASE = [0.22, 1, 0.36, 1] as const;
const TOTAL_STEPS = 6; // 0=Unternehmen, 1=Projekttyp, 2=Ziel, 3=Seiten+Hinweise, 4=Kontakt, 5=Termin

const slide = {
  enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.97 }),
};

const PROJECT_TYPES = [
  { value: "unternehmenswebsite", label: "Unternehmenswebsite", desc: "Professionelle Online-Präsenz", color: "#3B82F6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { value: "portfolio", label: "Portfolio", desc: "Arbeiten & Projekte präsentieren", color: "#EC4899",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> },
  { value: "funnel", label: "Sales Funnel", desc: "Landing Page & Conversion", color: "#F59E0B",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { value: "shop", label: "Online-Shop", desc: "E-Commerce & Produktseiten", color: "#10B981",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> },
  { value: "buchung", label: "Buchungswebsite", desc: "Termine & Reservierungen", color: "#8B5CF6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { value: "blog", label: "Blog / Magazine", desc: "Content, Artikel & News", color: "#14B8A6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> },
  { value: "community", label: "Community / Verein", desc: "Mitglieder & Gruppen", color: "#EF4444",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
];

const GOALS = [
  { value: "leads",       label: "Leads generieren",   color: "#3B82F6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { value: "bookings",    label: "Buchungen erhalten",  color: "#8B5CF6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { value: "sales",       label: "Produkte verkaufen",  color: "#10B981",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg> },
  { value: "branding",    label: "Marke aufbauen",      color: "#F59E0B",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { value: "portfolio",   label: "Portfolio zeigen",    color: "#EC4899",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> },
  { value: "information", label: "Informieren",         color: "#14B8A6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> },
];

const COMMON_PAGES = [
  { value: "startseite",  label: "Startseite"  },
  { value: "ueber_uns",   label: "Über uns"    },
  { value: "leistungen",  label: "Leistungen"  },
  { value: "portfolio",   label: "Portfolio"   },
  { value: "referenzen",  label: "Referenzen"  },
  { value: "blog",        label: "Blog"        },
  { value: "shop",        label: "Shop"        },
  { value: "kontakt",     label: "Kontakt"     },
  { value: "impressum",   label: "Impressum"   },
  { value: "datenschutz", label: "Datenschutz" },
  { value: "faq",         label: "FAQ"         },
  { value: "karriere",    label: "Karriere"    },
];

const TIMELINE_OPTIONS = [
  { value: "express", label: "Express", sub: "Fertig in 3 Tagen", color: "#EF4444",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { value: "asap", label: "So schnell wie möglich", sub: "Unter 2 Wochen", color: "#F59E0B",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { value: "1m", label: "In 4 Wochen", sub: "Entspannter Zeitplan", color: "#3B82F6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { value: "3m", label: "In 2–3 Monaten", sub: "Sorgfältige Planung", color: "#8B5CF6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg> },
  { value: "offen", label: "Kein fester Termin", sub: "Wir besprechen alles", color: "#10B981",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
];

const stepLabels = ["Unternehmen", "Website-Typ", "Ihr Ziel", "Details", "Kontakt", "Termin"];

// ── Main ──────────────────────────────────────────────────────────────────────
export default function AnfragenPage() {
  const [step, setStep] = useState(-1);
  const [dir, setDir] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Formular-Daten (spiegeln Vecturo Wizard)
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [industry, setIndustry] = useState("");
  const [hasWebsite, setHasWebsite] = useState<boolean | null>(null);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [projectType, setProjectType] = useState("");
  const [goal, setGoal] = useState("");
  const [pages, setPages] = useState<string[]>([]);
  const [firstNotes, setFirstNotes] = useState("");
  const [timeline, setTimeline] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const go = (next: number) => { setDir(next > step ? 1 : -1); setStep(next); };
  const next = () => go(step + 1);
  const back = () => go(step - 1);
  const progress = step < 0 ? 0 : Math.min((step + 1) / TOTAL_STEPS, 1);

  const togglePage = (v: string) =>
    setPages(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);

  const submitToVecturo = async (date: Date, time: string) => {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 9000);
      await fetch("/api/submit-anfrage", {
        method: "POST",
        signal: controller.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactPerson || companyName,
          email,
          phone,
          companyName,
          contactPerson,
          industry,
          hasWebsite: hasWebsite === true ? "Ja" : hasWebsite === false ? "Nein" : "",
          websiteUrl: websiteUrl || "",
          projectType,
          goal,
          pages,
          firstNotes,
          timelineLabel: TIMELINE_OPTIONS.find(t => t.value === timeline)?.label ?? timeline,
          appointmentDate: formatDate(date),
          appointmentTime: time,
        }),
      });
      clearTimeout(timeout);
    } catch (err) {
      console.error("Vecturo Webhook Fehler:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#060A14] flex flex-col overflow-x-hidden">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2563EB]/[0.07] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#7C3AED]/[0.05] rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {/* Progress bar */}
      {step >= 0 && step < TOTAL_STEPS && (
        <div className="relative z-10 max-w-3xl mx-auto w-full px-6 mt-16">
          <div className="hidden sm:flex justify-between mb-3">
            {stepLabels.map((label, i) => (
              <span key={label} className={`text-[10px] font-semibold uppercase tracking-widest transition-colors duration-300 ${i === step ? "text-[#60A5FA]" : i < step ? "text-white/30" : "text-white/10"}`}>
                {label}
              </span>
            ))}
          </div>
          <div className="relative h-[3px] bg-white/[0.05] rounded-full overflow-hidden">
            <motion.div className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: "linear-gradient(90deg, #2563EB, #60A5FA)" }}
              initial={false} animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.5, ease: EASE }} />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-10 pt-16">
        <div className="w-full max-w-3xl">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div key={step} custom={dir} variants={slide}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.38, ease: EASE }}>

              {/* ── INTRO ── */}
              {step === -1 && (
                <div className="text-center py-10">
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#93C5FD] text-xs font-semibold px-4 py-2 rounded-full mb-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
                    Kostenlos & unverbindlich
                  </motion.div>
                  <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, ease: EASE }}
                    className="font-black text-white leading-[1.05] mb-6"
                    style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.6rem, 6vw, 4.5rem)", letterSpacing: "-0.03em" }}>
                    Ihre Demo-Website<br />
                    <span className="bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">in 48 Stunden.</span>
                  </motion.h1>
                  <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}
                    className="text-white/50 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                    Beantworten Sie ein paar kurze Fragen — wir erstellen Ihnen eine individuelle Demo komplett kostenlos.
                  </motion.p>
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }}
                    className="flex items-center justify-center gap-8 mb-12">
                    {[["48h", "Lieferzeit"], ["100%", "Kostenlos"], ["30+", "Projekte"]].map(([val, label]) => (
                      <div key={label} className="text-center">
                        <p className="text-white font-black text-2xl" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{val}</p>
                        <p className="text-white/30 text-xs mt-0.5">{label}</p>
                      </div>
                    ))}
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.42, ease: EASE }}
                    className="relative mb-12 rounded-2xl overflow-hidden border border-white/[0.06]"
                    style={{ background: "linear-gradient(135deg, #0B1220, #080F1C)" }}>
                    <div className="flex gap-4 p-4 overflow-x-auto scrollbar-none" style={{ scrollbarWidth: "none" }}>
                      {["01 - Apple Devices Mockup lombare.png", "01 - Apple Devices Mockup kimchi.png", "01 - Apple Devices Mockup Mana.png"].map((img) => (
                        <div key={img} className="flex-none w-[220px] rounded-xl overflow-hidden aspect-[16/10] relative">
                          <Image src={`/images/${img}`} alt="" fill className="object-cover object-top" sizes="220px" />
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#080F1C] to-transparent pointer-events-none" />
                  </motion.div>
                  <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                    onClick={next}
                    className="group inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:scale-[1.02]">
                    Jetzt starten
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="group-hover:translate-x-0.5 transition-transform duration-200"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </motion.button>
                  <p className="text-white/20 text-xs mt-4">Dauert ca. 3 Minuten · Keine Kreditkarte nötig</p>
                </div>
              )}

              {/* ── STEP 0: Unternehmen ── */}
              {step === 0 && (
                <Shell label="Ihr Unternehmen" title="Erzählen Sie uns von sich" sub="Diese Infos helfen uns, Ihre Demo individuell zu gestalten.">
                  <div className="mt-8 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Unternehmensname" required>
                        <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)}
                          placeholder="Muster GmbH" autoComplete="organization"
                          className={inputCls} />
                      </Field>
                      <Field label="Ansprechpartner" optional>
                        <input type="text" value={contactPerson} onChange={e => setContactPerson(e.target.value)}
                          placeholder="Max Mustermann" autoComplete="name"
                          className={inputCls} />
                      </Field>
                    </div>
                    <Field label="Branche" optional>
                      <select value={industry} onChange={e => setIndustry(e.target.value)}
                        className={inputCls + " appearance-none"}>
                        <option value="">Branche wählen</option>
                        {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </Field>
                    <Field label="Haben Sie bereits eine Website?" optional>
                      <div className="flex gap-3 mt-1">
                        {["Ja", "Nein"].map(opt => (
                          <button key={opt} type="button"
                            onClick={() => setHasWebsite(opt === "Ja")}
                            className={`px-6 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${hasWebsite === (opt === "Ja") ? "bg-[#2563EB]/15 border-[#2563EB]/50 text-white" : "bg-white/[0.03] border-white/[0.08] text-white/40 hover:border-white/20"}`}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    </Field>
                    {hasWebsite && (
                      <Field label="URL der bestehenden Website" optional>
                        <input type="url" value={websiteUrl} onChange={e => setWebsiteUrl(e.target.value)}
                          placeholder="https://www.beispiel.de"
                          className={inputCls} />
                      </Field>
                    )}
                    <div className="flex justify-end pt-2">
                      <button onClick={next} disabled={!companyName}
                        className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_36px_rgba(37,99,235,0.5)]">
                        Weiter
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                      </button>
                    </div>
                  </div>
                </Shell>
              )}

              {/* ── STEP 1: Projekttyp ── */}
              {step === 1 && (
                <Shell label="Website-Typ" title="Welche Art von Website planen Sie?" sub="Wählen Sie die Option die am besten zu Ihnen passt.">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                    {PROJECT_TYPES.map((t, i) => (
                      <motion.button key={t.value}
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, ease: EASE }}
                        onClick={() => { setProjectType(t.value); next(); }}
                        className="relative group p-5 rounded-2xl border text-left transition-all duration-200 overflow-hidden"
                        style={projectType === t.value ? { background: t.color + "12", borderColor: t.color + "50" } : { background: "#0B1220", borderColor: "rgba(148,163,184,0.08)" }}>
                        <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)` }} />
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors"
                          style={{ background: t.color + "15", color: t.color, border: `1px solid ${t.color}25` }}>
                          {t.icon}
                        </div>
                        <p className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t.label}</p>
                        <p className="text-white/30 text-xs mt-1 leading-snug">{t.desc}</p>
                      </motion.button>
                    ))}
                  </div>
                </Shell>
              )}

              {/* ── STEP 2: Ziel ── */}
              {step === 2 && (
                <Shell label="Ihr Ziel" title="Was soll Ihre Website hauptsächlich erreichen?" sub="Das hilft uns das Design und die Struktur optimal auszurichten.">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                    {GOALS.map((g, i) => (
                      <motion.button key={g.value}
                        initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06, ease: EASE }}
                        onClick={() => { setGoal(g.value); next(); }}
                        className="relative flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-200 overflow-hidden"
                        style={goal === g.value ? { background: g.color + "12", borderColor: g.color + "50" } : { background: "#0B1220", borderColor: "rgba(148,163,184,0.08)" }}>
                        <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                          style={{ background: g.color + "15", color: g.color }}>
                          {g.icon}
                        </div>
                        <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{g.label}</p>
                      </motion.button>
                    ))}
                  </div>
                </Shell>
              )}

              {/* ── STEP 3: Seiten + Zeitplan + Hinweise ── */}
              {step === 3 && (
                <Shell label="Details" title="Was soll Ihre Website beinhalten?" sub="Mehrfachauswahl möglich — und wann soll sie fertig sein?">
                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="text-white/30 text-[11px] uppercase tracking-widest mb-3">Gewünschte Seiten</p>
                      <div className="flex flex-wrap gap-2">
                        {COMMON_PAGES.map(p => (
                          <button key={p.value} onClick={() => togglePage(p.value)}
                            className={`px-4 py-2 rounded-full border text-xs font-semibold transition-all duration-200 ${pages.includes(p.value) ? "bg-[#2563EB]/15 border-[#2563EB]/50 text-[#60A5FA]" : "bg-white/[0.03] border-white/[0.08] text-white/40 hover:border-white/20 hover:text-white/60"}`}>
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-white/30 text-[11px] uppercase tracking-widest mb-3">Zeitplan</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {TIMELINE_OPTIONS.map(t => (
                          <button key={t.value} onClick={() => setTimeline(t.value)}
                            className={`relative flex items-center gap-4 px-5 py-4 rounded-xl border text-left transition-all duration-200 ${t.value === "express" ? "sm:col-span-2" : ""}`}
                            style={timeline === t.value ? { background: t.color + "12", borderColor: t.color + "50" } : { background: "#0B1220", borderColor: "rgba(148,163,184,0.08)" }}>
                            <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                              style={{ background: t.color + "15", color: t.color }}>
                              {t.icon}
                            </div>
                            <div>
                              <p className="text-white font-bold text-sm">{t.label}</p>
                              <p className="text-white/30 text-xs">{t.sub}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <Field label="Erste Hinweise & Wünsche" optional>
                      <textarea value={firstNotes} onChange={e => setFirstNotes(e.target.value)}
                        placeholder="z.B. Farben, Stil, Konkurrenz, besondere Anforderungen..."
                        rows={3} className={inputCls + " resize-none"} />
                    </Field>

                    <div className="flex justify-between items-center pt-2">
                      <p className="text-white/20 text-xs">{pages.length > 0 ? `${pages.length} Seiten gewählt` : ""}</p>
                      <button onClick={next}
                        className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_36px_rgba(37,99,235,0.5)]">
                        Weiter
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                      </button>
                    </div>
                  </div>
                </Shell>
              )}

              {/* ── STEP 4: Kontakt ── */}
              {step === 4 && (
                <Shell label="Kontakt" title="Wie erreichen wir Sie?" sub="Wir melden uns innerhalb von 24 Stunden mit Ihrer Demo.">
                  <div className="mt-8 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="E-Mail" required>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                          placeholder="max@firma.de" autoComplete="email" className={inputCls} />
                      </Field>
                      <Field label="Telefon" optional>
                        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                          placeholder="+49 152 ..." autoComplete="tel" className={inputCls} />
                      </Field>
                    </div>

                    {/* Zusammenfassung */}
                    <div className="bg-[#0B1220] border border-white/[0.06] rounded-xl px-5 py-4 flex flex-wrap gap-2">
                      {[
                        companyName,
                        industry,
                        PROJECT_TYPES.find(t => t.value === projectType)?.label,
                        GOALS.find(g => g.value === goal)?.label,
                        TIMELINE_OPTIONS.find(t => t.value === timeline)?.label,
                      ].filter(Boolean).map((tag, i) => (
                        <span key={i} className="text-[11px] text-white/40 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-white/20 text-[11px]">Keine Weitergabe Ihrer Daten</p>
                      <button onClick={() => go(5)} disabled={!email}
                        className="inline-flex items-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_36px_rgba(37,99,235,0.5)] hover:scale-[1.02]">
                        Termin wählen
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                      </button>
                    </div>
                  </div>
                </Shell>
              )}

              {/* ── STEP 5: Termin ── */}
              {step === 5 && (
                <Shell label="Termin buchen" title="Wann passt es Ihnen?" sub="Wählen Sie einen Termin für Ihr kostenloses Beratungsgespräch — min. 48 Stunden Vorlauf.">
                  <div className="mt-8">
                    <BookingCalendar
                      onConfirm={async (date, time) => {
                        setSelectedDate(date);
                        setSelectedTime(time);
                        setSubmitting(true);
                        await submitToVecturo(date, time);
                        setSubmitting(false);
                        go(TOTAL_STEPS);
                      }}
                    />
                    {submitting && (
                      <div className="flex items-center justify-center gap-3 mt-6 text-white/30 text-sm">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="32" strokeDashoffset="12"/>
                        </svg>
                        Anfrage wird gespeichert…
                      </div>
                    )}
                  </div>
                </Shell>
              )}

              {/* ── SUCCESS ── */}
              {step === TOTAL_STEPS && (
                <div className="text-center py-6">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full bg-[#10B981]/10 blur-xl scale-150" />
                    <div className="relative w-full h-full rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center"
                      style={{ boxShadow: "0 0 40px rgba(16,185,129,0.2)" }}>
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <p className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] mb-3">Anfrage eingegangen</p>
                    <h2 className="font-black text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}>
                      Danke{contactPerson ? `, ${contactPerson.split(" ")[0]}` : companyName ? `, ${companyName}` : ""}!
                    </h2>
                    {selectedDate && selectedTime && (
                      <div className="inline-flex items-center gap-3 bg-[#2563EB]/10 border border-[#2563EB]/20 text-white/70 text-sm px-5 py-3 rounded-2xl mb-8">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>Ihr Termin: <strong className="text-white">{formatDate(selectedDate)}</strong> um <strong className="text-white">{selectedTime} Uhr</strong></span>
                      </div>
                    )}
                    <p className="text-white/40 text-base max-w-sm mx-auto mb-10">
                      Wir erstellen Ihre individuelle Demo und melden uns innerhalb von <span className="text-white font-semibold">24 Stunden</span>.
                    </p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                    className="flex items-center justify-center gap-6 flex-wrap">
                    <Link href="/" className="text-white/30 hover:text-white/60 text-sm transition-colors duration-200">
                      ← Zurück zur Website
                    </Link>
                    <a href="tel:+4915225992009" className="inline-flex items-center gap-2 text-[#60A5FA]/60 hover:text-[#60A5FA] text-sm transition-colors duration-200">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.68 8.5 19.79 19.79 0 01.65 2.18 2 2 0 012.63 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.13 7.4a16 16 0 006.29 6.29l.77-.78a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                      Direkt anrufen
                    </a>
                  </motion.div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Back button */}
          {step > 0 && step < TOTAL_STEPS && (
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={back}
              className="mt-8 flex items-center gap-2 text-white/20 hover:text-white/50 text-sm transition-colors duration-200">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M13 8H3M7 12l-4-4 4-4"/></svg>
              Zurück
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Branchen (aus Vecturo Wizard) ─────────────────────────────────────────────
const INDUSTRIES = [
  'App-Entwicklung','Apotheke','Architekt','Arztpraxis / Medizin','Autohandel','Automobilindustrie',
  'Bank / Finanzdienstleistung','Bar / Cocktailbar','Barber / Herrenfriseur','Baugewerbe','Beauty / Kosmetik','Beratung / Consulting','Buchhaltung / Steuerberatung',
  'Café','Catering','Coaching / Mentoring',
  'Dachdecker','Data Science / KI','Dentist / Zahnarzt','Druck / Print',
  'E-Commerce / Online-Shop','E-Learning / Online-Kurse','Einzelhandel','Elektriker','Ernährungsberatung','Event-Management',
  'Fahrschule','Film & Video','Fitnessstudio / Personal Training','Fliesenleger','Fotografie','Friseur / Salon',
  'Gärtner / Gartenbau','Gastronomie','Grafik-Design','Großhandel',
  'Handwerk','Heizung & Sanitär','Hotel / Unterkunft',
  'Immobilien','Innenarchitektur','IT / Software',
  'Kindergarten / Kita','Krankenhaus / Klinik',
  'Logistik / Transport',
  'Maler & Lackierer','Marketing / Agentur','Maschinenbau','Massage / Körpertherapie','Mode & Bekleidung','Musik / Band',
  'Nagel-Studio',
  'Online-Shop','Optiker',
  'Physiotherapie','Psychologie / Therapie',
  'Recht / Kanzlei','Reinigungsservice','Restaurant',
  'Schreiner / Tischler','Schule / Akademie','Spa & Wellness','Steuerberatung / Wirtschaftsprüfung',
  'Tattoo & Piercing','Tiermedizin / Tierarzt','Trainer / Dozent',
  'Umzugsunternehmen','Unternehmensberatung',
  'Verein / Club','Versicherungsagentur',
  'Webdesign / Webentwicklung','Weinhandel / Winzer',
  'Yoga / Meditation',
  'Zimmerer',
  'Sonstiges',
];

// ── Helper components ─────────────────────────────────────────────────────────
const inputCls = "w-full bg-[#0B1220] border border-white/[0.08] focus:border-[#2563EB]/60 text-white placeholder-white/20 rounded-xl px-5 py-4 text-sm outline-none transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]";

function Shell({ label, title, sub, children }: { label: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#60A5FA]/50 text-xs font-bold uppercase tracking-[0.2em] mb-3">{label}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
        className="text-2xl sm:text-3xl font-extrabold text-white leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)", letterSpacing: "-0.02em" }}>{title}</motion.h2>
      {sub && <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.09 }} className="mt-2 text-white/35 text-sm">{sub}</motion.p>}
      {children}
    </div>
  );
}

function Field({ label, required, optional, children }: { label: string; required?: boolean; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-white/30 text-[11px] uppercase tracking-widest mb-2">
        {label}
        {required && <span className="text-[#2563EB]">*</span>}
        {optional && <span className="text-white/15 normal-case tracking-normal">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
