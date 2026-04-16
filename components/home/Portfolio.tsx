import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PortfolioCarousel from "@/components/ui/PortfolioCarousel";

const projects = [
  {
    img: "01 - Apple Devices Mockup lombare.png",
    name: "Lombare Parfum",
    category: "Webdesign & Branding",
    tags: ["E-Commerce", "Branding"],
  },
  {
    img: "01 - Apple Devices Mockup kimchi.png",
    name: "Restaurant-Referenz",
    category: "Restaurant Website",
    tags: ["Responsive", "SEO"],
  },
  {
    img: "01 - Apple Devices Mockup Mana.png",
    name: "Mana Café",
    category: "Gastronomie",
    tags: ["Webdesign", "CMS"],
  },
  {
    img: "01 - Apple Devices Mockup Peter schmid GMBH.png",
    name: "Unternehmens-Referenz",
    category: "Unternehmenswebsite",
    tags: ["B2B", "Corporate"],
  },
  {
    img: "02 - Apple Devices Mockup.png",
    name: "Business Class",
    category: "Webdesign",
    tags: ["Landing Page", "Conversion"],
  },
  {
    img: "03 - Apple Devices Mockup.png",
    name: "YAMYAM",
    category: "Food & Gastronomie",
    tags: ["Responsive", "Webdesign"],
  },
];

export default function Portfolio() {
  return (
    <section id="referenzen" className="py-44 bg-[#020408]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <AnimatedSection delay={0}>
              <span className="text-white/45 text-xs uppercase tracking-[0.22em] font-medium mb-4 block">
                Referenzen
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
                Unsere Arbeiten
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.1}>
            <Link
              href="/webdesign"
              className="hidden md:inline-flex items-center gap-2 text-white/35 hover:text-white text-sm transition-colors duration-200 group"
            >
              Alle Projekte
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                className="group-hover:translate-x-0.5 transition-transform duration-200">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <PortfolioCarousel projekte={projects} />
        </AnimatedSection>

      </div>
    </section>
  );
}
