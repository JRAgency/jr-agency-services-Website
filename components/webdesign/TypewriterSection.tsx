'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const C = "#2563EB";
const CL = "#93C5FD";

const animatedTexts = [
  "mehr Anfragen.",
  "mehr Sichtbarkeit.",
  "mehr Umsatz.",
  "echte Ergebnisse.",
];

const proofItems = [
  { img: "/images/01 - Apple Devices Mockup lombare.png", name: "Lombare Parfum", label: "E-Commerce +340% Traffic" },
  { img: "/images/01 - Apple Devices Mockup kimchi.png", name: "Restaurant-Referenz", label: "Restaurant +180% Anfragen" },
  { img: "/images/01 - Apple Devices Mockup Mana.png", name: "Mana Café", label: "Gastronomie neue Kunden" },
];

const reasons = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Messbare Ergebnisse",
    desc: "Kein Bla-Bla — jedes Projekt hat klare KPIs und wir zeigen Ihnen die Zahlen.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "48h Demo-Version",
    desc: "Sie sehen Ihre neue Website in 48 Stunden — noch bevor Sie bezahlt haben.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Persönlicher Ansprechpartner",
    desc: "Kein Ticket-System, kein Callcenter — ein Ansprechpartner von Anfang bis Ende.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Qualität auf höchstem Niveau",
    desc: "Lighthouse Score 95+, Mobile First, barrierefreies Design — immer inklusive.",
  },
];

export default function TypewriterSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const fullText = animatedTexts[textIndex];
    const speed = isDeleting ? 65 : 130;

    const timer = setInterval(() => {
      setDisplayText(prev =>
        isDeleting
          ? prev.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );
    }, speed);

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex(prev => (prev + 1) % animatedTexts.length);
    }

    return () => clearInterval(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section ref={ref} className="py-28 md:py-36 bg-[#020408]" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — typewriter headline + reasons */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5"
              style={{ color: C }}
            >
              Warum Kunden uns wählen
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="font-extrabold text-white leading-[1.06] mb-8"
              style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.02em" }}
            >
              Wir liefern<br />
              <span
                style={{
                  background: `linear-gradient(135deg, ${C} 0%, ${CL} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {displayText}
                <span className="animate-pulse" style={{ WebkitTextFillColor: CL }}>|</span>
              </span>
            </motion.h2>

            <div className="space-y-3">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-4 rounded-xl px-5 py-4 transition-colors duration-200"
                  style={{ background: "#07101e", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: `${C}15`, border: `1px solid ${C}28`, color: CL }}
                  >
                    {r.icon}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-[14px] mb-0.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{r.title}</p>
                    <p className="text-[#4E6080] text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex gap-3"
            >
              <Link
                href="/anfragen"
                className="inline-flex items-center gap-2.5 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_28px_rgba(37,99,235,0.45)]"
                style={{ background: C }}
              >
                Kostenlos anfragen
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </Link>
              <Link
                href="/termin"
                className="inline-flex items-center gap-2 text-white/55 hover:text-white font-medium px-6 py-3 rounded-full border border-white/[0.1] hover:border-white/[0.18] bg-white/[0.03] transition-all duration-200 text-sm"
              >
                Termin buchen
              </Link>
            </motion.div>
          </div>

          {/* Right — social proof cards */}
          <div className="space-y-4">
            {/* Big social proof number */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1b36 100%)", border: `1px solid ${C}22` }}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${C}50, transparent)` }} />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none" style={{ background: `radial-gradient(ellipse, ${C}10 0%, transparent 65%)`, transform: "translate(30%, -50%)" }} />
              <div className="relative flex items-center gap-6">
                {/* Stacked client thumbnails */}
                <div className="flex -space-x-3 shrink-0">
                  {proofItems.map((p, i) => (
                    <div key={i} className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0a1628]" style={{ zIndex: proofItems.length - i }}>
                      <Image src={p.img} alt={p.name} width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#0a1628] text-[10px] font-bold text-white" style={{ background: C, zIndex: 0 }}>
                    +27
                  </div>
                </div>
                <div>
                  <p className="text-white font-extrabold text-2xl" style={{ fontFamily: "var(--font-plus-jakarta)" }}>30+</p>
                  <p className="text-[#4E6080] text-xs mt-0.5">zufriedene Kunden vertrauen JR Agency</p>
                </div>
              </div>
              <div className="relative mt-5 pt-5 border-t border-white/[0.05]">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  ))}
                  <span className="text-[#F59E0B] text-[11px] font-bold ml-1">5.0</span>
                </div>
                <p className="text-[#64748B] text-[13px] leading-relaxed italic">
                  &ldquo;In 48 Stunden haben wir unsere erste Demo gesehen — innerhalb von 2 Wochen waren wir live. Beste Entscheidung!&rdquo;
                </p>
                <p className="text-white/40 text-[11px] mt-2 font-medium">— Zufriedener Kunde, Stuttgart</p>
              </div>
            </motion.div>

            {/* Project cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {proofItems.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                  className="rounded-xl overflow-hidden"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="relative h-24 bg-[#07101e]">
                    <Image src={p.img} alt={p.name} fill className="object-cover opacity-80" />
                  </div>
                  <div className="px-3 py-2.5" style={{ background: "#07101e" }}>
                    <p className="text-white font-semibold text-[12px]">{p.name}</p>
                    <p className="text-[#4E6080] text-[11px] mt-0.5">{p.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
