import AnimatedSection from "@/components/ui/AnimatedSection";

const items = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Direktkontakt zum Gründer",
    desc: "Kein anonymes Team — Sie arbeiten persönlich mit mir an Ihrem Projekt, von Anfang bis Ende.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Messbare Ergebnisse",
    desc: "Mehr Anfragen, mehr Sichtbarkeit — wir arbeiten auf konkrete, nachweisbare Geschäftsziele hin.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Fertige Demo in 48h",
    desc: "Sehen Sie Ihre Website bevor Sie investieren — kein Mockup, sondern Ihr echtes Projekt.",
  },
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-[#070C18]">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl bg-[#2563EB]/08 border border-[#2563EB]/15 flex items-center justify-center text-[#93C5FD] shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-white font-bold mb-1.5"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-[#94A3B8]/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
