"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const faqs = [
  {
    q: "Was kostet eine Website bei JR Agency?",
    a: "Der Preis hängt vom Umfang und Ihren Anforderungen ab — wir erstellen Ihnen ein individuelles Angebot. Wir arbeiten mit transparenten Festpreisen, keine versteckten Gebühren. Fordern Sie zuerst Ihre kostenlose Demo an und überzeugen Sie sich von der Qualität, bevor Sie sich entscheiden.",
  },
  {
    q: "Wie lange dauert die Erstellung einer Website?",
    a: "Eine Standard-Website ist in der Regel innerhalb von 1–3 Wochen fertig. Komplexere Projekte (z. B. mit E-Commerce oder speziellen Funktionen) besprechen wir im Detail mit Ihnen.",
  },
  {
    q: "Was passiert, wenn mir das Ergebnis nicht gefällt?",
    a: "Wir arbeiten so lange an Ihrem Projekt, bis Sie vollständig zufrieden sind. Revisionen sind im Preis inbegriffen. Ihr Vertrauen ist uns wichtiger als ein schnelles Projekt.",
  },
  {
    q: "Kümmern Sie sich auch um die Website nach dem Launch?",
    a: "Ja. Auf Wunsch übernehmen wir auch nach dem Launch technischen Support, Updates und Weiterentwicklungen — als langfristiger Ansprechpartner.",
  },
  {
    q: "Kann ich auch nur Social Media oder nur Branding beauftragen?",
    a: "Absolut. Sie können jede unserer Leistungen einzeln oder im Paket beauftragen. Wir beraten Sie ehrlich, welche Kombination für Ihr Unternehmen Sinn ergibt.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-44 bg-[#020408]">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-20">
          <AnimatedSection delay={0}>
            <span className="text-white/45 text-xs uppercase tracking-[0.22em] font-medium mb-4 block">
              FAQ
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
              Häufige Fragen
            </h2>
          </AnimatedSection>
        </div>

        <div className="divide-y divide-white/[0.07]">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-9 text-left group"
                  aria-expanded={open === i}
                >
                  <span
                    className="text-white font-semibold text-base group-hover:text-white/80 transition-colors duration-200"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25, ease }}
                    className="w-8 h-8 rounded-full border border-white/10 group-hover:border-white/25 flex items-center justify-center shrink-0 transition-colors duration-200"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-white/50">
                      <path d="M6 1v10M1 6h10" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="overflow-hidden"
                    >
                      <p className="pb-9 text-white/45 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
