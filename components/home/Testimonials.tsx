"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote:
      "JR Agency hat unsere komplette digitale Präsenz neu gedacht. Die Anfragen über unsere neue Website haben sich innerhalb von zwei Monaten verdreifacht.",
    name: "Thomas K.",
    role: "Geschäftsführer",
    company: "Gastronomiegruppe Stuttgart",
    initials: "TK",
  },
  {
    quote:
      "Endlich eine Agentur, die wirklich versteht was eine Marke braucht. Unser Online-Auftritt hat sich komplett transformiert — mehr Reichweite, deutlich mehr Anfragen.",
    name: "Sandra M.",
    role: "Gründerin",
    company: "Lifestyle & Beauty Brand",
    initials: "SM",
  },
  {
    quote:
      "Die Demo-Website hat mich sofort überzeugt — nicht weil sie kostenlos war, sondern weil sie besser war als alles was andere Agenturen mir als Endprodukt gezeigt haben.",
    name: "Michael B.",
    role: "Inhaber",
    company: "Handwerksbetrieb",
    initials: "MB",
  },
  {
    quote:
      "Schnelle Kommunikation, ehrliche Beratung und ein Ergebnis das wirklich überzeugt. Ich würde JR Agency jedem weiterempfehlen der online wachsen möchte.",
    name: "Laura S.",
    role: "Inhaberin",
    company: "Beautysalon München",
    initials: "LS",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-none w-[280px] sm:w-[340px] md:w-[400px] bg-[#0A0F1E] border border-white/[0.07] rounded-2xl p-6 sm:p-10 flex flex-col select-none">
      <Stars />
      <span className="text-[#2563EB]/20 text-7xl font-serif leading-none mb-2 select-none" aria-hidden>
        "
      </span>
      <p className="text-white/55 text-sm leading-relaxed flex-1 -mt-4">
        {t.quote}
      </p>
      <div className="flex items-center gap-3 mt-7 pt-6 border-t border-white/[0.07]">
        <div
          className="w-9 h-9 rounded-full bg-[#1D4ED8] flex items-center justify-center text-white text-xs font-bold shrink-0"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            {t.name}
          </p>
          <p className="text-white/45 text-xs">{t.role} · {t.company}</p>
        </div>
      </div>
    </div>
  );
}

// Duplicate for seamless loop
const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-44 bg-[#020408] overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="page-container">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-16">
          <div>
            <AnimatedSection delay={0}>
              <span className="text-white/45 text-xs uppercase tracking-[0.22em] font-medium mb-4 block">
                Kundenstimmen
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
                Was unsere
                <br />
                Kunden sagen
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.1}>
            <p className="hidden md:block text-white/40 text-sm max-w-[200px] text-right leading-relaxed">
              Echte Ergebnisse von echten Unternehmen
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Full-width marquee (outside the padded container for edge-to-edge) */}
      <AnimatedSection delay={0.12}>
        {/* Fade edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #020408, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #020408, transparent)" }} />

          <div className="overflow-hidden px-4 md:px-6">
            <div className="marquee-track flex gap-4 md:gap-7" style={{ width: "max-content" }}>
              {doubled.map((t, i) => (
                <Card key={i} t={t} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
