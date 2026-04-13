import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import LeistungenCard from "@/components/ui/LeistungenCard";
import PortfolioCarousel from "@/components/ui/PortfolioCarousel";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Webdesign – JR Agency Services",
  description:
    "Professionelles Webdesign für Ihr Unternehmen. Responsive, schnell und individuell — von der Konzeption bis zum Launch.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "30+",  label: "Projekte abgeschlossen" },
  { value: "95+",  label: "Lighthouse Score" },
  { value: "100%", label: "Kundenzufriedenheit" },
  { value: "48h",  label: "Erste Demo-Version" },
];

const inbegriffen = [
  "Responsive Design (Mobile, Tablet, Desktop)",
  "SSL-Zertifikat & sichere Verbindung",
  "Technische SEO-Grundoptimierung",
  "Google Analytics / Tracking Setup",
  "Kontaktformular",
  "Datenschutz & Impressum",
  "30 Tage kostenloses Support nach Launch",
  "Schnelle Ladezeiten & Core Web Vitals",
];

const projekte = [
  { img: "01 - Apple Devices Mockup lombare.png",           name: "Lombare Parfum",        cat: "Webdesign & Branding",  tags: ["E-Commerce", "Branding"] },
  { img: "01 - Apple Devices Mockup kimchi.png",            name: "Kimchi Korean Kitchen", cat: "Restaurant Website",    tags: ["Responsive", "SEO"] },
  { img: "01 - Apple Devices Mockup Mana.png",              name: "Mana Café",             cat: "Gastronomie",           tags: ["Webdesign", "CMS"] },
  { img: "01 - Apple Devices Mockup Peter schmid GMBH.png", name: "Peter Schmid GmbH",     cat: "Unternehmenswebsite",   tags: ["B2B", "Corporate"] },
  { img: "02 - Apple Devices Mockup.png",                   name: "Business Class",        cat: "Webdesign",             tags: ["Landing Page", "Conversion"] },
  { img: "03 - Apple Devices Mockup.png",                   name: "YAMYAM",                cat: "Food & Gastronomie",    tags: ["Responsive", "Webdesign"] },
];

