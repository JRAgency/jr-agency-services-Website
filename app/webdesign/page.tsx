import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LeistungenCard from "@/components/ui/LeistungenCard";
import PortfolioCarousel from "@/components/ui/PortfolioCarousel";

// ─── Metadata (SEO) ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Webdesign Stuttgart – Websites für Unternehmen | JR Agency",
  description:
    "Webdesign Agentur Stuttgart für B2B & Maschinenbau. Kostenlose Demo-Website in 48h. Professionelle Websites die Anfragen generieren.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "30+",  label: "Projekte umgesetzt" },
  { value: "48h",  label: "Erste Demo live" },
  { value: "95+",  label: "Lighthouse Score" },
  { value: "100%", label: "Kundenzufriedenheit" },
];

const probleme = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: "Veraltete Website",
    desc: "Ihre Website sieht aus wie 2012 — Besucher springen sofort ab. Potenzielle Kunden entscheiden in Sekunden, ob sie bleiben oder gehen.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.37h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.1-.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
      </svg>
    ),
    title: "Keine Anfragen",
    desc: "Besucher kommen, lesen kurz — und verschwinden. Ihre Website erklärt nicht klar genug, was Sie tun und warum man Sie kontaktieren sollte.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
    title: "Unprofessioneller Eindruck",
    desc: "Im B2B-Bereich entscheidet die Website über Vertrauen. Eine schwache Online-Präsenz kostet Sie Aufträge — bevor ein Gespräch stattfindet.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
      </svg>
    ),
    title: "Unklare Leistungen",
    desc: "Besucher verstehen nicht, was Sie konkret anbieten und für wen. Ohne klare Botschaft gehen Anfragen an den Wettbewerb.",
  },
];

