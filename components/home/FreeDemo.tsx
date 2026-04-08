import AnimatedSection from "@/components/ui/AnimatedSection";
import { NeonButton } from "@/components/ui/neon-button";

export default function FreeDemo() {
  return (
    <section id="demo" className="py-44 bg-[#020408]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Animated gradient border wrapper */}
        <div className="relative p-px rounded-3xl overflow-hidden">
          {/* Animated gradient border */}
          <div
            className="absolute inset-0 rounded-3xl animate-border-flow"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(37,99,235,0.6) 30%, rgba(96,165,250,0.8) 50%, rgba(37,99,235,0.6) 70%, rgba(59,130,246,0.05) 100%)",
            }}
          />

          {/* Inner card */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #080e1a 0%, #0a1228 50%, #080e1a 100%)",
            }}
          >
            {/* Big radial glow from top */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)",
              }}
            />

            {/* Fine dot grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative px-10 md:px-24 py-20 md:py-32 text-center">

              <AnimatedSection delay={0}>
                <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-[#3B82F6]/25 bg-[#3B82F6]/08">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
                  <span className="text-[#93C5FD] text-xs font-bold uppercase tracking-[0.2em]">
                    Unser Qualitätsversprechen
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.07}>
                <h2
                  className="mx-auto max-w-3xl"
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
                    fontWeight: 800,
                    lineHeight: 1.04,
                    letterSpacing: "-0.03em",
                  }}
                >
                  <span className="text-white">Sehen Sie Ihre Website,</span>
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(95deg, #93c5fd 0%, #60a5fa 40%, #3b82f6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    bevor Sie investieren.
                  </span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.13}>
                <p className="mt-7 text-white/40 text-lg leading-relaxed max-w-lg mx-auto">
                  Andere zeigen PowerPoint-Präsentationen. Wir zeigen
                  Ihnen Ihre fertige Website — in 48–72 Stunden.
                </p>
              </AnimatedSection>

              {/* 3 feature pills */}
              <AnimatedSection delay={0.19}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  {[
                    "Fertige Website — kein Mockup",
                    "Individuell auf Ihr Unternehmen",
                    "Bereit in 48–72 Stunden",
                  ].map((text) => (
                    <span
                      key={text}
                      className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] text-white/45 text-xs px-4 py-2 rounded-full"
                      dangerouslySetInnerHTML={{ __html: `<span style="color:#10B981;font-weight:700;margin-right:4px">✓</span> ${text}` }}
                    />
                  ))}
                </div>
              </AnimatedSection>

              {/* CTAs */}
              <AnimatedSection delay={0.24}>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <NeonButton href="/kontakt#demo" variant="solid" size="lg" className="hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                    Demo anfordern
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"
                      className="group-hover:translate-x-0.5 transition-transform duration-200">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </NeonButton>
                  <NeonButton href="/kontakt" variant="ghost" size="lg">
                    Projekt starten
                  </NeonButton>
                </div>
                <p className="mt-6 text-white/35 text-xs">Unverbindlich · Für qualifizierte Projekte ab 2.500 €</p>
              </AnimatedSection>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
