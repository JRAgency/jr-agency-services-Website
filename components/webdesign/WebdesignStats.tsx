'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 48,  suffix: "h",  label: "Erste Demo live" },
  { value: 95,  suffix: "+",  label: "Lighthouse Score (Ziel)" },
  { value: 100, suffix: "%",  label: "Individuell, kein Template" },
  { value: 0,   suffix: " €", label: "Demo kostenlos" },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return count;
}

function StatItem({ s, i, active }: { s: typeof stats[0]; i: number; active: boolean }) {
  const count = useCountUp(s.value, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
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
          filter: "drop-shadow(0 0 18px rgba(96,165,250,0.45)) drop-shadow(0 2px 8px rgba(37,99,235,0.3))",
        }}
      >
        {count}{s.suffix}
      </span>
      <span
        className="text-[11.5px] font-semibold uppercase tracking-[0.1em]"
        style={{ color: "#4E6A92" }}
      >
        {s.label}
      </span>
    </motion.div>
  );
}

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
            <StatItem key={s.label} s={s} i={i} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