const leistungen = [
  {
    title: "Responsive Websites",
    desc: "Ihre Website sieht auf jedem Gerät perfekt aus — Desktop, Tablet oder Smartphone. Kein Pixel wird dem Zufall überlassen.",
    color: "#3B82F6",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  },
  {
    title: "Landing Pages",
    desc: "Conversion-optimierte Landing Pages die Ihre Besucher zu Kunden machen. Klare Botschaft, starkes Design.",
    color: "#8B5CF6",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>,
  },
  {
    title: "Unternehmenswebsite",
    desc: "Professionelle Websites die Ihre Marke und Leistungen optimal präsentieren — Vertrauen auf den ersten Blick.",
    color: "#14B8A6",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
  {
    title: "E-Commerce",
    desc: "Online-Shops die verkaufen — benutzerfreundlich, sicher und skalierbar. Integration mit Stripe, PayPal und mehr.",
    color: "#F59E0B",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  },
  {
    title: "SEO-Optimierung",
    desc: "Jede Website wird technisch für Google optimiert — schnelle Ladezeiten, saubere Struktur und starke Rankings.",
    color: "#10B981",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
  },
  {
    title: "Performance",
    desc: "Blitzschnelle Ladezeiten durch modernes Web-Development. Lighthouse Score 95+ ist unser Standard.",
    color: "#F97316",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
];

const prozess = [
  {
    step: "01",
    title: "Briefing & Strategie",
    desc: "Wir lernen Ihr Unternehmen, Ihre Zielgruppe und Ihre Ziele kennen. Daraus entwickeln wir gemeinsam eine klare Website-Strategie.",
    deliverables: ["Briefing-Dokument", "Zielgruppen-Analyse", "Website-Strategie & Seitenstruktur"],
  },
  {
    step: "02",
    title: "Konzept & Wireframe",
    desc: "Wir erstellen ein Seitenkonzept und Wireframes — so sehen Sie die vollständige Struktur Ihrer Website, bevor ein Design-Element existiert.",
    deliverables: ["Seitenstruktur-Konzept", "Wireframes aller Seiten", "Feedback-Runde vor dem Design"],
  },
  {
    step: "03",
    title: "Design & Prototyping",
    desc: "Ihr individuelles Design entsteht — abgestimmt auf Ihre Marke. Sie sehen einen klickbaren Prototyp, bevor wir eine Zeile Code schreiben.",
    deliverables: ["Vollständiges UI-Design", "Klickbarer Prototyp", "Mobile & Desktop Ansicht"],
  },
  {
    step: "04",
    title: "Entwicklung",
    desc: "Wir setzen das freigegebene Design in sauberen, schnellen Code um — responsiv, barrierefrei und für Suchmaschinen optimiert.",
    deliverables: ["Vollständige Umsetzung", "Responsive auf allen Geräten", "SEO-Grundoptimierung"],
  },
  {
    step: "05",
    title: "Launch & Support",
    desc: "Ihre Website geht live. Wir kümmern uns um Domain, Hosting-Setup und stehen 30 Tage für Anpassungen zur Verfügung.",
    deliverables: ["Live-Schaltung & Hosting-Setup", "30 Tage kostenloser Support", "Einweisung & Übergabe"],
  },
];

// ─── Divider ─────────────────────────────────────────────────────────────────

function SectionDivider() {
  return (
    <div className="relative h-px mx-auto max-w-4xl">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, transparent, rgba(37,99,235,0.25) 30%, rgba(96,165,250,0.18) 50%, rgba(37,99,235,0.25) 70%, transparent)",
        }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-[3px] w-[6px] h-[6px] rounded-full"
        style={{ background: "rgba(96,165,250,0.6)", boxShadow: "0 0 8px 2px rgba(37,99,235,0.5)" }}
      />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WebdesignPage() {
  return (
    <div className="bg-[#070C18]">

      {/* ── 1. HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[520px] h-[520px] bg-[#2563EB]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-[#1D4ED8]/08 rounded-full blur-[110px]" />
        </div>
        <div className="page-container py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-4">
                  Leistung
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h1
                  className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Web<span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">design</span>
                  <br />das wirkt.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-6 text-[#94A3B8] text-lg leading-relaxed max-w-lg">
                  Websites die begeistern, überzeugen und konvertieren. Individuell gestaltet,
                  technisch einwandfrei und perfekt auf Ihre Marke abgestimmt.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-9 flex gap-4 flex-wrap">
                  <Link
                    href="/anfragen"
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_32px_rgba(37,99,235,0.5)] text-base"
                  >
                    Projekt starten
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </Link>
                  <Link
                    href="#portfolio"
                    className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold px-8 py-4 rounded-full border border-[#94A3B8]/15 transition-all duration-200 text-base"
                  >
                    Referenzen ansehen
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#2563EB]/20 to-transparent rounded-3xl blur-2xl" />
                <Image
                  src="/images/mockup 14 inch.png"
                  alt="Webdesign Mockup"
                  width={660}
                  height={460}
                  className="relative w-full rounded-2xl drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 2. STATS ── */}
      <section className="py-14">
        <div className="page-container">
          {/* Stats card — leicht erhöht, kein eigener Section-Hintergrund */}
          <div
            className="rounded-2xl px-10 py-10"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.07) 0%, rgba(15,23,42,0.6) 100%)",
              border: "1px solid rgba(37,99,235,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <AnimatedSection key={s.label} delay={i * 0.07}>
                  <div className="text-center">
                    <p className="text-4xl font-extrabold text-white" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {s.value}
                    </p>
                    <p className="text-[#94A3B8] text-sm mt-1">{s.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 3. DESIGN DAS KONVERTIERT ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2563EB]/06 rounded-full blur-[130px] pointer-events-none" />
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <AnimatedSection>
              <Image
                src="/images/01 - Apple Devices Mockup.png"
                alt="Webdesign Qualität"
                width={600}
                height={420}
                className="w-full rounded-2xl drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </AnimatedSection>
            <div>
              <AnimatedSection delay={0.05}>
                <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-3">
                  Unser Anspruch
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Design das<br />
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">konvertiert</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="mt-5 text-[#94A3B8] text-base leading-relaxed">
                  Gutes Webdesign ist mehr als Ästhetik — es ist Psychologie. Jedes Element wird
                  strategisch platziert um Besucher zu führen und zu überzeugen.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {["Nutzerführung (UX)", "Visuelle Hierarchie", "Mobile First", "Conversion Design"].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.2 5.8L6.5 2.2" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span className="text-[#94A3B8] text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 4. WAS INKLUSIVE IST ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1D4ED8]/06 rounded-full blur-[130px] pointer-events-none" />
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-3">
                  Immer dabei
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Was bei jeder<br />
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                    Website inklusive
                  </span>{" "}ist
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-5 text-[#94A3B8] text-base leading-relaxed max-w-md">
                  Kein versteckter Mehraufwand — diese Features sind in jedem
                  Webdesign-Projekt selbstverständlich enthalten.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {inbegriffen.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3.2 5.8L6.5 2.2" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-[#94A3B8] text-sm leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#2563EB]/15 to-transparent rounded-3xl blur-2xl" />
                <Image
                  src="/images/mockup 14 inch mana.png"
                  alt="Webdesign Details"
                  width={600}
                  height={420}
                  className="relative w-full rounded-2xl drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 5. PORTFOLIO ── */}
      <section id="portfolio" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="flex items-end justify-between mb-12">
            <div>
              <AnimatedSection>
                <span className="text-[#94A3B8]/50 text-xs uppercase tracking-[0.22em] font-medium mb-4 block">
                  Referenzen
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h2
                  className="text-white font-extrabold"
                  style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}
                >
                  Webdesign-Projekte
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.1}>
              <Link
                href="/kontakt"
                className="hidden md:inline-flex items-center gap-2 text-[#94A3B8]/40 hover:text-white text-sm transition-colors duration-200 group"
              >
                Projekt anfragen
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.1}>
            <PortfolioCarousel projekte={projekte} />
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider />

      {/* ── 6. PROZESS ── */}
      <section id="prozess" className="py-32 relative overflow-hidden">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[800px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 400px 100% at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 70%)" }}
        />
        <div className="max-w-5xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-24">
              <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-[0.22em] mb-5">Wie wir arbeiten</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Von der Idee zum{" "}
                <span className="bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">fertigen Produkt</span>
              </h2>
              <p className="text-[#94A3B8] text-base leading-relaxed max-w-xl mx-auto">
                Unser bewährter Prozess bringt Ihre Website strukturiert, termingerecht und ohne böse Überraschungen ans Ziel.
              </p>
            </div>
          </AnimatedSection>
          <div className="relative">
            {/* Vertical line desktop */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(37,99,235,0.9) 6%, rgba(96,165,250,0.55) 40%, rgba(37,99,235,0.55) 60%, rgba(96,165,250,0.3) 94%, transparent 100%)", boxShadow: "0 0 16px 2px rgba(37,99,235,0.3), 0 0 40px 4px rgba(37,99,235,0.1)" }} />
            {/* Vertical line mobile */}
            <div className="lg:hidden absolute left-[27px] top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.85) 5%, rgba(37,99,235,0.4) 95%, transparent)", boxShadow: "0 0 10px rgba(37,99,235,0.3)" }} />
            <div className="space-y-0">
              {prozess.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimatedSection key={item.step} delay={i * 0.13}>
                    {/* Mobile layout */}
                    <div className="lg:hidden flex items-start gap-5 pb-10 last:pb-0">
                      <div className="relative shrink-0 z-10 mt-1">
                        <div className="absolute inset-0 rounded-full bg-[#2563EB]/20 blur-lg scale-[2.2]" />
                        <div className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #0D1F3C 0%, #08111E 100%)", border: "1.5px solid rgba(37,99,235,0.65)", boxShadow: "0 0 20px rgba(37,99,235,0.45)" }}>
                          <span className="text-white font-black text-base" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1 rounded-2xl p-px" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.28) 0%, rgba(37,99,235,0.05) 60%, rgba(96,165,250,0.1) 100%)" }}>
                        <div className="bg-[#08111E] rounded-2xl p-6">
                          <h3 className="text-white font-bold text-lg mb-2.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                          <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{item.desc}</p>
                          <ul className="space-y-2 border-t border-white/[0.05] pt-4">
                            {item.deliverables.map((d) => (
                              <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#2563EB]"><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.35" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Desktop layout */}
                    <div className="hidden lg:grid grid-cols-[1fr_96px_1fr] items-center pb-10 last:pb-0">
                      <div className={`flex justify-end pr-8 ${!isLeft ? "opacity-0 pointer-events-none" : ""}`}>
                        {isLeft && (
                          <div className="relative w-full max-w-[360px] rounded-2xl p-px" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.06) 60%, rgba(96,165,250,0.12) 100%)" }}>
                            <div className="bg-[#08111E] rounded-2xl p-7">
                              <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                              <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">{item.desc}</p>
                              <ul className="space-y-2 border-t border-white/[0.05] pt-4">
                                {item.deliverables.map((d) => (
                                  <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#60A5FA]"><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.3" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex justify-center items-center relative z-10">
                        <div className="absolute w-20 h-20 rounded-full bg-[#2563EB]/12 blur-2xl" />
                        <div className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #0D1F3C 0%, #080F1E 100%)", border: "2px solid rgba(37,99,235,0.75)", boxShadow: "0 0 28px rgba(37,99,235,0.55), 0 0 60px rgba(37,99,235,0.18)" }}>
                          <span className="text-white font-black text-[15px]" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      <div className={`flex justify-start pl-8 ${isLeft ? "opacity-0 pointer-events-none" : ""}`}>
                        {!isLeft && (
                          <div className="relative w-full max-w-[360px] rounded-2xl p-px" style={{ background: "linear-gradient(225deg, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.06) 60%, rgba(96,165,250,0.12) 100%)" }}>
                            <div className="bg-[#08111E] rounded-2xl p-7">
                              <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                              <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">{item.desc}</p>
                              <ul className="space-y-2 border-t border-white/[0.05] pt-4">
                                {item.deliverables.map((d) => (
                                  <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#60A5FA]"><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.3" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 7. LEISTUNGEN ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-1/4 top-0 w-[400px] h-[400px] bg-[#2563EB]/05 rounded-full blur-[120px] pointer-events-none" />
        <div className="page-container relative">
          <SectionHeading
            label="Was wir bieten"
            title="Unsere Webdesign-Leistungen"
            description="Von der einfachen Website bis zum komplexen Online-Shop — wir haben die passende Lösung."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leistungen.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <LeistungenCard title={item.title} desc={item.desc} color={item.color} icon={item.icon} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 8. MOBILE FIRST ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1D4ED8]/06 rounded-full blur-[130px] pointer-events-none" />
        <div className="page-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-3">
                  Mobile First
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Perfekt auf<br />
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">jedem Gerät</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-5 text-[#94A3B8] text-base leading-relaxed max-w-md">
                  Über 60% aller Website-Besuche kommen von Smartphones. Deshalb entwickeln wir
                  jede Website Mobile First.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-8 space-y-4">
                  {[
                    { title: "Touch-optimierte Navigation", desc: "Menüs und Buttons die sich auf dem Smartphone natürlich anfühlen." },
                    { title: "Schnelle Ladezeiten mobil",   desc: "Optimierte Bilder und Code für schnelle Ladezeiten auch im Mobilnetz." },
                    { title: "Lesbare Typografie",           desc: "Schriftgrößen und Abstände die auf jedem Bildschirm perfekt lesbar sind." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.2 5.8L6.5 2.2" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <div>
                        <p className="text-white font-semibold text-sm">{item.title}</p>
                        <p className="text-[#94A3B8] text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} direction="right">
              <div className="flex justify-center gap-6 items-end">
                <Image
                  src="/images/M001T1427 K iPhone Mockup 19Jul25.png"
                  alt="Mobile Webdesign"
                  width={300} height={600}
                  className="rounded-2xl drop-shadow-2xl"
                  quality={90}
                />
                <Image
                  src="/images/M001T1427 K iPhone Mockup 19Jul25 Kimchi.png"
                  alt="Mobile Webdesign Kimchi"
                  width={300} height={600}
                  className="rounded-2xl drop-shadow-2xl mb-10"
                  quality={90}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 9. TECHNOLOGIEN ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-[0.22em] mb-4">Technologie</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Womit wir bauen
              </h2>
              <p className="text-[#94A3B8] text-base max-w-md mx-auto leading-relaxed">
                Moderne, zukunftssichere Technologien — schnell, skalierbar und wartbar.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Next.js",       desc: "React Framework",       color: "#ffffff" },
              { name: "Tailwind CSS",  desc: "Utility-first Styling", color: "#38BDF8" },
              { name: "TypeScript",    desc: "Typsicherheit",          color: "#3178C6" },
              { name: "Framer Motion", desc: "Animationen",            color: "#BB4AFF" },
              { name: "Vercel",        desc: "Hosting & Deploy",       color: "#ffffff" },
              { name: "Figma",         desc: "UI/UX Design",           color: "#F24E1E" },
            ].map((tech, i) => (
              <AnimatedSection key={tech.name} delay={i * 0.07}>
                <div className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 flex items-center gap-5 hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-300">
                  <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: tech.color + "12", border: `1px solid ${tech.color}25` }}>
                    <span className="text-white font-bold text-xs">{tech.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-base" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{tech.name}</p>
                    <p className="text-[#94A3B8]/60 text-sm mt-0.5">{tech.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 10. CTA ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2563EB]/08 rounded-full blur-[120px] pointer-events-none" />
        <div className="page-container relative">
          <div
            className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(15,23,42,0.5) 60%, rgba(29,78,216,0.08) 100%)",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#2563EB]/08 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative">
              <AnimatedSection>
                <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-4">
                  Bereit?
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Bereit für Ihre<br />neue Website?
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-5 text-[#94A3B8] text-lg max-w-xl mx-auto leading-relaxed">
                  Lassen Sie uns gemeinsam Ihre Idee umsetzen. Die erste
                  Demo-Version ist innerhalb von 48 Stunden fertig — und kostenlos.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-9 flex justify-center gap-4 flex-wrap">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] text-base"
                  >
                    Kontakt aufnehmen
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </Link>
                  <Link
                    href="/kontakt#demo"
                    className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold px-8 py-4 rounded-full border border-[#94A3B8]/15 transition-all duration-200 text-base"
                  >
                    Kostenlose Demo
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
