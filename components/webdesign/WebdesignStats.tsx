'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: "30+",  label: "Projekte abgeschlossen" },
  { value: "95+",  label: "Lighthouse Score" },
  { value: "100%", label: "Kundenzufriedenheit" },
  { value: "48h",  label: "Erste Demo live" },
];

export default function WebdesignStats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#060D1C",
        borderTop: "1px solid rgba(37,99,235,0.18)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center text-center py-9 px-4"
              style={{
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : undefined,
              }}
            >
              <span
                className="font-black leading-none mb-2 block"
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontSize: "clamp(30px, 3vw, 44px)",
                  letterSpacing: "-0.04em",
                  background: "linear-gradient(135deg, #ffffff 30%, #93C5FD 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </span>
              <span
                className="text-[11.5px] font-semibold uppercase tracking-[0.1em]"
                style={{ color: "#4E6A92" }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
