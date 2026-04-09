import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LeistungenCard from "@/components/ui/LeistungenCard";

export const metadata: Metadata = {
  title: "Branding – JR Agency Services",
  description:
    "Einzigartige Markenidentitäten die in Erinnerung bleiben. Logo-Design, Corporate Identity, Visitenkarten und mehr.",
};

const stats = [
  { value: "50+", label: "Marken gestaltet" },
  { value: "100%", label: "Individuell & einzigartig" },
  { value: "5+", label: "Konzeptvarianten" },
  { value: "∞", label: "Revisionen bis es passt" },
];

const leistungen = [
  {
    title: "Logo-Design",
    desc: "Ein unverwechselbares Logo das Ihre Marke auf den Punkt bringt — zeitlos, skalierbar und in allen Formaten geliefert.",
    color: "#3B82F6",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  },
  {
    title: "Corporate Identity",
    desc: "Konsistentes Erscheinungsbild über alle Touchpoints — von der Website über Print bis zur Social-Media-Präsenz.",
    color: "#8B5CF6",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
  },
  {
    title: "Visitenkarten",
    desc: "Hochwertige Visitenkarten-Designs die einen bleibenden ersten Eindruck hinterlassen und Ihre Marke repräsentieren.",
    color: "#14B8A6",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
  },
  {
    title: "Brand Guidelines",
    desc: "Klare Markenrichtlinien damit Ihr Erscheinungsbild überall — intern wie extern — einheitlich und professionell wirkt.",
    color: "#F59E0B",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  },
  {
    title: "Farbsystem & Typografie",
    desc: "Stimmige Farb- und Schriftsysteme die Ihre Persönlichkeit als Marke widerspiegeln und Wiedererkennungswert schaffen.",
    color: "#EC4899",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22a7 7 0 0 1-7-7c0-2.38 1.19-4.47 3-5.74V17a4 4 0 0 0 8 0v-2.26c1.81 1.27 3 3.36 3 5.74a7 7 0 0 1-7 7z"/></svg>,
  },
  {
    title: "Social Media Branding",
    desc: "Einheitliches Erscheinungsbild für alle Kanäle — Templates, Profilbilder, Cover und Story-Formate.",
    color: "#6366F1",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  },
];

const inbegriffen = [
  "Mehrere Logo-Konzeptvarianten",
  "Alle Datei-Formate (SVG, PNG, PDF, AI)",
  "Helle & dunkle Variante",
  "Vollständige Farbpalette",
  "Typografie-Auswahl & Lizenz",
  "Einsatzregeln & Schutzzone",
  "Social Media Versionen",
  "Revisionen bis zur Freigabe",
];

const prozess = [
  {
    step: "01",
    title: "Briefing & Analyse",
    desc: "Wir nehmen uns Zeit, Ihr Unternehmen wirklich zu verstehen — Ihre Werte, Zielgruppe, Wettbewerber und langfristige Ziele. Kein Projekt beginnt ohne ein solides Fundament.",
    deliverables: ["Briefing-Dokument", "Markt- & Wettbewerbsanalyse", "Zielbild & Positionierung"],
  },
  {
    step: "02",
    title: "Recherche & Moodboard",
    desc: "Wir recherchieren Branchentrends, sammeln visuelle Inspiration und erstellen ein Moodboard. So stellen wir sicher, dass wir ästhetisch auf einer Linie sind — bevor auch nur ein einziges Design entsteht.",
    deliverables: ["Visuelles Moodboard", "Stilrichtung festgelegt", "Farbwelt-Vorschlag"],
  },
  {
    step: "03",
    title: "Konzept & Entwurf",
    desc: "Auf Basis des Briefings und Moodboards entstehen mehrere vollständige Logokonzepte. Jedes Konzept wird mit einer Design-Begründung präsentiert — damit Sie verstehen, warum jede Entscheidung getroffen wurde.",
    deliverables: ["2–3 Logokonzepte", "Design-Präsentation", "Variantenübersicht"],
  },
  {
    step: "04",
    title: "Feedback & Verfeinerung",
    desc: "Sie wählen eine Richtung. Gemeinsam verfeinern wir Proportionen, Farben und Details bis ins letzte Pixel. Revisionen sind fester Bestandteil — kein extra Kostenpunkt, sondern der Prozess selbst.",
    deliverables: ["Unbegrenzte Feinkorrekturen", "Finales Logo in allen Varianten", "Farbcodes & Typografie"],
  },
  {
    step: "05",
    title: "Übergabe & Einführung",
    desc: "Sie erhalten alle Dateiformate, eine kompakte Brand Guidelines und Anwendungsbeispiele — so wissen Sie und Ihr Team jederzeit, wie Ihre Marke korrekt eingesetzt wird.",
    deliverables: ["Alle Exportformate (SVG, PNG, PDF)", "Brand Guidelines Dokument", "Anwendungsbeispiele"],
  },
];

