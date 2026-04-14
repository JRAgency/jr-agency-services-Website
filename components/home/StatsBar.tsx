import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: "50+",  label: "Projekte abgeschlossen" },
  { value: "100%", label: "Fokus auf Ergebnisse" },
  { value: "5.0★", label: "Kundenbewertung" },
  { value: "48h",  label: "Demo-Lieferzeit" },
];

export default function StatsBar() {
  return (
    <section className="py-16 md:py-28 border-y border-white/[0.06] bg-[#020408]">
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.09}>
              <div className="text-center md:border-r md:border-white/[0.06] last:border-0">
                <p
                  className="text-4xl md:text-5xl font-extrabold leading-none mb-2"
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    letterSpacing: "-0.035em",
                    background: "linear-gradient(135deg, #ffffff 0%, #93c5fd 60%, #60a5fa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-white/40 text-xs font-medium tracking-wide uppercase">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
