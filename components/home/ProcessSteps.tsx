"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    step: "01",
    title: "Erstgespräch & Analyse",
    desc: "Wir verstehen Ihr Unternehmen und Ihre Ziele. Im ersten Gespräch klären wir, welche Leistungen Sie anbieten, wer Ihre Zielgruppe ist und was Ihre Online-Präsenz erreichen soll — die Grundlage für alles Weitere.",
  },
  {
    step: "02",
    title: "Kostenlose Demo",
    desc: "Auf Basis des Gesprächs erstellen wir eine erste Demo. Diese schauen wir uns gemeinsam an und besprechen Struktur, Inhalte und mögliche Verbesserungen. Sie bekommen einen realistischen Eindruck — ganz ohne Risiko.",
  },
  {
    step: "03",
    title: "Individuelle Umsetzung",
    desc: "Wenn Sie sich für die Zusammenarbeit entscheiden, integrieren wir Ihre Inhalte, Bilder und Daten, passen Design individuell an und berücksichtigen all Ihre Wünsche und Anforderungen.",
  },
  {
    step: "04",
    title: "Optimierung",
    desc: "Wir optimieren Ihr Projekt gezielt auf Performance, mobile Darstellung, Suchmaschinen (SEO) und Conversion — damit aus Besuchern echte Anfragen werden.",
  },
  {
    step: "05",
    title: "Launch & Betreuung",
    desc: "Nach dem finalen Feinschliff gehen wir live und unterstützen Sie 30 Tage lang kostenlos bei Anpassungen — damit alles reibungslos läuft.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 md:py-44 bg-[#020408] overflow-hidden">
      <div className="page-container">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <AnimatedSection delay={0}>
            <span className="text-white/45 text-xs uppercase tracking-[0.22em] font-medium mb-4 block">
              Unser Prozess
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h2
              className="text-white"
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
              }}
            >
              So arbeiten{" "}
              <span
                style={{
                  background: "linear-gradient(95deg, #93c5fd 0%, #60a5fa 40%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                wir mit Ihnen
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-5 text-white/35 text-base max-w-md mx-auto leading-relaxed">
              Ein klar strukturierter Prozess — von der ersten Analyse bis zum erfolgreichen Abschluss.
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">

          {/* Vertical center line — desktop only */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.7) 5%, rgba(37,99,235,0.35) 95%, transparent)",
              boxShadow: "0 0 10px rgba(37,99,235,0.2)",
            }}
          />

          <div className="space-y-0">
            {steps.map((item, i) => {
              const isLeft = i % 2 === 0;

              const StepCircle = () => (
                <div className="relative shrink-0 z-10">
                  <div className="absolute inset-0 rounded-full bg-[#2563EB]/15 blur-lg scale-[2]" />
                  <div
                    className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #0D1F3C 0%, #08111E 100%)",
                      border: "1.5px solid rgba(37,99,235,0.6)",
                      boxShadow: "0 0 18px rgba(37,99,235,0.4)",
                    }}
                  >
                    <span className="text-white font-black text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {item.step}
                    </span>
                  </div>
                </div>
              );

              const Card = ({ align }: { align: "left" | "right" }) => (
                <div
                  className="w-full max-w-[340px] rounded-2xl p-px"
                  style={{
                    background: align === "left"
                      ? "linear-gradient(135deg, rgba(37,99,235,0.3) 0%, rgba(37,99,235,0.05) 100%)"
                      : "linear-gradient(225deg, rgba(37,99,235,0.3) 0%, rgba(37,99,235,0.05) 100%)",
                  }}
                >
                  <div className="bg-[#08111E] rounded-2xl p-6">
                    <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {item.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );

              return (
                <AnimatedSection key={item.step} delay={i * 0.1}>
                  {/* Mobile layout */}
                  <div className="md:hidden flex items-start gap-5 pb-8 last:pb-0">
                    <StepCircle />
                    <div
                      className="flex-1 rounded-2xl p-px"
                      style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0.04) 100%)" }}
                    >
                      <div className="bg-[#08111E] rounded-2xl p-5">
                        <h3 className="text-white font-bold text-base mb-1.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                          {item.title}
                        </h3>
                        <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop alternating layout */}
                  <div className="hidden md:grid grid-cols-[1fr_80px_1fr] items-center pb-10 last:pb-0">
                    <div className={`flex justify-end pr-8 ${!isLeft ? "opacity-0 pointer-events-none" : ""}`}>
                      {isLeft && <Card align="left" />}
                    </div>
                    <div className="flex justify-center items-center relative z-10">
                      <StepCircle />
                    </div>
                    <div className={`flex justify-start pl-8 ${isLeft ? "opacity-0 pointer-events-none" : ""}`}>
                      {!isLeft && <Card align="right" />}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center mt-14">
          <div className="inline-flex items-center gap-3 border border-white/[0.08] rounded-full px-6 py-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-white/40 text-sm">Erste Demo in 48 Stunden</span>
          </div>
        </div>

      </div>
    </section>
  );
}
