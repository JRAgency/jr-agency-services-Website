'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    value: "30+",
    label: "Projekte",
    desc: "Landing Pages, Shops & Corporate Sites",
    color: "#3B82F6",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    value: "95+",
    label: "Lighthouse",
    desc: "Performance Score — jedes Mal",
    color: "#F59E0B",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Zufriedenheit",
    desc: "Kein Projekt ohne positives Feedback",
    color: "#34D399",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    value: "48h",
    label: "Erste Demo",
    desc: "Sehen Sie Ihre Website — kostenlos",
    color: "#A78BFA",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

function StatCard({ s, i }: { s: typeof stats[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col"
      style={{
        background: "#111118",
        borderRadius: "22px",
        border: "1px solid rgba(255,255,255,0.055)",
        padding: "clamp(20px, 2.5vw, 32px)",
        overflow: "hidden",
      }}
    >
      {/* Ultra-thin top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${s.color}55, transparent)` }}
      />

      {/* Icon */}
      <div
        className="flex items-center justify-center mb-5 shrink-0"
        style={{
          width: 30,
          height: 30,
          borderRadius: 10,
          background: `${s.color}18`,
          color: s.color,
        }}
      >
        {s.icon}
      </div>

      {/* Big number */}
      <p
        className="text-white leading-none mb-2 font-black"
        style={{
          fontFamily: "var(--font-plus-jakarta)",
          fontSize: "clamp(38px, 4vw, 52px)",
          letterSpacing: "-0.045em",
        }}
      >
        {s.value}
      </p>

      {/* Label */}
      <p
        className="font-semibold text-[13px] mb-1.5"
        style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-plus-jakarta)", letterSpacing: "-0.01em" }}
      >
        {s.label}
      </p>

      {/* Desc */}
      <p
        className="text-[11px] leading-snug"
        style={{ color: "rgba(255,255,255,0.26)" }}
      >
        {s.desc}
      </p>
    </motion.div>
  );
}

export default function WebdesignStats() {
  return (
    <section
      className="py-16"
      style={{
        background: "#000000",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="page-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {stats.map((s, i) => (
            <StatCard key={s.label} s={s} i={i} />
          ))}
        </div>

        {/* Bottom proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-7"
        >
          {[
            { dot: "#F59E0B", text: "5.0 / 5.0 Kundenbewertung" },
            { dot: "#3B82F6", text: "Ø 3× mehr Anfragen" },
            { dot: "#34D399", text: "Kostenlose Erstberatung" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span
                className="block w-1 h-1 rounded-full shrink-0"
                style={{ background: item.dot }}
              />
              <span
                className="text-[11px] font-medium"
                style={{ color: "rgba(255,255,255,0.22)", letterSpacing: "0.01em" }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