const leistungen = [
  {
    title: "Webdesign & Entwicklung",
    desc: "Individuelle Unternehmenswebsites und Landing Pages — technisch sauber, schnell und auf Ihre Zielgruppe zugeschnitten.",
    color: "#3B82F6",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  },
  {
    title: "Struktur & Inhalte",
    desc: "Klare Seitenstruktur, verständliche Texte und überzeugende Inhalte — damit Besucher sofort verstehen, was Sie anbieten.",
    color: "#14B8A6",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  },
  {
    title: "Conversion-Optimierung",
    desc: "Strategisch platzierte CTAs, Vertrauenselemente und Nutzerführung — damit Besucher zu Anfragen und Kunden werden.",
    color: "#8B5CF6",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  },
  {
    title: "Technisches SEO",
    desc: "Jede Website wird für Google optimiert — schnelle Ladezeiten, saubere Struktur und korrekte Meta-Daten von Anfang an.",
    color: "#10B981",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    title: "Branding & Design",
    desc: "Professionelles Logo, Farbkonzept und visuelles Erscheinungsbild das Vertrauen aufbaut und Ihre Marke klar positioniert.",
    color: "#F59E0B",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
  },
  {
    title: "Social Media Aufbau",
    desc: "LinkedIn, Instagram und Co. professionell aufgestellt — konsistentes Erscheinungsbild und strategischer Content-Start.",
    color: "#F97316",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
];

const referenzen = [
  {
    img: "01 - Apple Devices Mockup Peter schmid GMBH.png",
    name: "Peter Schmid GmbH",
    branche: "Maschinenbau & Fertigung",
    problem: "Veraltete Website ohne klare Leistungsdarstellung. Potenzielle Geschäftskunden wurden digital nicht erreicht.",
    ergebnis: "Moderne B2B-Website mit strukturierter Produktübersicht, Kontaktformular und technischer SEO-Optimierung.",
    tags: ["B2B", "Maschinenbau"],
  },
  {
    img: "01 - Apple Devices Mockup lombare.png",
    name: "Lombare Parfum",
    branche: "E-Commerce & Einzelhandel",
    problem: "Kein Online-Auftritt, kein Shop. Der gesamte Umsatz hing am stationären Geschäft ohne digitale Reichweite.",
    ergebnis: "Vollständiger Online-Shop mit Zahlungsintegration, mobilem Design und SEO-Grundoptimierung.",
    tags: ["E-Commerce", "B2C"],
  },
  {
    img: "01 - Apple Devices Mockup kimchi.png",
    name: "Kimchi Korean Kitchen",
    branche: "Gastronomie",
    problem: "Keine Web-Präsenz, kaum Google-Sichtbarkeit. Neukunden kamen fast ausschließlich über Empfehlung.",
    ergebnis: "Restaurant-Website mit Speisekarte, Google-Präsenz und Reservierungsmöglichkeit — in unter 2 Wochen live.",
    tags: ["Restaurant", "B2C"],
  },
];

const projekte = [
  { img: "01 - Apple Devices Mockup lombare.png",           name: "Lombare Parfum",        cat: "Webdesign & Branding",  tags: ["E-Commerce", "Branding"] },
  { img: "01 - Apple Devices Mockup kimchi.png",            name: "Kimchi Korean Kitchen", cat: "Restaurant Website",    tags: ["Responsive", "SEO"] },
  { img: "01 - Apple Devices Mockup Mana.png",              name: "Mana Café",             cat: "Gastronomie",           tags: ["Webdesign", "CMS"] },
  { img: "01 - Apple Devices Mockup Peter schmid GMBH.png", name: "Peter Schmid GmbH",     cat: "Unternehmenswebsite",   tags: ["B2B", "Corporate"] },
  { img: "02 - Apple Devices Mockup.png",                   name: "Business Class",        cat: "Webdesign",             tags: ["Landing Page", "Conversion"] },
  { img: "03 - Apple Devices Mockup.png",                   name: "YAMYAM",                cat: "Food & Gastronomie",    tags: ["Responsive", "Webdesign"] },
];

const prozess = [
  {
    step: "01",
    title: "Analyse",
    desc: "Wir analysieren Ihr Unternehmen, Ihre Zielgruppe und Ihre Mitbewerber. Was funktioniert? Was fehlt? Daraus entsteht eine klare Strategie.",
  },
  {
    step: "02",
    title: "Kostenlose Demo",
    desc: "Innerhalb von 48 Stunden erstellen wir eine unverbindliche Demo-Version Ihrer neuen Website — Sie sehen das Ergebnis, bevor Sie sich entscheiden.",
  },
  {
    step: "03",
    title: "Umsetzung",
    desc: "Nach Ihrer Freigabe setzen wir die Website vollständig um — responsiv, SEO-optimiert und mit allen besprochenen Inhalten und Funktionen.",
  },
  {
    step: "04",
    title: "Optimierung",
    desc: "Wir testen, verfeinern und optimieren. Ladezeiten, Mobile-Darstellung und Conversion-Elemente werden geprüft und verbessert.",
  },
  {
    step: "05",
    title: "Launch",
    desc: "Ihre Website geht live. Wir kümmern uns um Domain, Hosting und stehen 30 Tage kostenlos für Anpassungen zur Verfügung.",
  },
];

const zielgruppen = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/><path d="M6 20V10l6-6 6 6v10"/><path d="M10 20v-6h4v6"/>
      </svg>
    ),
    title: "Maschinenbau & Industrie",
    desc: "Websites für Hersteller, Zulieferer und Fertigungsunternehmen. Technische Kompetenz professionell kommunizieren.",
    highlight: true,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Technische Dienstleister",
    desc: "Engineering, Beratung, IT und Fachplanung. Komplex erklärte Leistungen verständlich auf den Punkt gebracht.",
    highlight: true,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Handwerk & Produktion",
    desc: "Handwerksbetriebe, Werkstätten und Produktionsunternehmen die lokal gefunden werden und Vertrauen aufbauen wollen.",
    highlight: true,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Alle weiteren Unternehmen",
    desc: "Gastronomie, Einzelhandel, Dienstleister, Agenturen — wer eine professionelle Website braucht, ist bei uns richtig.",
    highlight: false,
  },
];

