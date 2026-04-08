"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    num: "01",
    href: "/webdesign",
    title: "Webdesign",
    description:
      "Ihre Website ist Ihr stärkstes Verkaufsinstrument. Wir bauen individuelle, schnelle und überzeugende Online-Präsenzen — die Besucher in Kunden verwandeln.",
    features: ["Responsive Design", "E-Commerce", "Landing Pages", "CMS-Integration"],
  },
  {
    num: "02",
    href: "/social-media",
    title: "Social Media",
    description:
      "Strategisches Social Media Management, das Ihre Marke sichtbar macht. Inhalte, die performen — und eine Community, die wächst.",
    features: ["Content-Erstellung", "Community Management", "Analyse & Reporting", "Werbeanzeigen"],
  },
  {
    num: "03",
    href: "/branding",
    title: "Branding",
    description:
      "Eine starke Marke ist mehr als ein Logo. Wir entwickeln Ihre vollständige Markenidentität — von der Strategie bis zum fertigen Corporate Design.",
    features: ["Logo-Design", "Corporate Identity", "Brand Guidelines", "Visitenkarten"],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-44 bg-[#020408]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 lg:gap-32">

          {/* LEFT — sticky label */}
          <div className="lg:pt-3">
            <AnimatedSection delay={0}>
              <span className="text-white/45 text-xs uppercase tracking-[0.22em] font-medium mb-6 block">
                Leistungen
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <h2
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                  lineHeight: 1.08,
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                }}
                className="text-white"
              >
                Was wir
                <br />
                für Sie
                <br />
                bauen
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-white/35 text-base leading-relaxed max-w-[280px]">
                Alles aus einer Hand — persönlich betreut, vom ersten Gespräch bis zum Launch.
              </p>
            </AnimatedSection>
          </div>

          {/* RIGHT — accordion */}
          <AnimatedSection delay={0.1}>
            <div className="divide-y divide-white/[0.07]">
              {services.map((service, i) => (
                <div key={service.href} className="relative">
                  {/* Active glow bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-px transition-all duration-300"
                    style={{
                      background: open === i
                        ? "linear-gradient(to bottom, transparent, #3B82F6, transparent)"
                        : "transparent",
                    }}
                  />
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-10 text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`text-sm font-mono tabular-nums transition-colors duration-300 ${open === i ? "text-[#60A5FA]" : "text-white/35"}`}>{service.num}</span>
                      <span
                        className={`text-xl md:text-2xl font-bold transition-colors duration-200 ${open === i ? "text-white" : "text-white group-hover:text-white/80"}`}
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                      >
                        {service.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.25, ease }}
                      className="w-9 h-9 rounded-full border border-white/10 group-hover:border-white/25 flex items-center justify-center shrink-0 transition-colors duration-200"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-white/50">
                        <path d="M6 1v10M1 6h10" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-[3.75rem]">
                          <p className="text-white/50 text-base leading-relaxed mb-5 max-w-xl">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {service.features.map((f) => (
                              <span
                                key={f}
                                className="text-xs text-white/40 border border-white/10 px-3 py-1.5 rounded-full"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-2 text-sm text-[#60A5FA] hover:text-white font-medium transition-colors duration-200"
                          >
                            Mehr erfahren
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M3 8h10M9 4l4 4-4 4" />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
