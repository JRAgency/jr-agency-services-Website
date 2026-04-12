import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PortfolioCarousel from "@/components/ui/PortfolioCarousel";
import WebdesignStats from "@/components/webdesign/WebdesignStats";
import ScrollToButton from "@/components/ui/ScrollToButton";

export const metadata: Metadata = {
  title: "Webdesign – JR Agency Services",
  description:
    "Professionelles Webdesign für Ihr Unternehmen. Responsive, schnell und individuell — von der Konzeption bis zum Launch.",
};

const C = "#2563EB";
const CL = "#93C5FD";
const CD = "#1D4ED8";

const leistungen = [
  {
    title: "Responsive Websites",
    desc: "Ihre Website sieht auf jedem Gerät perfekt aus — Desktop, Tablet oder Smartphone. Kein Pixel wird dem Zufall überlassen.",
    color: "#3B82F6",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  },
  {
    title: "Landing Pages",
    desc: "Conversion-optimierte Landing Pages die Ihre Besucher zu Kunden machen. Klare Botschaft, starkes Design.",
    color: "#8B5CF6",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>,
  },
  {
    title: "Unternehmenswebsite",
    desc: "Professionelle Websites die Ihre Marke und Leistungen optimal präsentieren — Vertrauen auf den ersten Blick.",
    color: "#14B8A6",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
  {
    title: "E-Commerce",
    desc: "Online-Shops die verkaufen — benutzerfreundlich, sicher und skalierbar. Integration mit Stripe, PayPal und mehr.",
    color: "#F59E0B",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  },
  {
    title: "SEO-Optimierung",
    desc: "Jede Website wird technisch für Google optimiert — schnelle Ladezeiten, saubere Struktur und starke Rankings.",
    color: "#10B981",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
  },
  {
    title: "Performance",
    desc: "Blitzschnelle Ladezeiten durch modernes Web-Development. Lighthouse Score 95+ ist unser Standard.",
    color: "#F97316",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
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

const prozess = [
  {
    step: "01",
    title: "Briefing & Strategie",
    desc: "Wir lernen Ihr Unternehmen, Ihre Zielgruppe und Ihre Ziele kennen. Daraus entwickeln wir gemeinsam eine klare Website-Strategie — bevor auch nur ein Pixel gesetzt wird.",
    deliverables: ["Briefing-Dokument", "Zielgruppen-Analyse", "Website-Strategie & Seitenstruktur"],
  },
  {
    step: "02",
    title: "Konzept & Wireframe",
    desc: "Wir erstellen ein Seitenkonzept und Wireframes — so sehen Sie die vollständige Struktur Ihrer Website, bevor ein einziges Design-Element existiert.",
    deliverables: ["Seitenstruktur-Konzept", "Wireframes aller Seiten", "Feedback-Runde vor dem Design"],
  },
  {
    step: "03",
    title: "Design & Prototyping",
    desc: "Ihr individuelles Design entsteht — abgestimmt auf Ihre Marke, Farben und Persönlichkeit. Sie sehen einen klickbaren Prototyp, bevor wir eine Zeile Code schreiben.",
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
    desc: "Ihre Website geht live. Wir kümmern uns um Domain, Hosting-Setup und stehen 30 Tage für Anpassungen zur Verfügung — ohne extra Kosten.",
    deliverables: ["Live-Schaltung & Hosting-Setup", "30 Tage kostenloser Support", "Einweisung & Übergabe"],
  },
];

const projekte = [
  { img: "01 - Apple Devices Mockup lombare.png", name: "Lombare Parfum", cat: "Webdesign & Branding", tags: ["E-Commerce", "Branding"] },
  { img: "01 - Apple Devices Mockup kimchi.png", name: "Kimchi Korean Kitchen", cat: "Restaurant Website", tags: ["Responsive", "SEO"] },
  { img: "01 - Apple Devices Mockup Mana.png", name: "Mana Café", cat: "Gastronomie", tags: ["Webdesign", "CMS"] },
  { img: "01 - Apple Devices Mockup Peter schmid GMBH.png", name: "Peter Schmid GmbH", cat: "Unternehmenswebsite", tags: ["B2B", "Corporate"] },
  { img: "02 - Apple Devices Mockup.png", name: "Business Class", cat: "Webdesign", tags: ["Landing Page", "Conversion"] },
  { img: "03 - Apple Devices Mockup.png", name: "YAMYAM", cat: "Food & Gastronomie", tags: ["Responsive", "Webdesign"] },
];

const stats = [
  { value: "30+", label: "Projekte abgeschlossen" },
  { value: "95+", label: "Lighthouse Score" },
  { value: "100%", label: "Kundenzufriedenheit" },
  { value: "48h", label: "Erste Demo-Version" },
];

const faq = [
  { q: "Wie lange dauert eine Website?", a: "Eine einfache Unternehmenswebsite ist in 1–2 Wochen fertig. Komplexere Projekte wie E-Commerce oder Custom-Entwicklungen dauern 3–8 Wochen. Die erste Demo-Version sehen Sie bereits nach 48 Stunden." },
  { q: "Was kostet eine professionelle Website?", a: "Eine Unternehmenswebsite startet ab 1.500 €, Landing Pages ab 800 €. Der genaue Preis hängt vom Umfang ab. Wir erstellen Ihnen nach dem kostenlosen Erstgespräch ein transparentes Angebot." },
  { q: "Kann ich die Website selbst bearbeiten?", a: "Ja — auf Wunsch integrieren wir ein Content-Management-System (z. B. Sanity, WordPress) damit Sie Texte, Bilder und Blogbeiträge selbst pflegen können." },
  { q: "Ist meine Website mobiloptimiert?", a: "Jede Website die wir bauen ist Mobile First — d. h. wir designen zuerst für Smartphones und arbeiten uns dann zu größeren Bildschirmen vor. Das Ergebnis funktioniert auf jedem Gerät perfekt." },
  { q: "Was passiert nach dem Launch?", a: "30 Tage Support ist inklusive — Anpassungen, Bugfixes und Fragen kostenfrei. Danach bieten wir optionale Wartungspakete an, oder Sie übernehmen die Website eigenständig." },
];

export default function WebdesignPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#070C18] pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/12 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 left-1/5 w-72 h-72 bg-[#1D4ED8]/10 rounded-full blur-[100px]" />
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
                  Web
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                    design
                  </span>
                  <br />
                  das wirkt.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-6 text-[#94A3B8] text-lg leading-relaxed max-w-lg">
                  Websites die begeistern, überzeugen und konvertieren.
                  Individuell gestaltet, technisch einwandfrei und perfekt auf
                  Ihre Marke abgestimmt — von der ersten Zeile Code bis zum Go-Live.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-9 flex gap-4 flex-wrap">
                  <Link
                    href="/anfragen"
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_32px_rgba(37,99,235,0.5)] text-base"
                  >
                    Projekt starten
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                  <ScrollToButton
                    targetId="portfolio"
                    className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold px-8 py-4 rounded-full border border-[#94A3B8]/15 transition-all duration-200 text-base"
                  >
                    Referenzen ansehen
                  </ScrollToButton>
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

      <WebdesignStats />

      {/* ── Was bedeutet gutes Webdesign ── */}
      <section className="py-28 md:py-36 bg-[#020408]">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl blur-2xl pointer-events-none" style={{ background: `radial-gradient(ellipse, ${C}10 0%, transparent 70%)` }} />
                <Image
                  src="/images/01 - Apple Devices Mockup.png"
                  alt="Webdesign Qualität"
                  width={600}
                  height={420}
                  className="relative w-full rounded-2xl"
                  style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.55))" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection delay={0.05}>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: C }}>Unser Anspruch</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="font-extrabold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(28px, 3.8vw, 52px)" }}>
                  Design das<br />
                  <span style={{ background: `linear-gradient(135deg, ${C} 0%, ${CL} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>konvertiert.</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="text-[#94A3B8] text-[15px] leading-relaxed mb-3">
                  Gutes Webdesign ist mehr als Ästhetik — es ist Psychologie. Jedes Element, jede Farbe und jeder Call-to-Action wird strategisch platziert um Besucher zu führen und zu überzeugen.
                </p>
                <p className="text-[#94A3B8] text-[15px] leading-relaxed">
                  Wir kombinieren visuelles Handwerk mit technischer Präzision. Das Ergebnis: Websites die nicht nur schön sind, sondern echte Geschäftsergebnisse liefern.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {["Nutzerführung (UX)", "Visuelle Hierarchie", "Mobile First", "Conversion Design"].map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: `${C}18`, border: `1px solid ${C}35` }}>
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

      {/* ── Was ist immer inklusive ── */}
      <section className="py-28 md:py-36" style={{ background: "#060d1c", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: C }}>Immer dabei</span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h2 className="font-extrabold text-white leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(26px, 3.5vw, 48px)", letterSpacing: "-0.02em" }}>
                  Was bei jeder<br />
                  <span style={{ background: `linear-gradient(135deg, ${C} 0%, ${CL} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Website inklusive</span>
                  {" "}ist.
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-5 text-[#64748B] text-[15px] leading-relaxed max-w-md mb-8">
                  Kein versteckter Mehraufwand — diese Features sind in jedem Webdesign-Projekt selbstverständlich enthalten.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {inbegriffen.map((f) => (
                    <div key={f} className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ background: "#08111f", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: `${C}18`, border: `1px solid ${C}30` }}>
                        <svg width="7" height="7" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.2 5.8L6.5 2.2" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span className="text-[#94A3B8] text-sm leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} direction="right">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl blur-2xl pointer-events-none" style={{ background: `radial-gradient(ellipse, ${C}0e 0%, transparent 70%)` }} />
                <Image
                  src="/images/mockup 14 inch mana.png"
                  alt="Webdesign Details"
                  width={600}
                  height={420}
                  className="relative w-full rounded-2xl"
                  style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.55))" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Leistungen — Features that matter ── */}
      <section className="py-28 md:py-36" style={{ background: "#060d1c" }}>
        <div className="page-container">
          <AnimatedSection>
            <div className="mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: C }}>Was wir bieten</span>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <h2 className="font-extrabold text-white" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  Features that <span style={{ background: `linear-gradient(135deg, ${C} 0%, ${CL} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>matter.</span>
                </h2>
                <p className="text-[#64748B] text-sm max-w-xs leading-relaxed sm:text-right">Von der einfachen Website bis zum komplexen Online-Shop.</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {leistungen.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div
                  className="group relative rounded-2xl p-[2px] h-full transition-all duration-300 hover:-translate-y-[3px] cursor-default"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, ${item.color}55 50%, rgba(255,255,255,0.03) 100%)`,
                  }}
                >
                  {/* Border brightens on hover */}
                  <div
                    className="absolute inset-0 rounded-[17px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}99 50%, ${item.color}18 100%)` }}
                  />
                  {/* Outer glow behind card */}
                  <div
                    className="absolute -inset-[2px] rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md"
                    style={{ background: `linear-gradient(135deg, transparent, ${item.color}35, transparent)` }}
                  />

                  {/* Inner card */}
                  <div
                    className="relative rounded-[14px] p-6 h-full overflow-hidden"
                    style={{ background: "#060D1C" }}
                  >
                    {/* Ambient top glow on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-28 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at 50% 0%, ${item.color}14 0%, transparent 70%)` }}
                    />
                    <div className="relative">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: item.color + "15", color: item.color }}
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-white font-bold text-[15px] mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                      <p className="text-[#4E6080] text-[13px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prozess ── */}
      <section id="prozess" className="py-28 md:py-36 bg-[#020408] relative overflow-hidden">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[800px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse 400px 100% at 50% 50%, ${C}07 0%, transparent 70%)` }}
        />
        <div className="max-w-5xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-20">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: C }}>Wie wir arbeiten</span>
              <h2 className="font-extrabold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.02em" }}>
                Von der Idee zum{" "}
                <span style={{ background: `linear-gradient(135deg, ${C} 0%, ${CL} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>fertigen Produkt.</span>
              </h2>
              <p className="text-[#64748B] text-[15px] leading-relaxed max-w-md mx-auto">
                Unser bewährter Prozess bringt Ihre Website strukturiert, termingerecht und ohne böse Überraschungen ans Ziel.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Center line desktop */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{ background: `linear-gradient(to bottom, transparent 0%, ${C}90 6%, ${CL}55 40%, ${C}55 60%, ${CL}30 94%, transparent 100%)`, boxShadow: `0 0 16px 2px ${C}30` }} />
            {/* Left line mobile */}
            <div className="lg:hidden absolute left-[27px] top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{ background: `linear-gradient(to bottom, transparent, ${C}85 5%, ${C}40 95%, transparent)`, boxShadow: `0 0 10px ${C}30` }} />

            <div className="space-y-0">
              {prozess.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimatedSection key={item.step} delay={i * 0.13}>
                    {/* Mobile */}
                    <div className="lg:hidden flex items-start gap-5 pb-10 last:pb-0">
                      <div className="relative shrink-0 z-10 mt-1">
                        <div className="absolute inset-0 rounded-full blur-lg scale-[2.2]" style={{ background: `${C}18` }} />
                        <div className="absolute inset-[-5px] rounded-full border" style={{ borderColor: `${C}15` }} />
                        <div className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #0D1F3C 0%, #08111E 100%)", border: `1.5px solid ${C}65`, boxShadow: `0 0 20px ${C}45, inset 0 0 12px ${C}08` }}>
                          <span className="text-white font-black text-base" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1 rounded-2xl p-px" style={{ background: `linear-gradient(135deg, ${C}28 0%, ${C}05 60%, ${CL}10 100%)` }}>
                        <div className="relative bg-[#08111E] rounded-2xl p-6 overflow-hidden">
                          <span className="absolute -bottom-5 -right-2 text-[5.5rem] font-black leading-none select-none pointer-events-none" style={{ fontFamily: "var(--font-plus-jakarta)", color: `${C}06` }}>{item.step}</span>
                          <h3 className="text-white font-bold text-lg mb-2.5 relative" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                          <p className="text-[#64748B] text-sm leading-relaxed mb-5 relative">{item.desc}</p>
                          <div className="relative border-t border-white/[0.05] pt-4">
                            <ul className="space-y-2">
                              {item.deliverables.map((d) => (
                                <li key={d} className="flex items-center gap-2.5 text-white/50 text-sm">
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" style={{ color: C }}><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.35" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop */}
                    <div className="hidden lg:grid grid-cols-[1fr_96px_1fr] items-center pb-10 last:pb-0">
                      <div className={`flex justify-end pr-8 ${isLeft ? "" : "opacity-0 pointer-events-none"}`}>
                        {isLeft && (
                          <div className="relative w-full max-w-[360px] rounded-2xl p-px" style={{ background: `linear-gradient(135deg, ${C}35 0%, ${C}06 60%, ${CL}12 100%)` }}>
                            <div className="relative bg-[#08111E] rounded-2xl p-7 overflow-hidden">
                              <span className="absolute -bottom-6 -right-1 text-[8rem] font-black leading-none select-none pointer-events-none" style={{ fontFamily: "var(--font-plus-jakarta)", color: `${C}07` }}>{item.step}</span>
                              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none" style={{ background: `${C}07` }} />
                              <div className="relative">
                                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                                <p className="text-[#64748B] text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="border-t border-white/[0.05] pt-5">
                                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.18em] mb-3">Sie erhalten</p>
                                  <ul className="space-y-2">
                                    {item.deliverables.map((d) => (
                                      <li key={d} className="flex items-center gap-2.5 text-white/50 text-sm">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" style={{ color: CL }}><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.3" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        {d}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="absolute right-0 top-8 bottom-8 w-[2px] rounded-full" style={{ background: `linear-gradient(to bottom, transparent, ${C}35, transparent)` }} />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex justify-center items-center relative z-10">
                        <div className="absolute w-20 h-20 rounded-full blur-2xl" style={{ background: `${C}12` }} />
                        <div className="absolute w-16 h-16 rounded-full border" style={{ borderColor: `${C}14` }} />
                        <div className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #0D1F3C 0%, #080F1E 100%)", border: `2px solid ${C}75`, boxShadow: `0 0 28px ${C}55, 0 0 60px ${C}18, inset 0 0 18px ${C}10` }}>
                          <span className="text-white font-black text-[15px]" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      <div className={`flex justify-start pl-8 ${!isLeft ? "" : "opacity-0 pointer-events-none"}`}>
                        {!isLeft && (
                          <div className="relative w-full max-w-[360px] rounded-2xl p-px" style={{ background: `linear-gradient(225deg, ${C}35 0%, ${C}06 60%, ${CL}12 100%)` }}>
                            <div className="relative bg-[#08111E] rounded-2xl p-7 overflow-hidden">
                              <span className="absolute -bottom-6 -right-1 text-[8rem] font-black leading-none select-none pointer-events-none" style={{ fontFamily: "var(--font-plus-jakarta)", color: `${C}07` }}>{item.step}</span>
                              <div className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl pointer-events-none" style={{ background: `${C}07` }} />
                              <div className="relative">
                                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                                <p className="text-[#64748B] text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="border-t border-white/[0.05] pt-5">
                                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.18em] mb-3">Sie erhalten</p>
                                  <ul className="space-y-2">
                                    {item.deliverables.map((d) => (
                                      <li key={d} className="flex items-center gap-2.5 text-white/50 text-sm">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" style={{ color: CL }}><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.3" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        {d}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="absolute left-0 top-8 bottom-8 w-[2px] rounded-full" style={{ background: `linear-gradient(to bottom, transparent, ${C}35, transparent)` }} />
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

      {/* ── Portfolio ── */}
      <section id="portfolio" className="py-28 md:py-36 bg-[#020408]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <AnimatedSection>
                <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: C }}>Referenzen</span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h2 className="font-extrabold text-white" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(26px, 4vw, 48px)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
                  Webdesign-Projekte.
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.1}>
              <Link href="/kontakt" className="hidden md:inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 group text-white/35 hover:text-white/85">
                Projekt anfragen
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform duration-200"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </Link>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.1}>
            <PortfolioCarousel projekte={projekte} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Mobile First ── */}
      <section className="py-28 md:py-36" style={{ background: "#060d1c", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: C }}>Mobile First</span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h2 className="font-extrabold text-white leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(26px, 3.5vw, 48px)", letterSpacing: "-0.02em" }}>
                  Perfekt auf<br />
                  <span style={{ background: `linear-gradient(135deg, ${C} 0%, ${CL} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>jedem Gerät.</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-5 text-[#64748B] text-[15px] leading-relaxed max-w-md">
                  Über 60% aller Website-Besuche kommen von Smartphones. Deshalb entwickeln wir jede Website Mobile First — das Erlebnis auf dem Handy ist genauso perfekt wie auf dem Desktop.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-8 space-y-3">
                  {[
                    { title: "Touch-optimierte Navigation", desc: "Menüs und Buttons die sich auf dem Smartphone natürlich anfühlen." },
                    { title: "Schnelle Ladezeiten mobil", desc: "Optimierte Bilder und Code für schnelle Ladezeiten auch im Mobilnetz." },
                    { title: "Lesbare Typografie", desc: "Schriftgrößen und Abstände die auf jedem Bildschirm perfekt lesbar sind." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 rounded-xl px-4 py-3.5" style={{ background: "#08111f", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <span className="mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: `${C}18`, border: `1px solid ${C}30` }}>
                        <svg width="7" height="7" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.2 5.8L6.5 2.2" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <div>
                        <p className="text-white font-semibold text-sm">{item.title}</p>
                        <p className="text-[#64748B] text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} direction="right">
              <div className="flex justify-center gap-5 items-end">
                <Image
                  src="/images/M001T1427 K iPhone Mockup 19Jul25.png"
                  alt="Mobile Webdesign"
                  width={280}
                  height={560}
                  className="rounded-2xl"
                  style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.6))" }}
                  quality={90}
                />
                <Image
                  src="/images/M001T1427 K iPhone Mockup 19Jul25 Kimchi.png"
                  alt="Mobile Webdesign Kimchi"
                  width={280}
                  height={560}
                  className="rounded-2xl mb-10"
                  style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.6))" }}
                  quality={90}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Technologien ── */}
      <section className="py-28 bg-[#020408]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: C }}>Technologie</span>
              <h2 className="font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.02em" }}>
                Womit wir bauen.
              </h2>
              <p className="text-[#64748B] text-[15px] max-w-md mx-auto leading-relaxed">
                Moderne, zukunftssichere Technologien — schnell, skalierbar und wartbar.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { name: "Next.js", desc: "React Framework", color: "#ffffff", icon: (<svg viewBox="0 0 180 180" fill="none" className="w-8 h-8"><circle cx="90" cy="90" r="90" fill="black" /><path d="M149 154.4L69.2 47H47v85.5h17.8V71.2l73.2 98.4c4.1-2.7 7.9-5.7 11-9.2z" fill="url(#nxt-w2)" /><rect x="115" y="47" width="18" height="86" fill="white" /><defs><linearGradient id="nxt-w2" x1="109" y1="116" x2="144" y2="161"><stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" /></linearGradient></defs></svg>) },
              { name: "Tailwind CSS", desc: "Utility-first Styling", color: "#38BDF8", icon: (<svg viewBox="0 0 54 33" className="w-9 h-9" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.463 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z" fill="#38BDF8"/></svg>) },
              { name: "TypeScript", desc: "Typsicherheit", color: "#3178C6", icon: (<svg viewBox="0 0 400 400" className="w-8 h-8"><rect width="400" height="400" rx="50" fill="#3178C6"/><path d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5-.2-.3-31.7-.4-70-.4l-69.6.2v16.4zm229.6-1.7c12.1 3 21.4 9 28.5 18.3 4.1 5.5 10.3 15.8 10.7 18.5.1.8-19.3 13.6-31 20.8-.4.3-2-1.4-3.7-4-5.3-7.7-10.8-11-19.3-11.6-12.4-.9-20.4 5.7-20.4 16.5 0 3.2.5 5.1 1.8 7.6 2.9 6.2 8.2 9.9 23.5 17.4 29 12.5 41.4 20.8 49.1 32.5 8.6 13.1 10.5 34.1 4.7 49.8-6.4 17.1-22.2 28.7-44.4 32.7-6.8 1.3-23.3 1.1-30.7-.3-16.2-3-31.6-11.2-41.1-21.9-4.1-4.7-12.1-17.1-11.6-18 .2-.2 1.9-1.2 3.8-2.3l15.2-8.8 11.8-6.9 2.5 3.6c3.4 5.2 10.9 12.3 15.4 14.7 13 6.7 30.8 5.7 39.6-2.1 4.5-3.9 6.3-8 6.3-14 0-5.4-.8-7.7-4-11.7-4.2-5.1-12.7-9.5-37-21-27.8-12.4-39.8-20.1-47.9-32.5-4.9-7.5-6.8-15.5-6.3-27 .6-17.9 9.7-32.2 25.3-39.9 9.5-4.8 20.5-6.8 33.1-6.3 8.5.4 24.1 3.3 30.5 5.8z" fill="white"/></svg>) },
              { name: "Framer Motion", desc: "Animationen", color: "#BB4AFF", icon: (<svg viewBox="0 0 14 21" className="w-7 h-7" fill="none"><path d="M0 0h14v7H7L0 0z" fill="#BB4AFF"/><path d="M0 7h7l7 7H0V7z" fill="#9F2FEB"/><path d="M0 14h7l-7 7V14z" fill="#7A00D0"/></svg>) },
              { name: "Vercel", desc: "Hosting & Deploy", color: "#ffffff", icon: (<svg viewBox="0 0 116 100" className="w-8 h-8" fill="white"><path d="M57.5 0L115 100H0L57.5 0z"/></svg>) },
              { name: "Figma", desc: "UI/UX Design", color: "#F24E1E", icon: (<svg viewBox="0 0 38 57" className="w-7 h-7" fill="none"><path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg>) },
            ].map((tech, i) => (
              <AnimatedSection key={tech.name} delay={i * 0.07}>
                <div
                  className="group relative rounded-2xl p-6 flex items-center gap-5 overflow-hidden transition-all duration-300 hover:border-white/[0.15]"
                  style={{ background: "#08111f", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, transparent, ${tech.color}50, transparent)` }} />
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: tech.color + "12", border: `1px solid ${tech.color}22` }}>
                    {tech.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-[15px]" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{tech.name}</p>
                    <p className="text-[#4E6080] text-sm mt-0.5">{tech.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 md:py-36" style={{ background: "#060d1c", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: C }}>FAQ</span>
              <h2 className="font-extrabold text-white" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.02em" }}>
                Häufige Fragen.
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-2">
            {faq.map((item, i) => (
              <AnimatedSection key={item.q} delay={i * 0.06}>
                <details className="group rounded-2xl overflow-hidden" style={{ background: "#08111f", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer select-none list-none">
                    <span className="text-white font-semibold text-[15px]" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.q}</span>
                    <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-45" style={{ background: `${C}15`, border: `1px solid ${C}28`, color: CL }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M5 2v6M2 5h6" /></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-5">
                    <div className="pt-1 border-t border-white/[0.05]">
                      <p className="text-[#64748B] text-sm leading-relaxed pt-4">{item.a}</p>
                    </div>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-[#020408]">
        <div className="page-container">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1b36 50%, #0a1628 100%)", border: `1px solid ${C}20` }}>
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none" style={{ background: `radial-gradient(ellipse, ${C}14 0%, transparent 70%)` }} />
              {/* Big decorative text */}
              <div aria-hidden className="absolute bottom-0 right-0 font-extrabold leading-none select-none pointer-events-none opacity-[0.025]" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(80px, 14vw, 180px)", letterSpacing: "-0.04em" }}>
                WEB
              </div>

              <div className="relative">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: CL }}>Bereit?</span>
                <h2 className="font-extrabold text-white mb-5" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(28px, 4.5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  Bereit für Ihre<br />neue Website?
                </h2>
                <p className="text-[#64748B] text-[15px] max-w-lg mx-auto leading-relaxed mb-9">
                  Lassen Sie uns gemeinsam Ihre Idee umsetzen. Die erste Demo-Version ist innerhalb von 48 Stunden fertig — und kostenlos.
                </p>
                <div className="flex justify-center gap-3.5 flex-wrap">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:opacity-90"
                    style={{ background: C, boxShadow: `0 0 40px ${C}50` }}
                  >
                    Kontakt aufnehmen
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </Link>
                  <Link
                    href="/kontakt#demo"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white font-medium px-7 py-3.5 rounded-full border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.04] hover:bg-white/[0.07] transition-all duration-200 text-sm"
                  >
                    Kostenlose Demo
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}