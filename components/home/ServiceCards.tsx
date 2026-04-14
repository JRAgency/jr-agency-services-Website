import CardFlip from "@/components/ui/flip-card";
import AnimatedSection from "@/components/ui/AnimatedSection";

const cards = [
  {
    title: "Webdesign",
    subtitle: "Mehr Anfragen für Ihr Unternehmen",
    description:
      "Individuelle Websites, die Besucher in echte Anfragen verwandeln — kein Template, kein Copy-Paste. Mobile-first, blitzschnell und SEO-optimiert.",
    features: ["Responsive Design", "E-Commerce", "Landing Pages", "SEO-optimiert"],
    color: "#2563EB",
    accentLight: "#93C5FD",
    href: "/webdesign",
    ctaLabel: "Webdesign entdecken",
    img: "/images/01 - Apple Devices Mockup Peter schmid GMBH.png",
    imgPadding: "0px",
    gradientFrom: "#2563EB",
    gradientTo: "#93C5FD",
  },
  {
    title: "Social Media",
    subtitle: "Mehr Reichweite für Ihr Unternehmen",
    description:
      "Strategisches Social Media Management, das Ihre Marke sichtbar macht. Inhalte, die performen — und eine Community, die wächst.",
    features: ["Content-Erstellung", "Community Management", "Werbeanzeigen", "Reporting"],
    color: "#7C3AED",
    accentLight: "#C4B5FD",
    href: "/social-media",
    ctaLabel: "Social Media entdecken",
    img: "/images/social-media/carousel-mockup.png",
    imgPadding: "8px",
    gradientFrom: "#7C3AED",
    gradientTo: "#C4B5FD",
  },
  {
    title: "Branding",
    subtitle: "Ihre Marke, die bleibt",
    description:
      "Eine starke Markenidentität, die professionell wirkt und aus der Masse heraussticht — von Logo und Farben bis zu vollständigen Brand Guidelines.",
    features: ["Logo-Design", "Corporate Identity", "Brand Guidelines", "Visitenkarten"],
    color: "#0EA5E9",
    accentLight: "#BAE6FD",
    href: "/branding",
    ctaLabel: "Branding entdecken",
    img: "/images/branding/icon-jr-logo.png",
    imgPadding: "16px",
    gradientFrom: "#0EA5E9",
    gradientTo: "#BAE6FD",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-20 md:py-32 bg-[#020408]">
      <div className="page-container">

        {/* Heading */}
        <div className="mb-12">
          <AnimatedSection delay={0}>
            <span className="text-white/45 text-xs uppercase tracking-[0.22em] font-medium block mb-4">
              Unsere Leistungen
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h2
              className="text-white"
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              Alles aus einer Hand
            </h2>
          </AnimatedSection>
        </div>

        {/* Cards — flush with page-container edges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <AnimatedSection key={card.href} delay={i * 0.1}>
              <CardFlip
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                features={card.features}
                color={card.color}
                href={card.href}
                ctaLabel={card.ctaLabel}
                img={card.img}
                imgPadding={(card as any).imgPadding}
                gradientFrom={card.gradientFrom}
                gradientTo={card.gradientTo}
              />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
