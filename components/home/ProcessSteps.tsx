"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Kostenloses Gespräch",
    body: "Wir lernen Ihr Unternehmen kennen und besprechen gemeinsam Ihre Ziele. Keine Kosten, keine Verpflichtung.",
  },
  {
    num: "02",
    title: "Design & Entwicklung",
    body: "Wir setzen Ihr Projekt professionell um — mit regelmäßigen Updates. Sie sehen jeden Fortschritt in Echtzeit.",
  },
  {
    num: "03",
    title: "Launch & Support",
    body: "Wir liefern pünktlich und bleiben langfristig an Ihrer Seite als persönlicher Ansprechpartner.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-44 bg-[#020408]">
      <div className="page-container">

        <div className="text-center mb-24">
          <AnimatedSection delay={0}>
            <span className="text-white/45 text-xs uppercase tracking-[0.22em] font-medium mb-4 block">
              Unser Prozess
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h2
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
              }}
              className="text-white"
            >
              In 3 Schritten zu
              <br />
              Ihrer neuen Website
            </h2>
          </AnimatedSection>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-transparent rounded-3xl">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: i * 0.15 + 0.2 }}
              className="bg-[#080e1a] border border-white/[0.07] rounded-3xl p-12 md:p-14 relative group hover:bg-[#0A0F1E] transition-colors duration-300"
            >
              <span
                className="text-[5rem] font-extrabold leading-none text-white/[0.06] select-none absolute top-6 right-8"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
                aria-hidden
              >
                {step.num}
              </span>
              <div className="relative">
                <p className="text-white/35 text-xs font-mono mb-6">{step.num}</p>
                <h3
                  className="text-white font-bold text-xl mb-4"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 border border-white/[0.08] rounded-full px-6 py-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-white/40 text-sm">Fertig in Ø 14 Tagen</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
