'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const C = "#2563EB";
const CL = "#93C5FD";

const stats = [
  {
    value: "30+",
    label: "Projekte abgeschlossen",
    desc: "Von der Landing Page bis zum komplexen Online-Shop",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: "#3B82F6",
  },
  {
    value: "95+",
    label: "Lighthouse Score",
    desc: "Technische Perfektion als Standard, nicht als Ausnahme",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: "#F59E0B",
  },
  {
    value: "100%",
    label: "Kundenzufriedenheit",
    desc: "Kein Projekt ohne positives Kundenfeedback",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    color: "#10B981",
  },
  {
    value: "48h",
    label: "Erste Demo-Version",
    desc: "Schneller als jede andere Agentur — und kostenlos",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: "#8B5CF6",
  },
];

function StatCard({ s, i }: { s: typeof stats[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:border-white/[0.14]"
      style={{ background: "#07101e", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* Corner glow on hover */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${s.color}12 0%, transparent 65%)`, transform: "translate(30%, -30%)" }}
      />
      {/* Top line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent 0%, ${s.color}60 50%, transparent 100%)` }}
      />

      <div className="relative flex items-start gap-5">
        {/* Icon badge */}
        <div
          className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
          style={{ background: s.color + "15", border: `1px solid ${s.color}28`, color: s.color }}
        >
          {s.icon}
        </div>

        <div className="flex-1 min-w-0">
          {/* Big number */}
          <p
            className="font-extrabold text-white leading-none mb-1.5"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(30px, 3vw, 42px)",
              background: `linear-gradient(135deg, #fff 30%, ${s.color})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {s.value}
          </p>
          <p className="text-white font-semibold text-[14px] mb-1.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            {s.label}
          </p>
          <p className="text-[#4E6080] text-xs leading-relaxed">{s.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WebdesignStats() {
  return (
    <section className="py-16 bg-[#020408]" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="page-container">
        {/* Label */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-3"
            style={{ color: C }}
          >
            Zahlen die überzeugen
          </span>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ background: `linear-gradient(90deg, transparent, ${C}40)` }} />
            <span className="text-[#4E6080] text-xs">JR Agency Services</span>
            <div className="h-px w-16" style={{ background: `linear-gradient(90deg, ${C}40, transparent)` }} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <StatCard key={s.label} s={s} i={i} />
          ))}
        </div>

        {/* Bottom social proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
        >
          {[
            { icon: "⭐", text: "5.0 / 5.0 Bewertung" },
            { icon: "🚀", text: "Durchschnittlich 3× mehr Anfragen" },
            { icon: "🔒", text: "Kostenlose Erstberatung" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-[#4E6080] text-xs">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
