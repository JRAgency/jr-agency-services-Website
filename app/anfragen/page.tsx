"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BookingCalendar, { formatDate } from "@/components/ui/BookingCalendar";

interface Answers {
  websiteType: string;
  businessType: string;
  features: string[];
  timeline: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL: Answers = {
  websiteType: "",
  businessType: "",
  features: [],
  timeline: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

const EASE = [0.22, 1, 0.36, 1] as const;
const TOTAL_STEPS = 6;

const slide = {
  enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.97 }),
};

// ─── Step data ────────────────────────────────────────────────────────────────

const websiteTypes = [
  {
    id: "landing",
    label: "Landing Page",
    desc: "Eine Seite, ein Ziel — maximale Conversion",
    color: "#3B82F6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    id: "company",
    label: "Unternehmenswebsite",
    desc: "Professioneller Auftritt für Ihr Unternehmen",
    color: "#8B5CF6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: "shop",
    label: "Online-Shop",
    desc: "Produkte verkaufen rund um die Uhr",
    color: "#10B981",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
  },
  {
    id: "restaurant",
    label: "Restaurant / Café",
    desc: "Speisekarte, Reservierung & Atmosphäre",
    color: "#F59E0B",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    id: "portfolio",
    label: "Portfolio",
    desc: "Ihre Arbeit im besten Licht präsentieren",
    color: "#EC4899",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
  },
  {
    id: "service",
    label: "Dienstleistung",
    desc: "Kunden gewinnen & Anfragen erhalten",
    color: "#14B8A6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
];

const businessTypes = [
  {
    id: "gastro", label: "Gastronomie", desc: "Restaurant, Café, Bar, Catering",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3z"/><path d="M18 22v-3"/></svg>,
  },
  {
    id: "handwerk", label: "Handwerk & Bau", desc: "Baugewerbe, Sanitär, Elektriker",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  },
  {
    id: "beauty", label: "Beauty & Wellness", desc: "Friseur, Kosmetik, Massage",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  },
  {
    id: "fitness", label: "Fitness & Sport", desc: "Gym, Trainer, Sportstudio",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M6 4v16M18 4v16M3 8h3M18 8h3M3 16h3M18 16h3M9 4h6"/><rect x="9" y="4" width="6" height="16" rx="1"/></svg>,
  },
  {
    id: "beratung", label: "Beratung & Recht", desc: "Anwalt, Steuer, Consulting",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
  },
  {
    id: "medizin", label: "Gesundheit & Arzt", desc: "Arztpraxis, Therapie, Pflege",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  },
  {
    id: "handel", label: "Einzelhandel", desc: "Ladengeschäft, Boutique",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
  },
  {
    id: "sonstiges", label: "Sonstiges", desc: "Anderes Unternehmen",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  },
];

const featureOptions = [
  { id: "anfragen", label: "Anfragen & Kontakt", desc: "Kontaktformular & schnelle Erreichbarkeit", color: "#3B82F6" },
  { id: "seo", label: "Google-Sichtbarkeit", desc: "SEO-Optimierung für mehr Besucher", color: "#10B981" },
  { id: "verkaufen", label: "Online verkaufen", desc: "Shop-Funktion & Zahlungsabwicklung", color: "#F59E0B" },
  { id: "termin", label: "Terminbuchung", desc: "Kunden buchen direkt online", color: "#8B5CF6" },
  { id: "mobil", label: "Perfekt auf Handy", desc: "Mobile-First Responsive Design", color: "#EC4899" },
  { id: "schnell", label: "Blitzschnell", desc: "Top Performance & Ladezeiten", color: "#14B8A6" },
];

const timelineOptions = [
  {
    id: "express", label: "Express", sub: "Fertig in 3 Tagen", color: "#EF4444",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
  {
    id: "asap", label: "So schnell wie möglich", sub: "Unter 2 Wochen", color: "#F59E0B",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    id: "1m", label: "In 4 Wochen", sub: "Entspannter Zeitplan", color: "#3B82F6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    id: "3m", label: "In 2–3 Monaten", sub: "Sorgfältige Planung", color: "#8B5CF6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>,
  },
  {
    id: "offen", label: "Kein fester Termin", sub: "Wir besprechen alles", color: "#10B981",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  },
];

function getRecommendation(answers: Answers) {
  const f = answers.features;
  if (f.includes("verkaufen") && f.includes("seo")) return { title: "E-Commerce Pro", badge: "Empfohlen", color: "#10B981", desc: "Online-Shop mit Suchmaschinenoptimierung für maximale Reichweite und Umsatz." };
  if (f.includes("termin") && f.includes("anfragen")) return { title: "Service & Buchung", badge: "Ideal für Sie", color: "#8B5CF6", desc: "Professionelle Website mit integrierter Terminbuchung und Kontaktformular." };
  if (f.includes("seo")) return { title: "Sichtbarkeits-Paket", badge: "Wachstum", color: "#3B82F6", desc: "Ihre Website mit starker SEO-Basis für mehr Kunden über Google." };
  return { title: "Individuelles Angebot", badge: "Maßgeschneidert", color: "#2563EB", desc: "Wir erstellen ein Angebot, das perfekt auf Ihre Anforderungen zugeschnitten ist." };
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function AnfragenPage() {
  const [step, setStep] = useState(-1); // -1 = intro
  const [dir, setDir] = useState(1);
  const [answers, setAnswers] = useState<Answers>(INITIAL);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const go = (next: number) => { setDir(next > step ? 1 : -1); setStep(next); };

  const submitToVecturo = async (date: Date, time: string) => {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      await fetch("/api/submit-anfrage", {
        method: "POST",
        signal: controller.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:              answers.name,
          email:             answers.email,
          phone:             answers.phone,
          message:           answers.message,
          websiteType:       answers.websiteType,
          websiteTypeLabel:  websiteTypes.find(w => w.id === answers.websiteType)?.label ?? "",
          businessType:      answers.businessType,
          businessTypeLabel: businessTypes.find(b => b.id === answers.businessType)?.label ?? "",
          features:          answers.features,
          featuresLabels:    answers.features.map(f => featureOptions.find(o => o.id === f)?.label ?? f),
          timeline:          answers.timeline,
          timelineLabel:     timelineOptions.find(t => t.id === answers.timeline)?.label ?? "",
          appointmentDate:   formatDate(date),
          appointmentTime:   time,
        }),
      });
      clearTimeout(timeout);
    } catch (err) {
      console.error("Anfrage konnte nicht an Vecturo übermittelt werden:", err);
      // Fehler ignorieren — User wird trotzdem zur Erfolgsseite weitergeleitet
    }
  };
  const next = () => go(step + 1);
  const back = () => go(step - 1);
  const rec = getRecommendation(answers);
  const progress = step < 0 ? 0 : Math.min((step + 1) / TOTAL_STEPS, 1);

  const stepLabels = ["Website-Typ", "Branche", "Ziele", "Zeitplan", "Kontakt", "Termin"];

  return (
    <div className="min-h-screen bg-[#060A14] flex flex-col overflow-x-hidden">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2563EB]/[0.07] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#7C3AED]/[0.05] rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>


{/* Progress bar + step labels */}
      {step >= 0 && step < TOTAL_STEPS && (
        <div className="relative z-10 max-w-3xl mx-auto w-full px-6 mt-16">
          {/* Labels */}
          <div className="hidden sm:flex justify-between mb-3">
            {stepLabels.map((label, i) => (
              <span key={label} className={`text-[10px] font-semibold uppercase tracking-widest transition-colors duration-300 ${i === step ? "text-[#60A5FA]" : i < step ? "text-white/30" : "text-white/10"}`}>
                {label}
              </span>
            ))}
          </div>
          <div className="relative h-[3px] bg-white/[0.05] rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: "linear-gradient(90deg, #2563EB, #60A5FA)" }}
              initial={false}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.5, ease: EASE }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-10 pt-16">
        <div className="w-full max-w-3xl">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={step}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: EASE }}
            >

              {/* ── INTRO ── */}
              {step === -1 && (
                <div className="text-center py-10">
                  {/* Badge */}
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#93C5FD] text-xs font-semibold px-4 py-2 rounded-full mb-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
                    Kostenlos & unverbindlich
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, ease: EASE }}
                    className="font-black text-white leading-[1.05] mb-6"
                    style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.6rem, 6vw, 4.5rem)", letterSpacing: "-0.03em" }}
                  >
                    Ihre Demo-Website<br />
                    <span className="bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                      in 48 Stunden.
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}
                    className="text-white/50 text-lg max-w-md mx-auto mb-10 leading-relaxed"
                  >
                    Beantworten Sie 5 kurze Fragen — wir erstellen Ihnen eine individuelle Demo komplett kostenlos.
                  </motion.p>

                  {/* Stats row */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }}
                    className="flex items-center justify-center gap-8 mb-12"
                  >
                    {[["48h", "Lieferzeit"], ["100%", "Kostenlos"], ["30+", "Projekte"]].map(([val, label]) => (
                      <div key={label} className="text-center">
                        <p className="text-white font-black text-2xl" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{val}</p>
                        <p className="text-white/30 text-xs mt-0.5">{label}</p>
                      </div>
                    ))}
                  </motion.div>

                  {/* Mockup preview strip */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.42, ease: EASE }}
                    className="relative mb-12 rounded-2xl overflow-hidden border border-white/[0.06]"
                    style={{ background: "linear-gradient(135deg, #0B1220, #080F1C)" }}
                  >
                    <div className="flex gap-4 p-4 overflow-x-auto scrollbar-none" style={{ scrollbarWidth: "none" }}>
                      {[
                        "01 - Apple Devices Mockup lombare.png",
                        "01 - Apple Devices Mockup kimchi.png",
                        "01 - Apple Devices Mockup Mana.png",
                      ].map((img) => (
                        <div key={img} className="flex-none w-[220px] rounded-xl overflow-hidden aspect-[16/10] relative">
                          <Image src={`/images/${img}`} alt="" fill className="object-cover object-top" sizes="220px" />
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#080F1C] to-transparent pointer-events-none" />
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                    onClick={next}
                    className="group inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:scale-[1.02]"
                  >
                    Jetzt starten
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
                      className="group-hover:translate-x-0.5 transition-transform duration-200">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </motion.button>
                  <p className="text-white/20 text-xs mt-4">Dauert ca. 2 Minuten · Keine Kreditkarte nötig</p>
                </div>
              )}

              {/* ── STEP 0: Website type ── */}
              {step === 0 && (
                <Shell label="Was planen Sie?" title="Welche Art von Website benötigen Sie?" sub="Wir passen das Design genau auf Ihren Bedarf an.">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                    {websiteTypes.map((w, i) => (
                      <motion.button key={w.id}
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06, ease: EASE }}
                        onClick={() => { setAnswers(a => ({ ...a, websiteType: w.id })); next(); }}
                        className={`group relative p-6 rounded-2xl border text-left transition-all duration-200 overflow-hidden ${
                          answers.websiteType === w.id ? "border-opacity-60 bg-opacity-15" : "bg-[#0B1220] border-white/[0.06] hover:border-white/[0.15] hover:bg-[#0D1526]"
                        }`}
                        style={answers.websiteType === w.id ? { background: w.color + "12", borderColor: w.color + "55" } : {}}
                      >
                        <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: `linear-gradient(90deg, transparent, ${w.color}60, transparent)` }} />
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200"
                          style={{ background: w.color + "15", color: w.color, border: `1px solid ${w.color}25` }}>
                          {w.icon}
                        </div>
                        <p className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{w.label}</p>
                        <p className="text-white/30 text-xs mt-1 leading-snug">{w.desc}</p>
                      </motion.button>
                    ))}
                  </div>
                </Shell>
              )}

              {/* ── STEP 1: Business type ── */}
              {step === 1 && (
                <Shell label="Ihre Branche" title="In welchem Bereich sind Sie tätig?" sub="So können wir branchenspezifische Designs empfehlen.">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                    {businessTypes.map((bt, i) => (
                      <motion.button key={bt.id}
                        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, ease: EASE }}
                        onClick={() => { setAnswers(a => ({ ...a, businessType: bt.id })); next(); }}
                        className={`p-5 rounded-2xl border text-center transition-all duration-200 ${
                          answers.businessType === bt.id
                            ? "bg-[#2563EB]/12 border-[#2563EB]/50"
                            : "bg-[#0B1220] border-white/[0.06] hover:border-[#2563EB]/30 hover:bg-[#0D1526]"
                        }`}
                      >
                        <div className={`mx-auto w-10 h-10 flex items-center justify-center mb-4 rounded-xl transition-colors duration-200 ${answers.businessType === bt.id ? "text-[#60A5FA] bg-[#2563EB]/15" : "text-white/35 bg-white/[0.04]"}`}>
                          {bt.icon}
                        </div>
                        <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{bt.label}</p>
                        <p className="text-white/25 text-[11px] mt-1 leading-snug">{bt.desc}</p>
                      </motion.button>
                    ))}
                  </div>
                </Shell>
              )}

              {/* ── STEP 2: Features (multi-select) ── */}
              {step === 2 && (
                <Shell label="Ihre Ziele" title="Was soll Ihre Website leisten?" sub="Mehrfachauswahl möglich — wählen Sie alles was wichtig ist.">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                    {featureOptions.map((f, i) => {
                      const sel = answers.features.includes(f.id);
                      return (
                        <motion.button key={f.id}
                          initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06, ease: EASE }}
                          onClick={() => setAnswers(a => ({
                            ...a,
                            features: sel ? a.features.filter(x => x !== f.id) : [...a.features, f.id]
                          }))}
                          className={`relative flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-200 overflow-hidden ${
                            sel ? "border-opacity-50" : "bg-[#0B1220] border-white/[0.06] hover:border-white/[0.14]"
                          }`}
                          style={sel ? { background: f.color + "10", borderColor: f.color + "45" } : {}}
                        >
                          <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                            style={{ background: f.color + (sel ? "20" : "10"), color: f.color }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                              {f.id === "anfragen" && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>}
                              {f.id === "seo" && <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>}
                              {f.id === "verkaufen" && <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></>}
                              {f.id === "termin" && <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>}
                              {f.id === "mobil" && <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>}
                              {f.id === "schnell" && <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>}
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{f.label}</p>
                            <p className="text-white/30 text-xs mt-0.5">{f.desc}</p>
                          </div>
                          <AnimatePresence>
                            {sel && (
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                                style={{ background: f.color }}>
                                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      );
                    })}
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <p className="text-white/20 text-xs">{answers.features.length} ausgewählt</p>
                    <button onClick={next} disabled={answers.features.length === 0}
                      className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-20 disabled:cursor-not-allowed text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_0_28px_rgba(37,99,235,0.4)]">
                      Weiter
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                    </button>
                  </div>
                </Shell>
              )}

              {/* ── STEP 3: Timeline ── */}
              {step === 3 && (
                <Shell label="Ihr Zeitplan" title="Wann soll Ihre Website fertig sein?" sub="Damit wir Kapazitäten realistisch einplanen können.">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                    {/* Express — full width highlight */}
                    {timelineOptions.map((t, i) => (
                      <motion.button key={t.id}
                        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07, ease: EASE }}
                        onClick={() => { setAnswers(a => ({ ...a, timeline: t.id })); next(); }}
                        className={`relative flex items-center gap-5 p-6 rounded-2xl border text-left transition-all duration-200 overflow-hidden ${
                          t.id === "express" ? "sm:col-span-2" : ""
                        } ${answers.timeline === t.id ? "" : "bg-[#0B1220] border-white/[0.06] hover:border-white/[0.14]"}`}
                        style={answers.timeline === t.id ? { background: t.color + "12", borderColor: t.color + "50" } : {}}
                      >
                        <div className="absolute top-0 left-0 right-0 h-[1px]"
                          style={{ background: `linear-gradient(90deg, transparent, ${t.color}50, transparent)` }} />
                        <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{ background: t.color + "15", color: t.color, border: `1px solid ${t.color}25` }}>
                          {t.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-white font-bold" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t.label}</p>
                            {t.id === "express" && (
                              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "#EF444420", color: "#EF4444", border: "1px solid #EF444430" }}>
                                Premium
                              </span>
                            )}
                          </div>
                          <p className="text-white/35 text-xs mt-0.5">{t.sub}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </Shell>
              )}

              {/* ── STEP 4: Contact ── */}
              {step === 4 && (
                <Shell label="Fast geschafft" title="Wie erreichen wir Sie?" sub="Wir melden uns innerhalb von 24 Stunden mit Ihrer Demo.">
                  <div className="mt-8 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Ihr Name" required>
                        <input type="text" value={answers.name} onChange={e => setAnswers(a => ({ ...a, name: e.target.value }))}
                          placeholder="Max Mustermann" autoComplete="name"
                          className="w-full bg-[#0B1220] border border-white/[0.08] focus:border-[#2563EB]/60 text-white placeholder-white/20 rounded-xl px-5 py-4 text-sm outline-none transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]" />
                      </Field>
                      <Field label="E-Mail" required>
                        <input type="email" value={answers.email} onChange={e => setAnswers(a => ({ ...a, email: e.target.value }))}
                          placeholder="max@firma.de" autoComplete="email"
                          className="w-full bg-[#0B1220] border border-white/[0.08] focus:border-[#2563EB]/60 text-white placeholder-white/20 rounded-xl px-5 py-4 text-sm outline-none transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]" />
                      </Field>
                    </div>
                    <Field label="Telefon" optional>
                      <input type="tel" value={answers.phone} onChange={e => setAnswers(a => ({ ...a, phone: e.target.value }))}
                        placeholder="+49 152 ..." autoComplete="tel"
                        className="w-full bg-[#0B1220] border border-white/[0.08] focus:border-[#2563EB]/60 text-white placeholder-white/20 rounded-xl px-5 py-4 text-sm outline-none transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]" />
                    </Field>
                    <Field label="Haben Sie bereits ein Logo / Farben / Wünsche?" optional>
                      <textarea value={answers.message} onChange={e => setAnswers(a => ({ ...a, message: e.target.value }))}
                        placeholder="Z.B.: Wir sind ein Friseursalon in Stuttgart und brauchen eine moderne Website mit Online-Terminbuchung..."
                        rows={4}
                        className="w-full bg-[#0B1220] border border-white/[0.08] focus:border-[#2563EB]/60 text-white placeholder-white/20 rounded-xl px-5 py-4 text-sm outline-none transition-all duration-200 resize-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]" />
                    </Field>

                    {/* Summary preview */}
                    <div className="bg-[#0B1220] border border-white/[0.06] rounded-xl px-5 py-4 flex flex-wrap gap-2">
                      {[
                        websiteTypes.find(w => w.id === answers.websiteType)?.label,
                        businessTypes.find(b => b.id === answers.businessType)?.label,
                        ...answers.features.map(f => featureOptions.find(o => o.id === f)?.label),
                      ].filter(Boolean).map((tag, i) => (
                        <span key={i} className="text-[11px] text-white/40 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-white/20 text-[11px]">🔒 DSGVO-konform · Keine Weitergabe</p>
                      <button onClick={() => go(5)} disabled={!answers.name || !answers.email}
                        className="inline-flex items-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_36px_rgba(37,99,235,0.5)] hover:scale-[1.02]">
                        Termin wählen
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                      </button>
                    </div>
                  </div>
                </Shell>
              )}

              {/* ── STEP 5: Booking ── */}
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
                  {/* Animated checkmark */}
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full bg-[#10B981]/10 blur-xl scale-150" />
                    <div className="absolute inset-0 rounded-full border border-[#10B981]/20 scale-[1.15]" />
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
                      Danke{answers.name ? `, ${answers.name.split(" ")[0]}` : ""}!
                    </h2>
                    {selectedDate && selectedTime ? (
                      <div className="inline-flex items-center gap-3 bg-[#2563EB]/10 border border-[#2563EB]/20 text-white/70 text-sm px-5 py-3 rounded-2xl mb-8">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>Ihr Termin: <strong className="text-white">{formatDate(selectedDate)}</strong> um <strong className="text-white">{selectedTime} Uhr</strong></span>
                      </div>
                    ) : (
                      <p className="text-white/40 text-base max-w-sm mx-auto mb-8">
                        Wir erstellen Ihre individuelle Demo und melden uns innerhalb von{" "}
                        <span className="text-white font-semibold">24 Stunden</span>.
                      </p>
                    )}
                  </motion.div>

                  {/* Recommendation */}
                  <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.38, type: "spring", stiffness: 130, damping: 14 }}
                    className="max-w-lg mx-auto rounded-3xl p-8 text-left mb-10 relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #0B1220, #080F1C)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{ background: rec.color + "08" }} />
                    <div className="relative">
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: rec.color }}>Unsere Empfehlung</p>
                          <h3 className="text-white font-extrabold text-xl" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{rec.title}</h3>
                        </div>
                        <span className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: rec.color + "18", color: rec.color, border: `1px solid ${rec.color}30` }}>
                          {rec.badge}
                        </span>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed mb-6">{rec.desc}</p>
                      <div className={`border-t border-white/[0.05] pt-5 grid gap-4 text-xs ${selectedDate ? "grid-cols-2" : "grid-cols-3"}`}>
                        {[
                          { label: "Website-Typ", value: websiteTypes.find(w => w.id === answers.websiteType)?.label },
                          { label: "Branche", value: businessTypes.find(b => b.id === answers.businessType)?.label },
                          { label: "Zeitplan", value: timelineOptions.find(t => t.id === answers.timeline)?.label },
                          ...(selectedDate && selectedTime ? [{ label: "Termin", value: `${formatDate(selectedDate)}, ${selectedTime} Uhr` }] : []),
                        ].map(({ label, value }) => (
                          <div key={label}>
                            <p className="text-white/20 uppercase tracking-widest mb-1">{label}</p>
                            <p className="text-white/60">{value ?? "—"}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
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

function Shell({ label, title, sub, children }: { label: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#60A5FA]/50 text-xs font-bold uppercase tracking-[0.2em] mb-3">{label}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, ease: [0.22,1,0.36,1] }}
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
