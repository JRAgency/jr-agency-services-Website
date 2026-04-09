"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookingCalendar, { formatDate } from "@/components/ui/BookingCalendar";

const EASE = [0.22, 1, 0.36, 1] as const;
const TOTAL_STEPS = 5; // 0=Unternehmen, 1=Kanäle, 2=Ziel, 3=Kontakt, 4=Termin

const slide = {
  enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.97 }),
};

const KANAELE = [
  { value: "instagram", label: "Instagram", color: "#E1306C",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
  { value: "facebook", label: "Facebook", color: "#1877F2",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
  { value: "linkedin", label: "LinkedIn", color: "#0A66C2",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { value: "tiktok", label: "TikTok", color: "#010101",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.84a8.17 8.17 0 004.78 1.52V6.91a4.85 4.85 0 01-1.01-.22z"/></svg> },
  { value: "youtube", label: "YouTube", color: "#FF0000",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg> },
  { value: "xing", label: "Xing / X", color: "#006567",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> },
];

const ZIELE = [
  { value: "reichweite", label: "Mehr Reichweite", desc: "Follower & Sichtbarkeit aufbauen", color: "#3B82F6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
  { value: "leads", label: "Leads generieren", desc: "Anfragen & Neukunden", color: "#10B981",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { value: "community", label: "Community aufbauen", desc: "Engagement & Bindung", color: "#8B5CF6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
  { value: "branding", label: "Marke stärken", desc: "Bekanntheit & Image", color: "#F59E0B",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { value: "sales", label: "Verkäufe steigern", desc: "Produkte & Dienstleistungen", color: "#EC4899",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg> },
  { value: "recruiting", label: "Recruiting", desc: "Mitarbeiter gewinnen", color: "#14B8A6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
];

const stepLabels = ["Unternehmen", "Kanäle", "Ziel", "Kontakt", "Termin"];

const inputCls = "w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#EC4899]/60 transition-colors duration-200 text-sm";

function Shell({ label, title, sub, children }: { label: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <p className="text-[#EC4899]/70 text-xs font-bold uppercase tracking-[0.2em] mb-3">{label}</p>
      <h2 className="font-black text-white mb-2" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}>{title}</h2>
      {sub && <p className="text-white/35 text-sm mb-0">{sub}</p>}
      {children}
    </div>
  );
}

export default function SocialMediaAnfragePage() {
  const [step, setStep] = useState(-1);
  const [dir, setDir] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [industry, setIndustry] = useState("");
  const [kanaele, setKanaele] = useState<string[]>([]);
  const [ziel, setZiel] = useState("");
  const [notizen, setNotizen] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const go = (next: number) => { setDir(next > step ? 1 : -1); setStep(next); };
  const next = () => go(step + 1);
  const progress = step < 0 ? 0 : Math.min((step + 1) / TOTAL_STEPS, 1);

  const toggleKanal = (v: string) =>
    setKanaele(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);

  const submit = async (date: Date, time: string) => {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 9000);
      await fetch("/api/submit-anfrage", {
        method: "POST",
        signal: controller.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "social-media",
          name: contactPerson || companyName,
          email, phone,
          companyName, contactPerson, industry,
          projectType: "social-media",
          projectTypeLabel: "Social Media",
          goal: ziel,
          goalLabel: ZIELE.find(z => z.value === ziel)?.label ?? ziel,
          pages: kanaele.map(k => KANAELE.find(x => x.value === k)?.label ?? k).join(", "),
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#EC4899]/[0.05] rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {step >= 0 && step < TOTAL_STEPS && (
        <div className="relative z-10 max-w-2xl mx-auto w-full px-6 mt-16">
          <div className="hidden sm:flex justify-between mb-3">
            {stepLabels.map((label, i) => (
              <span key={label} className={`text-[10px] font-semibold uppercase tracking-widest transition-colors duration-300 ${i === step ? "text-[#EC4899]" : i < step ? "text-white/30" : "text-white/10"}`}>{label}</span>
            ))}
          </div>
          <div className="relative h-[3px] bg-white/[0.05] rounded-full overflow-hidden">
            <motion.div className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: "linear-gradient(90deg, #EC4899, #F9A8D4)" }}
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
                    className="inline-flex items-center gap-2 bg-[#EC4899]/10 border border-[#EC4899]/20 text-[#F9A8D4] text-xs font-semibold px-4 py-2 rounded-full mb-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse" />
                    Kostenlos & unverbindlich
                  </motion.div>
                  <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, ease: EASE }}
                    className="font-black text-white leading-[1.05] mb-6"
                    style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.4rem, 6vw, 4.2rem)", letterSpacing: "-0.03em" }}>
                    Social Media,<br />
                    <span className="bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#F9A8D4] bg-clip-text text-transparent">das wächst.</span>
                  </motion.h1>
                  <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}
                    className="text-white/50 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                    Wir übernehmen Ihre Social Media — Content, Community, Wachstum.
                  </motion.p>
                  <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
                    onClick={next}
                    className="inline-flex items-center gap-3 bg-[#EC4899] hover:bg-[#DB2777] text-white font-bold text-base px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:scale-[1.02]">
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
                        placeholder="z.B. Gastronomie, Beauty, Immobilien…" className={inputCls} />
                    </div>
                    <div className="flex justify-end pt-2">
                      <button onClick={next} disabled={!companyName}
                        className="inline-flex items-center gap-2 bg-[#EC4899] hover:bg-[#DB2777] disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300">
                        Weiter <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                      </button>
                    </div>
                  </div>
                </Shell>
              )}

              {/* STEP 1: Kanäle */}
              {step === 1 && (
                <Shell label="Social Media Kanäle" title="Welche Kanäle?" sub="Mehrfachauswahl möglich">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                    {KANAELE.map((k, i) => (
                      <motion.button key={k.value}
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, ease: EASE }}
                        onClick={() => toggleKanal(k.value)}
                        className="relative flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-200"
                        style={kanaele.includes(k.value) ? { background: k.color + "20", borderColor: k.color + "60" } : { background: "#0B1220", borderColor: "rgba(148,163,184,0.08)" }}>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: k.color + "20", color: k.color }}>{k.icon}</div>
                        <p className="text-white font-semibold text-sm">{k.label}</p>
                        {kanaele.includes(k.value) && (
                          <div className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: k.color }}>
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <button onClick={() => go(0)} className="text-white/30 text-sm hover:text-white/60 transition-colors">← Zurück</button>
                    <button onClick={next} disabled={kanaele.length === 0}
                      className="inline-flex items-center gap-2 bg-[#EC4899] hover:bg-[#DB2777] disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300">
                      Weiter <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                    </button>
                  </div>
                </Shell>
              )}

              {/* STEP 2: Ziel */}
              {step === 2 && (
                <Shell label="Ihr Ziel" title="Was soll Social Media für Sie erreichen?">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                    {ZIELE.map((z, i) => (
                      <motion.button key={z.value}
                        initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, ease: EASE }}
                        onClick={() => { setZiel(z.value); next(); }}
                        className="flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-200"
                        style={ziel === z.value ? { background: z.color + "15", borderColor: z.color + "50" } : { background: "#0B1220", borderColor: "rgba(148,163,184,0.08)" }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: z.color + "15", color: z.color }}>{z.icon}</div>
                        <div>
                          <p className="text-white font-semibold text-sm">{z.label}</p>
                          <p className="text-white/30 text-xs mt-0.5">{z.desc}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                  <div className="mt-6 space-y-2">
                    <p className="text-white/30 text-xs font-medium uppercase tracking-wider">Hinweise (optional)</p>
                    <textarea value={notizen} onChange={e => setNotizen(e.target.value)}
                      placeholder="Aktueller Stand, Budget, besondere Wünsche…"
                      rows={3} className={inputCls + " resize-none"} />
                  </div>
                  <div className="flex items-center justify-start mt-4">
                    <button onClick={() => go(1)} className="text-white/30 text-sm hover:text-white/60 transition-colors">← Zurück</button>
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
                      {[companyName, industry, ...kanaele.map(k => KANAELE.find(x => x.value === k)?.label), ZIELE.find(z => z.value === ziel)?.label].filter(Boolean).map((tag, i) => (
                        <span key={i} className="text-[11px] text-white/40 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <button onClick={() => go(2)} className="text-white/30 text-sm hover:text-white/60 transition-colors">← Zurück</button>
                      <button onClick={() => go(4)} disabled={!email}
                        className="inline-flex items-center gap-2 bg-[#EC4899] hover:bg-[#DB2777] disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300">
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
                    <div className="absolute inset-0 rounded-full bg-[#EC4899]/10 blur-xl scale-150" />
                    <div className="relative w-full h-full rounded-full bg-[#EC4899]/10 border border-[#EC4899]/30 flex items-center justify-center">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                  </motion.div>
                  <p className="text-[#EC4899] text-xs font-bold uppercase tracking-[0.2em] mb-3">Anfrage eingegangen</p>
                  <h2 className="font-black text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.025em" }}>
                    Danke{contactPerson ? `, ${contactPerson.split(" ")[0]}` : companyName ? `, ${companyName}` : ""}!
                  </h2>
                  {selectedDate && selectedTime && (
                    <div className="inline-flex items-center gap-3 bg-[#EC4899]/10 border border-[#EC4899]/20 text-white/70 text-sm px-5 py-3 rounded-2xl mb-8">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