export default function BrandingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#070C18] pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-[#C9A96E]/5 rounded-full blur-[100px]" />
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
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                    Branding
                  </span>
                  <br />
                  das bleibt.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-6 text-[#94A3B8] text-lg leading-relaxed max-w-lg">
                  Wir erschaffen Markenidentitäten die Ihre Persönlichkeit
                  widerspiegeln und Ihre Zielgruppe ansprechen. Vom ersten
                  Konzept bis zur fertigen, einsatzbereiten Marke.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-9 flex gap-4 flex-wrap">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_32px_rgba(37,99,235,0.5)] text-base"
                  >
                    Branding anfragen
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                  <Link
                    href="#prozess"
                    className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold px-8 py-4 rounded-full border border-[#94A3B8]/15 transition-all duration-200 text-base"
                  >
                    Unser Prozess
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} direction="right">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#2563EB]/15 to-[#C9A96E]/5 rounded-3xl blur-3xl" />
                {/* Großes Logo-Bild */}
                <Image
                  src="/images/branding/branding-twitter-banner.png"
                  alt="Branding Twitter Banner"
                  width={620}
                  height={350}
                  className="relative w-full rounded-2xl drop-shadow-2xl"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 bg-[#0D1526] border-y border-[#94A3B8]/10">
        <div className="page-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.07}>
                <div className="text-center">
                  <p
                    className="text-4xl font-extrabold text-white"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[#94A3B8] text-sm mt-1">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warum Branding zählt ── */}
      <section className="py-32 bg-[#070C18]">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#2563EB]/15 to-[#C9A96E]/5 rounded-3xl blur-2xl" />
                <Image
                  src="/images/01 - Apple mac ph.png"
                  alt="Branding Design Prozess"
                  width={600}
                  height={440}
                  className="relative w-full rounded-2xl drop-shadow-2xl"
                />
              </div>
            </AnimatedSection>
            <div>
              <AnimatedSection delay={0.05}>
                <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-3">
                  Warum es wichtig ist
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Marken die
                  <br />
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                    in Erinnerung bleiben
                  </span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="mt-5 text-white text-base leading-relaxed">
                  Ein starkes Logo ist der erste Kontaktpunkt zwischen Ihnen und
                  Ihren Kunden. In Sekunden entscheidet es über Vertrauen,
                  Seriosität und Wiedererkennung.
                </p>
                <p className="mt-4 text-white text-base leading-relaxed">
                  Wir gestalten keine Logos — wir bauen Identitäten. Jede Linie,
                  jede Farbe und jede Schrift erzählt Ihre Geschichte und spricht
                  Ihre Zielgruppe gezielt an.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    "Sofortige Wiedererkennung",
                    "Professioneller Auftritt",
                    "Vertrauen aufbauen",
                    "Konsistenz über alle Kanäle",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3.2 5.8L6.5 2.2" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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

      {/* ── Leistungen ── */}
      <section className="py-32 bg-[#0D1526]">
        <div className="page-container">
          <SectionHeading
            label="Was wir bieten"
            title="Branding-Leistungen"
            description="Alles was Sie für eine starke, konsistente Markenidentität benötigen — aus einer Hand."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {leistungen.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <LeistungenCard title={item.title} desc={item.desc} color={item.color} icon={item.icon} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Was ist inklusive ── */}
      <section className="py-28 bg-[#070C18] border-y border-[#94A3B8]/10">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-3">
                  Immer dabei
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h2
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Was in jedem
                  <br />
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                    Branding-Projekt
                  </span>{" "}steckt
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-5 text-white text-base leading-relaxed max-w-md">
                  Kein halbfertiges Logo — bei uns erhalten Sie alles was Sie
                  brauchen um Ihre Marke sofort einzusetzen.
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
                <div className="absolute -inset-6 bg-gradient-to-br from-[#2563EB]/15 to-[#C9A96E]/8 rounded-3xl blur-3xl" />
                <div className="relative grid grid-cols-1 gap-5">
                  <Image
                    src="/images/branding/branding-horizontal-logo.png"
                    alt="Construction Horizontal Logo"
                    width={560}
                    height={320}
                    className="w-full rounded-2xl drop-shadow-2xl"
                  />
                  <Image
                    src="/images/branding/branding-colors-backgrounds.png"
                    alt="Primary Colors on Backgrounds"
                    width={560}
                    height={240}
                    className="w-full rounded-2xl drop-shadow-2xl"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Prozess ── */}
      <section id="prozess" className="py-32 bg-[#070C18] relative overflow-hidden">

        {/* Ambient glow column — follows the center path */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[800px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 400px 100% at 50% 50%, rgba(37,99,235,0.055) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 relative">

          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-24">
              <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-[0.22em] mb-5">
                Unser Vorgehen
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Der Weg zu{" "}
                <span className="bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  Ihrer Marke
                </span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto">
                Kein Raten, kein Durcheinander. Jeder Schritt ist klar definiert — mit konkreten Ergebnissen, die Sie nach jeder Phase in den Händen halten.
              </p>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">

            {/* ── Center line (desktop) ── */}
            <div
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, rgba(37,99,235,0.9) 6%, rgba(96,165,250,0.55) 40%, rgba(37,99,235,0.55) 60%, rgba(96,165,250,0.3) 94%, transparent 100%)",
                boxShadow: "0 0 16px 2px rgba(37,99,235,0.3), 0 0 40px 4px rgba(37,99,235,0.1)",
              }}
            />
            {/* Soft glow bloom behind the line */}
            <div
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-[24px] rounded-full pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.12) 10%, rgba(37,99,235,0.07) 90%, transparent)",
                filter: "blur(8px)",
              }}
            />

            {/* ── Left line (mobile) ── */}
            <div
              className="lg:hidden absolute left-[27px] top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.85) 5%, rgba(37,99,235,0.4) 95%, transparent)",
                boxShadow: "0 0 10px rgba(37,99,235,0.3)",
              }}
            />

            <div className="space-y-0">
              {prozess.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimatedSection key={item.step} delay={i * 0.13}>

                    {/* ── Mobile layout ── */}
                    <div className="lg:hidden flex items-start gap-5 pb-10 last:pb-0">
                      {/* Node */}
                      <div className="relative shrink-0 z-10 mt-1">
                        <div className="absolute inset-0 rounded-full bg-[#2563EB]/20 blur-lg scale-[2.2]" />
                        <div className="absolute inset-[-5px] rounded-full border border-[#2563EB]/15" />
                        <div
                          className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, #0D1F3C 0%, #08111E 100%)",
                            border: "1.5px solid rgba(37,99,235,0.65)",
                            boxShadow: "0 0 20px rgba(37,99,235,0.45), inset 0 0 12px rgba(37,99,235,0.08)",
                          }}
                        >
                          <span className="text-white font-black text-base" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      {/* Card */}
                      <div
                        className="flex-1 rounded-2xl p-px"
                        style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.28) 0%, rgba(37,99,235,0.05) 60%, rgba(96,165,250,0.1) 100%)" }}
                      >
                        <div className="relative bg-[#08111E] rounded-2xl p-6 overflow-hidden">
                          <span
                            className="absolute -bottom-5 -right-2 text-[5.5rem] font-black leading-none select-none pointer-events-none"
                            style={{ fontFamily: "var(--font-plus-jakarta)", color: "rgba(37,99,235,0.06)" }}
                          >{item.step}</span>
                          <h3 className="text-white font-bold text-lg mb-2.5 relative" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                          <p className="text-[#94A3B8] text-sm leading-relaxed mb-5 relative">{item.desc}</p>
                          <div className="relative border-t border-white/[0.05] pt-4">
                            <ul className="space-y-2">
                              {item.deliverables.map((d) => (
                                <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#2563EB]">
                                    <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.35" />
                                    <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── Desktop alternating layout ── */}
                    <div className="hidden lg:grid grid-cols-[1fr_96px_1fr] items-center pb-10 last:pb-0">

                      {/* Left slot */}
                      <div className={`flex justify-end pr-8 ${isLeft ? "" : "opacity-0 pointer-events-none"}`}>
                        {isLeft && (
                          <div
                            className="relative w-full max-w-[360px] rounded-2xl p-px"
                            style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.06) 60%, rgba(96,165,250,0.12) 100%)" }}
                          >
                            <div className="relative bg-[#08111E] rounded-2xl p-7 overflow-hidden">
                              {/* Ghost number */}
                              <span
                                className="absolute -bottom-6 -right-1 text-[8rem] font-black leading-none select-none pointer-events-none"
                                style={{ fontFamily: "var(--font-plus-jakarta)", color: "rgba(37,99,235,0.065)" }}
                              >{item.step}</span>
                              {/* Top-right accent glow */}
                              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(37,99,235,0.07)" }} />
                              <div className="relative">
                                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="border-t border-white/[0.05] pt-5">
                                  <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.18em] mb-3">Sie erhalten</p>
                                  <ul className="space-y-2">
                                    {item.deliverables.map((d) => (
                                      <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#60A5FA]">
                                          <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.3" />
                                          <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {d}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              {/* Right edge accent */}
                              <div className="absolute right-0 top-8 bottom-8 w-[2px] rounded-full" style={{ background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.35), transparent)" }} />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* ── Node (center) ── */}
                      <div className="flex justify-center items-center relative z-10">
                        <div className="absolute w-20 h-20 rounded-full bg-[#2563EB]/12 blur-2xl" />
                        <div className="absolute w-16 h-16 rounded-full border border-[#2563EB]/14" />
                        <div
                          className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, #0D1F3C 0%, #080F1E 100%)",
                            border: "2px solid rgba(37,99,235,0.75)",
                            boxShadow: "0 0 28px rgba(37,99,235,0.55), 0 0 60px rgba(37,99,235,0.18), inset 0 0 18px rgba(37,99,235,0.1)",
                          }}
                        >
                          <span className="text-white font-black text-[15px]" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>

                      {/* Right slot */}
                      <div className={`flex justify-start pl-8 ${!isLeft ? "" : "opacity-0 pointer-events-none"}`}>
                        {!isLeft && (
                          <div
                            className="relative w-full max-w-[360px] rounded-2xl p-px"
                            style={{ background: "linear-gradient(225deg, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.06) 60%, rgba(96,165,250,0.12) 100%)" }}
                          >
                            <div className="relative bg-[#08111E] rounded-2xl p-7 overflow-hidden">
                              <span
                                className="absolute -bottom-6 -right-1 text-[8rem] font-black leading-none select-none pointer-events-none"
                                style={{ fontFamily: "var(--font-plus-jakarta)", color: "rgba(37,99,235,0.065)" }}
                              >{item.step}</span>
                              <div className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(37,99,235,0.07)" }} />
                              <div className="relative">
                                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="border-t border-white/[0.05] pt-5">
                                  <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.18em] mb-3">Sie erhalten</p>
                                  <ul className="space-y-2">
                                    {item.deliverables.map((d) => (
                                      <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#60A5FA]">
                                          <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.3" />
                                          <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {d}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="absolute left-0 top-8 bottom-8 w-[2px] rounded-full" style={{ background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.35), transparent)" }} />
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

      {/* ── Warum gutes Branding ── */}
      <section className="py-28 bg-[#070C18] border-t border-[#94A3B8]/10">
        <div className="page-container">
          <SectionHeading
            label="Der Unterschied"
            title="Branding ist Ihre stärkste Waffe"
            description="Unternehmen mit starker Markenidentität wachsen schneller, gewinnen leichter Kunden und verlangen höhere Preise."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: "7 Sek.",
                statLabel: "braucht ein Mensch um eine Marke zu bewerten",
                title: "Erster Eindruck",
                desc: "In weniger als 7 Sekunden entscheiden potenzielle Kunden ob sie Ihnen vertrauen. Ein starkes Logo und konsistentes Design schafft sofort Vertrauen.",
              },
              {
                stat: "+23%",
                statLabel: "mehr Umsatz durch konsistente Markenpräsenz",
                title: "Mehr Umsatz",
                desc: "Konsistentes Branding über alle Kanäle hinweg steigert den Umsatz messbar. Eine starke Marke erlaubt es zudem, höhere Preise zu erzielen.",
              },
              {
                stat: "3–5×",
                statLabel: "bessere Kundenbindung bei starken Marken",
                title: "Kundenbindung",
                desc: "Menschen sind loyal gegenüber Marken — nicht gegenüber Produkten. Eine einprägsame Identität sorgt für Stammkunden und Weiterempfehlungen.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group bg-[#0B1220] border border-[#94A3B8]/10 rounded-2xl p-8 hover:border-[#2563EB]/25 transition-all duration-300 h-full">
                  <div className="mb-6">
                    <p
                      className="text-5xl font-extrabold text-white"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {item.stat}
                    </p>
                    <p className="text-[#94A3B8]/60 text-xs mt-1 leading-snug">{item.statLabel}</p>
                  </div>
                  <h3
                    className="text-white font-bold text-lg mb-3"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-[#0D1526]">
        <div className="page-container">
          <div className="bg-gradient-to-br from-[#121D35] to-[#0D1526] border border-[#2563EB]/20 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2563EB]/10 rounded-full blur-[100px]" />
            </div>
            <div className="relative">
              <AnimatedSection>
                <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-4">
                  Bereit?
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h2
                  className="text-4xl md:text-5xl font-bold text-white"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Designs die
                  <br />Identität schaffen
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-5 text-[#94A3B8] text-lg max-w-xl mx-auto leading-relaxed">
                  Lassen Sie uns gemeinsam eine Marke aufbauen die begeistert,
                  in Erinnerung bleibt und Ihr Unternehmen von der Konkurrenz abhebt.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-9 flex justify-center gap-4 flex-wrap">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] text-base"
                  >
                    Jetzt anfragen
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold px-8 py-4 rounded-full border border-[#94A3B8]/15 transition-all duration-200 text-base"
                  >
                    Kostenloses Erstgespräch
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
