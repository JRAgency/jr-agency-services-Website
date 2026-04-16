import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-[#070C18]">
      <div className="page-container">
        <AnimatedSection delay={0}>
          <div
            className="relative rounded-3xl overflow-hidden px-8 py-14 sm:px-14 sm:py-16 md:px-20 md:py-20"
            style={{
              background: "linear-gradient(135deg, #080e1a 0%, #0b1330 60%, #080e1a 100%)",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            {/* Subtle top glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-48 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top, rgba(37,99,235,0.16) 0%, transparent 70%)" }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

              {/* Left — text */}
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/06">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
                  <span className="text-[#93C5FD] text-[10px] font-bold uppercase tracking-[0.2em]">
                    Nächster Schritt
                  </span>
                </span>

                <h2
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  Lassen Sie uns Ihre Website analysieren
                  {" "}
                  <span
                    style={{
                      background: "linear-gradient(95deg, #93c5fd 0%, #60a5fa 40%, #3b82f6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    — und eine kostenlose Demo erstellen.
                  </span>
                </h2>

                <p className="mt-4 text-white/40 text-base leading-relaxed">
                  Unverbindlich. Ohne Vorauszahlung. Ihre Demo in 48 Stunden.
                </p>
              </div>

              {/* Right — CTAs */}
              <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
                <Link
                  href="/anfragen"
                  className="inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_32px_rgba(37,99,235,0.5)]"
                  style={{ background: "#2563EB" }}
                >
                  Demo anfordern
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
