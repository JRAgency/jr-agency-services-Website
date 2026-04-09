import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutUs() {
  return (
    <section className="py-44 bg-[#020408]">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/[0.07] to-transparent" />
              <div className="relative rounded-2xl overflow-hidden bg-[#0A0F1E] border border-white/[0.06]">
                <Image
                  src="/images/JR Karte.png"
                  alt="JR Agency Visitenkarte"
                  width={600}
                  height={420}
                  className="w-full"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#0A0F1E] border border-white/[0.1] rounded-2xl px-6 py-4 shadow-2xl">
                <p
                  className="text-3xl font-extrabold text-white"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  50+
                </p>
                <p className="text-white/35 text-xs">Projekte abgeschlossen</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <div>
            <AnimatedSection delay={0}>
              <span className="text-white/45 text-xs uppercase tracking-[0.22em] font-medium mb-6 block">
                Über uns
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
                Ihr Partner für
                <br />
                digitalen Erfolg
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-white/45 text-base leading-relaxed">
                JR Agency Services wurde 2023 mit einer klaren Mission gegründet:
                ambitionierten Unternehmen zu einer digitalen Präsenz zu verhelfen,
                die wirklich verkauft — durchdacht, maßgeschneidert und nachhaltig.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.14}>
              <p className="mt-4 text-white/35 text-base leading-relaxed">
                Als Gründer arbeite ich persönlich an Ihrem Projekt.
                Kein anonymes Team — Sie kommunizieren direkt mit mir.
                Das bedeutet schnelle Entscheidungen und volle Verantwortung für Ihr Ergebnis.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Persönliche Betreuung", "Direktkontakt zum Gründer", "Messbare Ergebnisse"].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-2 border border-white/[0.08] text-white/40 text-xs px-4 py-2 rounded-full"
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {pill}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.22}>
              <Link
                href="/kontakt"
                className="mt-10 inline-flex items-center gap-2.5 bg-white text-[#020408] font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/90 text-sm group"
              >
                Zusammenarbeiten
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"
                  className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
