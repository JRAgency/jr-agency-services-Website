import SectionWithMockup from "@/components/ui/section-with-mockup";

const services = [
  {
    tag: "Leistung 01 — Webdesign",
    title: (
      <>
        Websites, die Anfragen
        <br />
        generieren — nicht nur
        <br />
        beeindrucken
      </>
    ),
    description:
      "Jede Website entsteht individuell für Ihr Unternehmen. Kein Template, kein Copy-Paste. Wir bauen schnelle, moderne Auftritte, die Besucher zu Anfragen machen.",
    features: [
      "Individuelles Design — kein Template",
      "Mobile-first & blitzschnell",
      "SEO-optimiert von Anfang an",
      "Klare Zeitschätzung nach Erstgespräch",
    ],
    primaryImageSrc: "/images/mockup 14 inch mana.png",
    secondaryImageSrc: "/images/M001T1427 I iPhone Mockup 19Jul25.png",
    singleImage: true,
    reverseLayout: false,
    accentColor: "rgba(37,99,235,0.55)",
    href: "/webdesign",
    ctaLabel: "Webdesign entdecken",
  },
  {
    tag: "Leistung 02 — Social Media",
    title: (
      <>
        Content der performt —
        <br />
        nicht nur gut aussieht
      </>
    ),
    description:
      "Wir übernehmen Ihre komplette Social-Media-Präsenz. Von der Strategie über die Erstellung bis zum Posting — alles aus einer Hand. Damit Sie sich aufs Kerngeschäft konzentrieren können.",
    features: [
      "Komplettes Management Ihrer Kanäle",
      "Content-Erstellung & Design",
      "Werbeanzeigen mit messbarem ROI",
      "Monatliches Reporting & Analyse",
    ],
    primaryImageSrc: "/images/social-media/M001T1621 Carousel Mockup 14Sep25.png",
    secondaryImageSrc: "/images/REPLACE THIS SCREEN1111211171111111.png",
    singleImage: true,
    reverseLayout: true,
    accentColor: "rgba(139,92,246,0.45)",
    href: "/social-media",
    ctaLabel: "Social Media entdecken",
  },
  {
    tag: "Leistung 03 — Branding",
    title: (
      <>
        Eine Marke die sofort
        <br />
        Vertrauen schafft
      </>
    ),
    description:
      "Ihr Markenbild ist der erste Eindruck — und der zählt. Wir entwickeln Logo, Farben, Typografie und Designsprache so, dass Ihr Unternehmen professionell wirkt und aus der Masse heraussticht.",
    features: [
      "Logo & Corporate Identity",
      "Farbpalette & Typografie-System",
      "Visitenkarten & Geschäftspapiere",
      "Brand Guidelines für konsistenten Auftritt",
    ],
    primaryImageSrc: "/images/JR Karte.png",
    secondaryImageSrc: "/images/Lombare.png",
    singleImage: true,
    reverseLayout: false,
    accentColor: "rgba(245,158,11,0.35)",
    href: "/branding",
    ctaLabel: "Branding entdecken",
  },
];

export default function FeaturedWork() {
  return (
    <div>
      {services.map((service, i) => (
        <SectionWithMockup
          key={i}
          tag={service.tag}
          title={service.title}
          description={service.description}
          features={service.features}
          primaryImageSrc={service.primaryImageSrc}
          secondaryImageSrc={service.secondaryImageSrc}
          carouselImages={(service as any).carouselImages}
          singleImage={(service as any).singleImage}
          reverseLayout={service.reverseLayout}
          accentColor={service.accentColor}
          href={service.href}
          ctaLabel={service.ctaLabel}
        />
      ))}
    </div>
  );
}
