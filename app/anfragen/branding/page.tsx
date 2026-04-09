"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookingCalendar, { formatDate } from "@/components/ui/BookingCalendar";

const EASE = [0.22, 1, 0.36, 1] as const;
const TOTAL_STEPS = 5; // 0=Unternehmen, 1=Leistungen, 2=Stil, 3=Kontakt, 4=Termin

const slide = {
  enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.97 }),
};

const LEISTUNGEN = [
  { value: "logo", label: "Logo Design", desc: "Neues Logo oder Redesign", color: "#F59E0B",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { value: "ci", label: "Corporate Identity", desc: "Vollständige Markenidentität", color: "#3B82F6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { value: "visitenkarten", label: "Visitenkarten", desc: "Print & digitale Karten", color: "#10B981",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8L2 7h20l-6-4z"/></svg> },
  { value: "social_branding", label: "Social Media Kit", desc: "Templates & Grafiken", color: "#8B5CF6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg> },
  { value: "brand_guidelines", label: "Brand Guidelines", desc: "Styleguide & Regeln", color: "#EC4899",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { value: "komplett", label: "Komplettpaket", desc: "Alles aus einer Hand", color: "#14B8A6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
];

const STILE = [
  { value: "modern", label: "Modern & Clean", color: "#3B82F6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4"/></svg> },
  { value: "premium", label: "Premium & Elegant", color: "#C9A96E",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { value: "bold", label: "Bold & Auffällig", color: "#EF4444",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { value: "freundlich", label: "Freundlich & Warm", color: "#F59E0B",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
  { value: "minimalistisch", label: "Minimalistisch", color: "#8B5CF6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="5" y1="12" x2="19" y2="12"/></svg> },
  { value: "klassisch", label: "Klassisch & Seriös", color: "#6B7280",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
];

const stepLabels = ["Unternehmen", "Leistungen", "Stil", "Kontakt", "Termin"];

const inputCls = "w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#2563EB]/60 transition-colors duration-200 text-sm";

function Shell({ label, title, sub, children }: { label: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <p className="text-[#F59E0B]/70 text-xs font-bold uppercase tracking-[0.2em] mb-3">{label}</p>
      <h2 className="font-black text-white mb-2" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}>{title}</h2>
      {sub && <p className="text-white/35 text-sm mb-0">{sub}</p>}
      {children}
    </div>
  );
}

export default function BrandingAnfragePage() {
  const [step, setStep] = useState(-1);
  const [dir, setDir] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [industry, setIndustry] = useState("");
  const [leistungen, setLeistungen] = useState<string[]>([]);
  const [stil, setStil] = useState("");
  const [notizen, setNotizen] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const go = (next: number) => { setDir(next > step ? 1 : -1); setStep(next); };
  const next = () => go(step + 1);
  const progress = step < 0 ? 0 : Math.min((step + 1) / TOTAL_STEPS, 1);

  const toggleLeistung = (v: string) =>
    setLeistungen(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);

  const submit = async (date: Date, time: string) => {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 9000);
      await fetch("/api/submit-anfrage", {
        method: "POST",
        signal: controller.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "branding",
          name: contactPerson || companyName,
          email, phone,
          companyName, contactPerson, industry,
          projectType: "branding",
          projectTypeLabel: "Branding",
          goal: leistungen.join(", "),
          goalLabel: leistungen.map(l => LEISTUNGEN.find(x => x.value === l)?.label ?? l).join(", "),
          pages: STILE.find(s => s.value === stil)?.label ?? stil,
          firstNotes: notizen,
          timelineLabel: "",
          appointmentDate: formatDate(date),
          appointmentTime: time,
        }),
      });
      clearTimeout(timeout);
    } catch (err) {
      console.error("Webhook Fehler:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#060A14] flex flex-col overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#F59E0B]/[0.05] rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {step >= 0 && step < TOTAL_STEPS && (
        <div className="relative z-10 max-w-2xl mx-auto w-full px-6 mt-16">
          <div className="hidden sm:flex justify-between mb-3">
            {stepLabels.map((label, i) => (
              <span key={label} className={`text-[10px] font-semibold uppercase tracking-widest transition-colors duration-300 ${i === step ? "text-[#F59E0B]" : i < step ? "text-white/30" : "text-white/10"}`}>{label}</span>
            ))}
          </div>
          <div className="relative h-[3px] bg-white/[0.05] rounded-full overflow-hidden">
            <motion.div className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: "linear-gradient(90deg, #F59E0B, #FCD34D)" }}
              initial={false} animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.5, ease: EASE }} />
          </div>
        </div>
      )}

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-10 pt-16">
        <div className="w-full max-w-2xl">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div key={step} custom={dir} variants={slide}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.38, ease: EASE }}>

              {/* INTRO */}
              {step === -1 && (
                <div className="text-center py-10">
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#FCD34D] text-xs font-semibold px-4 py-2 rounded-full mb-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                    Kostenlos & unverbindlich
                  </motion.div>
                  <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, ease: EASE }}
                    className="font-black text-white leading-[1.05] mb-6"
                    style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.4rem, 6vw, 4.2rem)", letterSpacing: "-0.03em" }}>
                    Ihre Marke,<br />
                    <span className="bg-gradient-to-r from-[#F59E0B] via-[#FCD34D] to-[#FDE68A] bg-clip-text text-transparent">professionell.</span>
                  </motion.h1>
                  <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}
                    className="text-white/50 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                    Logo, Corporate Identity, Brand Guidelines — wir bauen Ihre Marke von Grund auf.
                  </motion.p>
                  <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
                    onClick={next}
                    className="inline-flex items-center gap-3 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-base px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:scale-[1.02]">
                    Jetzt starten
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </motion.button>
                  <p className="text-white/20 text-xs mt-4">Dauert ca. 2 Minuten · Kostenlos</p>
                </div>
              )}

              {/* STEP 0: Unternehmen */}
              {step === 0 && (
                <Shell label="Ihr Unternehmen" title="Erzählen Sie uns von sich">
                  <div className="mt-8 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/40 text-xs font-medium mb-2">Unternehmensname *</p>
                        <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)}
                          placeholder="Muster GmbH" className={inputCls} />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs font-medium mb-2">Ansprechpartner</p>
                        <input type="text" value={contactPerson} onChange={e => setContactPerson(e.target.value)}
                          placeholder="Max Mustermann" className={inputCls} />
                      </div>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium mb-2">Branche</p>
                      <input type="text" value={industry} onChange={e => setIndustry(e.target.value)}
                        placeholder="z.B. Gastronomie, IT, Handwerk…" className={inputCls} />
                    </div>
                    <div className="flex justify-end pt-2">
                      <button onClick={next} disabled={!companyName}
                        className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] disabled:opacity-20 disabled:cursor-not-allowed text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300">
                        Weiter <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                      </button>
                    </div>
                  </div>
                </Shell>
              )}

              {/* STEP 1: Leistungen */}
              {step === 1 && (
                <Shell label="Branding-Leistungen" title="Was benötigen Sie?" sub="Mehrfachauswahl möglich">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                    {LEISTUNGEN.map((l, i) => (
                      <motion.button key={l.value}
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, ease: EASE }}
                        onClick={() => toggleLeistung(l.value)}
                        className="relative p-5 rounded-2xl border text-left transition-all duration-200"
                        style={leistungen.includes(l.value) ? { background: l.color + "15", borderColor: l.color + "50" } : { background: "#0B1220", borderColor: "rgba(148,163,184,0.08)" }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: l.color + "15", color: l.color }}>{l.icon}</div>
                        <p className="text-white font-bold text-sm">{l.label}</p>
                        <p className="text-white/30 text-xs mt-0.5">{l.desc}</p>
                        {leistungen.includes(l.value) && (
                          <div className="absolute top-3 right-3 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: l.color }}>
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <button onClick={() => go(0)} className="text-white/30 text-sm hover:text-white/60 transition-colors">← Zurück</button>
                    <button onClick={next} disabled={leistungen.length === 0}
                      className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] disabled:opacity-20 disabled:cursor-not-allowed text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300">
                      Weiter <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                    </button>
                  </div>
                </Shell>
              )}

              {/* STEP 2: Stil */}
              {step === 2 && (
                <Shell label="Ihr Stil" title="Welchen Look stellen Sie sich vor?">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                    {STILE.map((s, i) => (
                      <motion.button key={s.value}
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, ease: EASE }}
                        onClick={() => { setStil(s.value); next(); }}
                        className="relative flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-200"
                        style={stil === s.value ? { background: s.color + "15", borderColor: s.color + "50" } : { background: "#0B1220", borderColor: "rgba(148,163,184,0.08)" }}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: s.color + "15", color: s.color }}>{s.icon}</div>
                        <p className="text-white font-semibold text-sm">{s.label}</p>
                      </motion.button>
                    ))}
                  </div>
                  <div className="mt-6 space-y-3">
                    <p className="text-white/30 text-xs font-medium uppercase tracking-wider">Zusätzliche Hinweise (optional)</p>
                    <textarea value={notizen} onChange={e => setNotizen(e.target.value)}
                      placeholder="Farben, Konkurrenz, Inspirationen, bestehende Materialien…"
                      rows={3} className={inputCls + " resize-none"} />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button onClick={() => go(1)} className="text-white/30 text-sm hover:text-white/60 transition-colors">← Zurück</button>
                    <button onClick={next}
                      className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300">
                      Weiter <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                    </button>
                  </div>
                </Shell>
              )}

              {/* STEP 3: Kontakt */}
              {step === 3 && (
                <Shell label="Kontakt" title="Wie erreichen wir Sie?">
                  <div className="mt-8 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/40 text-xs font-medium mb-2">E-Mail *</p>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                          placeholder="max@firma.de" className={inputCls} />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs font-medium mb-2">Telefon</p>
                        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                          placeholder="+49 152 …" className={inputCls} />
                      </div>
                    </div>
                    <div className="bg-[#0B1220] border border-white/[0.06] rounded-xl px-5 py-4 flex flex-wrap gap-2">
                      {[companyName, industry, ...leistungen.map(l => LEISTUNGEN.find(x => x.value === l)?.label), STILE.find(s => s.value === stil)?.label].filter(Boolean).map((tag, i) => (
                        <span key={i} className="text-[11px] text-white/40 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <button onClick={() => go(2)} className="text-white/30 text-sm hover:text-white/60 transition-colors">← Zurück</button>
                      <button onClick={() => go(4)} disabled={!email}
                        className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] disabled:opacity-20 disabled:cursor-not-allowed text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300">
                        Termin wählen <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                      </button>
                    </div>
                  </div>
                </Shell>
              )}

              {/* STEP 4: Termin */}
              {step === 4 && (
                <Shell label="Termin buchen" title="Wann passt es Ihnen?">
                  <div className="mt-8">
                    <BookingCalendar
                      onConfirm={async (date, time) => {
                        setSelectedDate(date);
                        setSelectedTime(time);
                        setSubmitting(true);
                        await submit(date, time);
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

              {/* SUCCESS */}
              {step === TOTAL_STEPS && (
                <div className="text-center py-6">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full bg-[#F59E0B]/10 blur-xl scale-150" />
                    <div className="relative w-full h-full rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                  </motion.div>
                  <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.2em] mb-3">Anfrage eingegangen</p>
                  <h2 className="font-black text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.025em" }}>
                    Danke{contactPerson ? `, ${contactPerson.split(" ")[0]}` : companyName ? `, ${companyName}` : ""}!
                  </h2>
                  {selectedDate && selectedTime && (
                    <div className="inline-flex items-center gap-3 bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-white/70 text-sm px-5 py-3 rounded-2xl mb-8">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {formatDate(selectedDate)} um {selectedTime} Uhr
                    </div>
                  )}
                  <p className="text-white/35 text-sm max-w-sm mx-auto">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