const faq = [
  {
    frage: "Was kostet eine professionelle Website?",
    antwort:
      "Die Kosten variieren je nach Umfang und Anforderungen. Einfache Unternehmenswebsites starten ab ca. 1.500 €, komplexere B2B-Websites mit vielen Seiten, individuellen Funktionen oder Online-Shop liegen höher. Im kostenlosen Erstgespräch nennen wir Ihnen ein konkretes Angebot — ohne versteckte Kosten.",
  },
  {
    frage: "Was beinhaltet die kostenlose Demo-Website?",
    antwort:
      "Die Demo ist ein vollständig gestalteter Entwurf Ihrer neuen Website — nicht nur ein Mockup. Sie sehen echtes Design, Struktur und Inhalte, bevor Sie sich für eine Zusammenarbeit entscheiden. Die Demo ist komplett kostenlos und unverbindlich. Sie gehen kein Risiko ein.",
  },
  {
    frage: "Wie lange dauert die Erstellung einer Website?",
    antwort:
      "Die erste Demo ist innerhalb von 48 Stunden fertig. Die vollständige Umsetzung dauert je nach Umfang 2–4 Wochen. Wir arbeiten strukturiert und halten Sie in jedem Schritt auf dem Laufenden.",
  },
  {
    frage: "Ist das Angebot auch für Maschinenbau-Unternehmen geeignet?",
    antwort:
      "Ja — B2B-Websites für Maschinenbau, Industrie und technische Dienstleister sind unser Schwerpunkt. Wir verstehen die besonderen Anforderungen: komplexe Leistungen verständlich darstellen, Vertrauen bei Entscheidern aufbauen und qualifizierte Anfragen generieren.",
  },
  {
    frage: "Für wen ist das Angebot geeignet?",
    antwort:
      "Primär für B2B-Unternehmen aus Maschinenbau, Industrie, Technik und Handwerk. Aber auch für B2C-Unternehmen wie Einzelhandel, Gastronomie oder Dienstleister — überall dort, wo eine professionelle Online-Präsenz Anfragen und Kunden bringt.",
  },
  {
    frage: "Bieten Sie auch laufende Betreuung nach dem Launch an?",
    antwort:
      "Ja. Nach dem Launch bieten wir 30 Tage kostenlosen Support. Danach können Sie zwischen verschiedenen Betreuungspaketen wählen — von gelegentlichen Anpassungen bis zur vollständigen laufenden Betreuung.",
  },
];

// ─── Divider ─────────────────────────────────────────────────────────────────

function SectionDivider() {
  return (
    <div className="relative h-px mx-auto max-w-4xl px-6">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(37,99,235,0.22) 30%, rgba(96,165,250,0.15) 50%, rgba(37,99,235,0.22) 70%, transparent)",
        }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-[3px] w-[6px] h-[6px] rounded-full"
        style={{ background: "rgba(96,165,250,0.55)", boxShadow: "0 0 8px 2px rgba(37,99,235,0.45)" }}
      />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WebdesignPage() {
  return (
    <div className="bg-[#070C18]">

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20" aria-label="Hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[520px] h-[520px] bg-[#2563EB]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 left-[10%] w-80 h-80 bg-[#1D4ED8]/07 rounded-full blur-[110px]" />
        </div>
        <div className="page-container py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-4">
                  Webdesign Agentur Stuttgart
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                {/* ── H1 mit Hauptkeyword ── */}
                <h1
                  className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Webdesign Stuttgart —<br />
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                    Mehr Anfragen
                  </span>{" "}
                  für Ihr Unternehmen
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-6 text-[#94A3B8] text-lg leading-relaxed max-w-lg">
                  Wir erstellen professionelle Websites für Maschinenbau, Industrie und
                  technische Dienstleister — aber auch für alle anderen Unternehmen, die digital
                  mehr erreichen wollen. Klar strukturiert, schnell und auf Anfragen ausgerichtet.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-9 flex gap-4 flex-wrap">
                  <Link
                    href="/anfragen"
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_32px_rgba(37,99,235,0.5)] text-base"
                  >
                    Kostenlose Demo anfordern
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold px-8 py-4 rounded-full border border-[#94A3B8]/15 transition-all duration-200 text-base"
                  >
                    Website analysieren lassen
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["#2563EB", "#1D4ED8", "#3B82F6"].map((c, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#070C18] flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: `linear-gradient(135deg, ${c}, ${c}99)` }}>
                        {["M", "B", "I"][i]}
                      </div>
                    ))}
                  </div>
                  <p className="text-[#94A3B8] text-sm">
                    <span className="text-white font-semibold">30+ Unternehmen</span> vertrauen bereits auf unsere Websites
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#2563EB]/20 to-transparent rounded-3xl blur-2xl" />
                <Image
                  src="/images/mockup 14 inch.png"
                  alt="Webdesign Stuttgart – professionelle Unternehmenswebsite"
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

      {/* Stats */}
      <section className="py-12" aria-label="Kennzahlen">
        <div className="page-container">
          <div
            className="rounded-2xl px-10 py-9"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(15,23,42,0.5) 100%)",
              border: "1px solid rgba(37,99,235,0.14)",
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

      {/* ══════════════════════════════════════════════════════════════
          2. PROBLEM
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" aria-labelledby="problem-heading">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#EF4444]/04 rounded-full blur-[130px] pointer-events-none" />
        <div className="page-container relative">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-[#F87171] text-xs font-bold uppercase tracking-[0.22em] mb-4">Das kennen viele</span>
              <h2
                id="problem-heading"
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Ist Ihre Website noch<br />
                <span className="bg-gradient-to-r from-[#F87171] to-[#FBBF24] bg-clip-text text-transparent">zeitgemäß?</span>
              </h2>
              <p className="mt-5 text-[#94A3B8] text-base max-w-lg mx-auto leading-relaxed">
                Diese Probleme hören wir täglich von Unternehmen — und sie kosten echte Aufträge.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {probleme.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div
                  className="flex gap-5 p-6 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(239,68,68,0.06) 0%, rgba(15,23,42,0.4) 100%)",
                    border: "1px solid rgba(239,68,68,0.14)",
                  }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[#F87171]"
                    style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {p.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════
          3. LÖSUNG
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" aria-labelledby="loesung-heading">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#2563EB]/06 rounded-full blur-[130px] pointer-events-none" />
        <div className="page-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <Image
                src="/images/01 - Apple Devices Mockup.png"
                alt="B2B Webdesign für Maschinenbau und Industrie"
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
                  Unser Ansatz
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2
                  id="loesung-heading"
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Webdesign das<br />
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">Ergebnisse liefert</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="mt-5 text-[#94A3B8] text-base leading-relaxed">
                  Wir erstellen keine Websites um der Website willen. Jede Entscheidung —
                  Struktur, Text, Design — ist darauf ausgerichtet, dass Besucher zu Anfragen
                  werden. Das gilt besonders für B2B-Unternehmen wie Maschinenbauer oder
                  technische Dienstleister, wo Vertrauen alles entscheidet.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="mt-8 space-y-4">
                  {[
                    { t: "Strukturierte Inhalte",    d: "Klare Gliederung, verständliche Texte — Besucher wissen sofort, wer Sie sind und was Sie leisten." },
                    { t: "Conversion-Fokus",          d: "Strategisch platzierte Kontaktmöglichkeiten und klare Handlungsaufforderungen an jeder Stelle." },
                    { t: "B2B- und B2C-geeignet",     d: "Ob Maschinenbauer, Dienstleister oder Einzelhandel — wir passen Sprache und Struktur an Ihre Zielgruppe an." },
                  ].map((item) => (
                    <div key={item.t} className="flex gap-4">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.2 5.8L6.5 2.2" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <div>
                        <p className="text-white font-semibold text-sm">{item.t}</p>
                        <p className="text-[#94A3B8] text-sm mt-0.5 leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════
          4. KOSTENLOSE DEMO (Conversion-Hebel)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" aria-labelledby="demo-heading">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)" }} />
        <div className="page-container relative">
          <div
            className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.14) 0%, rgba(10,17,38,0.8) 60%, rgba(29,78,216,0.1) 100%)",
              border: "1px solid rgba(37,99,235,0.28)",
            }}
          >
            {/* Innen-Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#2563EB]/08 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedSection>
                  <span className="inline-flex items-center gap-2 text-[#93C5FD] text-xs font-bold uppercase tracking-[0.22em] mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    Unser stärkstes Angebot
                  </span>
                </AnimatedSection>
                <AnimatedSection delay={0.05}>
                  <h2
                    id="demo-heading"
                    className="text-4xl md:text-5xl font-bold text-white leading-tight"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Kostenlose Demo-Website —<br />
                    <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                      unverbindlich & risikofrei
                    </span>
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <p className="mt-5 text-[#94A3B8] text-base leading-relaxed">
                    Sie müssen uns nicht blind vertrauen. Wir erstellen innerhalb von{" "}
                    <span className="text-white font-semibold">48 Stunden</span> eine vollständige
                    Demo Ihrer neuen Website — kostenlos, ohne Vertrag, ohne versteckte Kosten.
                    Sie entscheiden danach, ob Sie weitermachen wollen.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.15}>
                  <Link
                    href="/anfragen"
                    className="mt-8 inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(37,99,235,0.55)] text-base"
                  >
                    Jetzt Demo anfordern — kostenlos
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </Link>
                  <p className="mt-3 text-[#94A3B8] text-xs">
                    Kein Risiko · Keine Vertragsbindung · Ergebnis in 48 Stunden
                  </p>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={0.15} direction="right">
                <div className="space-y-4">
                  {[
                    {
                      n: "01",
                      t: "Kein Risiko",
                      d: "Die Demo ist vollständig kostenlos. Sie zahlen erst, wenn Sie überzeugt sind und eine Zusammenarbeit beginnen möchten.",
                    },
                    {
                      n: "02",
                      t: "Ergebnis vorab sehen",
                      d: "Keine abstrakten Versprechen. Sie sehen echtes Design und Struktur Ihrer Website, bevor Sie entscheiden.",
                    },
                    {
                      n: "03",
                      t: "Einfache Entscheidung",
                      d: "Gefällt Ihnen die Demo, geht es direkt weiter. Wenn nicht — kein Problem, kein Druck, keine Kosten.",
                    },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className="flex gap-4 p-5 rounded-2xl"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="shrink-0 w-9 h-9 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center">
                        <span className="text-[#60A5FA] font-bold text-xs">{item.n}</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm mb-1">{item.t}</p>
                        <p className="text-[#94A3B8] text-sm leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════
          5. LEISTUNGEN
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" aria-labelledby="leistungen-heading">
        <div className="absolute right-1/4 top-0 w-[400px] h-[400px] bg-[#2563EB]/05 rounded-full blur-[120px] pointer-events-none" />
        <div className="page-container relative">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-[0.22em] mb-4">Was wir bieten</span>
              <h2
                id="leistungen-heading"
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Unsere Webdesign-Leistungen
              </h2>
              <p className="mt-4 text-[#94A3B8] text-base max-w-lg mx-auto leading-relaxed">
                Alles aus einer Hand — von der ersten Idee bis zur fertigen Website die Anfragen generiert.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {leistungen.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <LeistungenCard title={item.title} desc={item.desc} color={item.color} icon={item.icon} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════
          6. REFERENZEN
      ══════════════════════════════════════════════════════════════ */}
      <section id="portfolio" className="py-28 relative overflow-hidden" aria-labelledby="referenzen-heading">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(37,99,235,0.05) 0%, transparent 70%)" }} />
        <div className="page-container relative">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-[0.22em] mb-4">Referenzen</span>
              <h2
                id="referenzen-heading"
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Projekte die überzeugen
              </h2>
              <p className="mt-4 text-[#94A3B8] text-base max-w-lg mx-auto leading-relaxed">
                Konkrete Ergebnisse für echte Unternehmen — von B2B-Maschinenbau bis Gastronomie.
              </p>
            </div>
          </AnimatedSection>

          {/* Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {referenzen.map((ref, i) => (
              <AnimatedSection key={ref.name} delay={i * 0.1}>
                <div
                  className="rounded-2xl overflow-hidden flex flex-col h-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="relative h-44 overflow-hidden bg-[#0B1220]">
                    <Image
                      src={`/images/portfolio/${ref.img}`}
                      alt={ref.name}
                      fill
                      className="object-cover object-top opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-xs font-semibold text-[#93C5FD] bg-[#2563EB]/20 border border-[#2563EB]/30 rounded-full px-3 py-1">
                        {ref.branche}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col gap-4">
                    <h3 className="text-white font-bold text-base" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {ref.name}
                    </h3>
                    <div>
                      <p className="text-[#F87171] text-xs font-semibold uppercase tracking-widest mb-1">Problem</p>
                      <p className="text-[#94A3B8] text-sm leading-relaxed">{ref.problem}</p>
                    </div>
                    <div>
                      <p className="text-[#34D399] text-xs font-semibold uppercase tracking-widest mb-1">Ergebnis</p>
                      <p className="text-[#94A3B8] text-sm leading-relaxed">{ref.ergebnis}</p>
                    </div>
                    <div className="mt-auto flex gap-2 flex-wrap">
                      {ref.tags.map((t) => (
                        <span key={t} className="text-xs text-[#94A3B8]/70 bg-white/[0.04] border border-white/[0.07] rounded-full px-3 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Portfolio Carousel */}
          <AnimatedSection delay={0.1}>
            <PortfolioCarousel projekte={projekte} />
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════
          7. ABLAUF
      ══════════════════════════════════════════════════════════════ */}
      <section id="ablauf" className="py-28 relative overflow-hidden" aria-labelledby="ablauf-heading">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 80% at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-[0.22em] mb-4">Wie es funktioniert</span>
              <h2
                id="ablauf-heading"
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Von der Anfrage zur<br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">fertigen Website</span>
              </h2>
              <p className="mt-5 text-[#94A3B8] text-base max-w-xl mx-auto leading-relaxed">
                Strukturiert, transparent und ohne böse Überraschungen — von der ersten Analyse bis zum Launch.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Vertikale Linie */}
            <div
              className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.8) 5%, rgba(37,99,235,0.4) 95%, transparent)",
                boxShadow: "0 0 10px rgba(37,99,235,0.25)",
              }}
            />

            <div className="space-y-0">
              {prozess.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimatedSection key={item.step} delay={i * 0.1}>
                    {/* Mobile */}
                    <div className="md:hidden flex items-start gap-5 pb-8 last:pb-0">
                      <div className="relative shrink-0 z-10 mt-1">
                        <div className="absolute inset-0 rounded-full bg-[#2563EB]/15 blur-lg scale-[2]" />
                        <div
                          className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, #0D1F3C 0%, #08111E 100%)",
                            border: "1.5px solid rgba(37,99,235,0.6)",
                            boxShadow: "0 0 16px rgba(37,99,235,0.4)",
                          }}
                        >
                          <span className="text-white font-black text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      <div
                        className="flex-1 rounded-2xl p-px"
                        style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0.04) 100%)" }}
                      >
                        <div className="bg-[#08111E] rounded-2xl p-5">
                          <h3 className="text-white font-bold text-base mb-1.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                          <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>

                    {/* Desktop: abwechselnd links/rechts */}
                    <div className="hidden md:grid grid-cols-[1fr_80px_1fr] items-center pb-8 last:pb-0">
                      <div className={`flex justify-end pr-8 ${!isLeft ? "opacity-0 pointer-events-none" : ""}`}>
                        {isLeft && (
                          <div
                            className="w-full max-w-[340px] rounded-2xl p-px"
                            style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.3) 0%, rgba(37,99,235,0.05) 100%)" }}
                          >
                            <div className="bg-[#08111E] rounded-2xl p-6">
                              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                              <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex justify-center items-center relative z-10">
                        <div className="absolute w-16 h-16 rounded-full bg-[#2563EB]/10 blur-xl" />
                        <div
                          className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, #0D1F3C 0%, #080F1E 100%)",
                            border: "2px solid rgba(37,99,235,0.7)",
                            boxShadow: "0 0 24px rgba(37,99,235,0.5)",
                          }}
                        >
                          <span className="text-white font-black text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      <div className={`flex justify-start pl-8 ${isLeft ? "opacity-0 pointer-events-none" : ""}`}>
                        {!isLeft && (
                          <div
                            className="w-full max-w-[340px] rounded-2xl p-px"
                            style={{ background: "linear-gradient(225deg, rgba(37,99,235,0.3) 0%, rgba(37,99,235,0.05) 100%)" }}
                          >
                            <div className="bg-[#08111E] rounded-2xl p-6">
                              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                              <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
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

      {/* ══════════════════════════════════════════════════════════════
          8. FÜR WEN
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" aria-labelledby="fuerwen-heading">
        <div className="absolute left-1/4 top-0 w-[400px] h-[400px] bg-[#2563EB]/05 rounded-full blur-[120px] pointer-events-none" />
        <div className="page-container relative">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-[0.22em] mb-4">Zielgruppe</span>
              <h2
                id="fuerwen-heading"
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Für welche Unternehmen<br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                  ist das Angebot geeignet?
                </span>
              </h2>
              <p className="mt-4 text-[#94A3B8] text-base max-w-lg mx-auto leading-relaxed">
                Unser Schwerpunkt liegt auf B2B — aber grundsätzlich helfen wir jedem Unternehmen,
                das professionell im Web auftreten will.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {zielgruppen.map((z, i) => (
              <AnimatedSection key={z.title} delay={i * 0.08}>
                <div
                  className="flex gap-5 p-6 rounded-2xl h-full"
                  style={{
                    background: z.highlight
                      ? "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(15,23,42,0.5) 100%)"
                      : "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    border: z.highlight
                      ? "1px solid rgba(37,99,235,0.22)"
                      : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-[#60A5FA]"
                    style={{
                      background: z.highlight ? "rgba(37,99,235,0.15)" : "rgba(255,255,255,0.05)",
                      border: z.highlight ? "1px solid rgba(37,99,235,0.25)" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {z.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {z.title}
                      {z.highlight && (
                        <span className="ml-2 text-[10px] font-bold text-[#60A5FA] bg-[#2563EB]/15 border border-[#2563EB]/25 rounded-full px-2 py-0.5 uppercase tracking-wider">
                          Schwerpunkt
                        </span>
                      )}
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{z.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════
          9. FAQ
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" aria-labelledby="faq-heading">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#2563EB]/04 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-[0.22em] mb-4">FAQ</span>
              <h2
                id="faq-heading"
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Häufige Fragen
              </h2>
              <p className="mt-4 text-[#94A3B8] text-base leading-relaxed">
                Antworten auf die Fragen, die wir am häufigsten hören.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div
              className="rounded-2xl overflow-hidden divide-y"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                divideColor: "rgba(255,255,255,0.07)",
              }}
            >
              {faq.map((item, i) => (
                <details key={i} className="group">
                  <summary
                    className="flex items-center justify-between gap-4 px-7 py-5 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden hover:bg-white/[0.02] transition-colors duration-150"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <h3 className="text-white font-semibold text-base leading-snug" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {item.frage}
                    </h3>
                    <svg
                      width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="px-7 py-5 bg-white/[0.015]">
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{item.antwort}</p>
                  </div>
                </details>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════
          10. FINAL CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2563EB]/08 rounded-full blur-[120px] pointer-events-none" />
        <div className="page-container relative">
          <div
            className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(15,23,42,0.5) 60%, rgba(29,78,216,0.08) 100%)",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#2563EB]/07 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative">
              <AnimatedSection>
                <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-4">
                  Nächster Schritt
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h2
                  id="cta-heading"
                  className="text-4xl md:text-5xl font-bold text-white"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Lassen Sie Ihre Website<br />analysieren — kostenlos
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-5 text-[#94A3B8] text-lg max-w-xl mx-auto leading-relaxed">
                  Wir schauen uns Ihre aktuelle Website an und zeigen Ihnen konkret, was fehlt
                  und wie eine neue Website mehr Anfragen für Ihr Unternehmen generiert.
                  Unverbindlich, ohne Kosten.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-9 flex justify-center gap-4 flex-wrap">
                  <Link
                    href="/anfragen"
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] text-base"
                  >
                    Demo anfordern — kostenlos
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </Link>
                  <Link
                    href="/termin"
                    className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold px-8 py-4 rounded-full border border-[#94A3B8]/15 transition-all duration-200 text-base"
                  >
                    Gespräch buchen
                  </Link>
                </div>
                <p className="mt-4 text-[#94A3B8]/60 text-sm">
                  Webdesign Stuttgart · Für B2B, Maschinenbau & alle Unternehmen
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
