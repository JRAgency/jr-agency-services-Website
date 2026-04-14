import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LeistungenCard from "@/components/ui/LeistungenCard";
import { FaqAccordion, FaqAccordionItem, FaqAccordionTrigger, FaqAccordionContent } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Branding – JR Agency Services",
  description:
    "Einzigartige Markenidentitäten die in Erinnerung bleiben. Logo-Design, Corporate Identity, Visitenkarten und mehr.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "50+", label: "Marken gestaltet" },
  { value: "100%", label: "Individuell & einzigartig" },
  { value: "5+", label: "Konzeptvarianten" },
  { value: "∞", label: "Revisionen bis es passt" },
];

const probleme = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: "Kein Wiedererkennungswert",
    desc: "Ihr Logo ist austauschbar, Ihre Farben willkürlich — Kunden erinnern sich nicht an Sie, weil Ihre Marke keinen bleibenden Eindruck hinterlässt.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: "Unprofessioneller erster Eindruck",
    desc: "Ein schlechtes Logo oder inkonsistenter Auftritt kostet Sie Kunden noch bevor sie mit Ihnen gesprochen haben. Vertrauen entsteht über Optik.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Inkonsistentes Erscheinungsbild",
    desc: "Website, Social Media, Visitenkarten — überall sieht alles anders aus. Ohne einheitliche Markenidentität wirkt Ihr Unternehmen unorganisiert.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/>
      </svg>
    ),
    title: "Veraltetes Branding",
    desc: "Ein Design aus 2010 signalisiert: hier ist nichts Neues passiert. Kunden vergleichen Sie mit Wettbewerbern — modernes Branding gibt den Ausschlag.",
  },
];

const loesungPunkte = [
  {
    t: "Mehrere Konzeptvarianten",
    d: "Sie wählen nicht aus einer einzigen Idee — Sie erhalten verschiedene vollständig ausgearbeitete Richtungen.",
  },
  {
    t: "Vollständige Corporate Identity",
    d: "Logo, Farben, Typografie, Layouts — alles aufeinander abgestimmt für ein konsistentes Erscheinungsbild.",
  },
  {
    t: "Brand Guidelines inklusive",
    d: "Klare Regeln für den Einsatz Ihrer Marke — damit intern wie extern immer alles einheitlich wirkt.",
  },
  {
    t: "Alle Datei-Formate geliefert",
    d: "SVG, PNG, PDF, AI — druckfertig und digital. Für jede Anwendung das richtige Format, sofort einsatzbereit.",
  },
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

const zielgruppen = [
  {
    title: "Gründer & Selbstständige",
    desc: "Sie starten neu und wollen von Anfang an professionell wirken. Wir bauen Ihre Marke von Grund auf — mit Strategie, nicht mit Bauchgefühl.",
    highlight: true,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  },
  {
    title: "Unternehmen mit veraltetem Design",
    desc: "Ihr Auftritt passt nicht mehr zur Qualität Ihrer Leistung. Wir modernisieren Ihre Marke — damit der erste Eindruck dem entspricht, was Sie wirklich leisten.",
    highlight: true,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/></svg>,
  },
  {
    title: "Wachsende Unternehmen",
    desc: "Sie expandieren und brauchen ein Branding, das skaliert. Mit klaren Brand Guidelines bleibt Ihre Marke überall konsistent — intern wie extern.",
    highlight: false,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  },
  {
    title: "Alle weiteren Unternehmen",
    desc: "Gastronomie, Handwerk, Dienstleister, E-Commerce — wer professionell wahrgenommen werden will und Kunden mit einem starken ersten Eindruck überzeugen möchte.",
    highlight: false,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
];

const faq = [
  {
    frage: "Wie viele Konzepte bekomme ich?",
    antwort: "In der Regel erhalten Sie 2–3 vollständig ausgearbeitete Logokonzepte — jedes mit eigener Begründung und Variantenübersicht. So haben Sie eine echte Auswahl und können eine fundierte Entscheidung treffen, keine Münze werfen.",
  },
  {
    frage: "Was muss ich selbst liefern?",
    antwort: "Zu Beginn führen wir ein ausführliches Briefing-Gespräch. Wir brauchen von Ihnen: eine Beschreibung Ihres Unternehmens, Ihrer Zielgruppe, Wettbewerber und eventuell Referenzen die Ihnen gefallen. Den Rest übernehmen wir vollständig.",
  },
  {
    frage: "Wie lange dauert ein Branding-Projekt?",
    antwort: "Von Briefing bis zur finalen Übergabe dauert es typischerweise 2–4 Wochen. Der genaue Zeitrahmen hängt vom Umfang des Projekts und der Feedbackgeschwindigkeit ab. Expressprojekte sind auf Anfrage möglich.",
  },
  {
    frage: "Wie viele Änderungen sind inklusive?",
    antwort: "Unbegrenzte Revisionen bis Sie zufrieden sind. Wir arbeiten so lange, bis Ihre Marke genau das widerspiegelt, was Sie sich vorstellen — ohne versteckte Extrakosten für Korrekturrunden.",
  },
  {
    frage: "Was bekomme ich am Ende geliefert?",
    antwort: "Sie erhalten alle Datei-Formate (SVG, PNG, PDF, AI), helle und dunkle Varianten, Ihre vollständige Farbpalette mit Hex-Codes, die gewählte Typografie, Brand Guidelines als Dokument und Anwendungsbeispiele. Alles was Sie brauchen um sofort loszulegen.",
  },
];

// ─── Divider ─────────────────────────────────────────────────────────────────

function SectionDivider() {
  return (
    <div className="relative h-px mx-auto max-w-4xl px-6">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(21,128,61,0.25) 30%, rgba(74,222,128,0.35) 50%, rgba(21,128,61,0.25) 70%, transparent 100%)" }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-[3px] w-[6px] h-[6px] rounded-full"
        style={{ background: "rgba(74,222,128,0.55)", boxShadow: "0 0 8px 2px rgba(21,128,61,0.45)" }}
      />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BrandingPage() {
  return (
    <div className="bg-[#070C18]">

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20" aria-label="Hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[520px] h-[520px] bg-[#15803D]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 left-[10%] w-80 h-80 bg-[#C9A96E]/05 rounded-full blur-[110px]" />
        </div>
        <div className="page-container py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-block text-[#86EFAC] text-sm font-semibold uppercase tracking-widest mb-4">
                  Branding & Corporate Identity
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h1
                  className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Branding —<br />
                  <span className="bg-gradient-to-r from-[#15803D] to-[#86EFAC] bg-clip-text text-transparent">
                    Ihre Marke
                  </span>{" "}
                  die bleibt.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-lg">
                  Wir erschaffen Markenidentitäten die Ihre Persönlichkeit
                  widerspiegeln und Ihre Zielgruppe ansprechen. Vom ersten
                  Konzept bis zur fertigen, einsatzbereiten Marke.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-9 flex gap-4 flex-wrap">
                  <Link
                    href="/anfragen/branding"
                    className="inline-flex items-center gap-2 bg-[#15803D] hover:bg-[#14532D] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_32px_rgba(21,128,61,0.5)] text-base"
                  >
                    Kostenloses Marken-Briefing
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </Link>
                  <Link
                    href="#leistungen"
                    className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold px-8 py-4 rounded-full border border-white/10 transition-all duration-200 text-base"
                  >
                    Leistungen ansehen
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="mt-6 text-white/40 text-sm">
                  <span className="text-white font-semibold">50+ Marken</span> vertrauen bereits auf unser Branding
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} direction="right">
              <div className="relative flex justify-center items-center">
                <div className="absolute -inset-8 bg-gradient-to-br from-[#15803D]/15 via-transparent to-[#7C3AED]/10 rounded-full blur-3xl" />
                <Image
                  src="/images/branding/branding-icon-3d.png"
                  alt="Branding & Logo Design"
                  width={480}
                  height={480}
                  className="relative drop-shadow-2xl w-full max-w-[480px]"
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
              background: "linear-gradient(135deg, rgba(21,128,61,0.08) 0%, rgba(15,23,42,0.5) 100%)",
              border: "1px solid rgba(21,128,61,0.14)",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <AnimatedSection key={s.label} delay={i * 0.07}>
                  <div className="text-center">
                    <p className="text-4xl font-extrabold text-white" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{s.value}</p>
                    <p className="text-white/60 text-sm mt-1">{s.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════
          2. PROBLEME
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
                Kostet Ihr Branding Sie{" "}
                <span className="bg-gradient-to-r from-[#F87171] to-[#FBBF24] bg-clip-text text-transparent">Kunden statt welche zu gewinnen?</span>
              </h2>
              <p className="mt-5 text-white/60 text-base max-w-lg mx-auto leading-relaxed">
                Ein schwaches Markenauftritt entscheidet — oft bevor ein einziges Wort gewechselt wurde. Kunden urteilen in Sekunden.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {probleme.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div
                  className="flex gap-5 p-6 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(239,68,68,0.15)",
                  }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[#F87171]"
                    style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{p.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
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
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#15803D]/06 rounded-full blur-[130px] pointer-events-none" />
        <div className="page-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <div className="relative flex justify-center">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#15803D]/15 to-[#7C3AED]/10 rounded-3xl blur-2xl" />
                <Image
                  src="/images/branding/branding-colors.png"
                  alt="Branding Farbsystem & Corporate Identity"
                  width={600}
                  height={440}
                  className="relative w-full rounded-2xl drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </AnimatedSection>
            <div>
              <AnimatedSection delay={0.05}>
                <span className="inline-block text-[#86EFAC] text-sm font-semibold uppercase tracking-widest mb-3">
                  Unser Ansatz
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2
                  id="loesung-heading"
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Branding das<br />
                  <span className="bg-gradient-to-r from-[#15803D] to-[#86EFAC] bg-clip-text text-transparent">in Erinnerung bleibt</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="mt-5 text-white/60 text-base leading-relaxed">
                  Kein generisches Design, kein Template-Logo. Wir entwickeln eine Markenidentität
                  die zu Ihrem Unternehmen passt — und die Ihre Kunden sofort wiedererkennen.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="mt-8 space-y-4">
                  {loesungPunkte.map((item) => (
                    <div key={item.t} className="flex gap-4">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#15803D]/15 border border-[#15803D]/30 flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3.2 5.8L6.5 2.2" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-white font-semibold text-sm">{item.t}</p>
                        <p className="text-white/60 text-sm mt-0.5 leading-relaxed">{item.d}</p>
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
          4. CTA / ANGEBOT
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" aria-labelledby="angebot-heading">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(21,128,61,0.07) 0%, transparent 70%)" }} />
        <div className="page-container relative">
          <div
            className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(21,128,61,0.1) 0%, rgba(8,17,30,0.9) 60%)",
              border: "1px solid rgba(21,128,61,0.2)",
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#15803D]/08 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedSection>
                  <span className="inline-flex items-center gap-2 text-[#86EFAC] text-xs font-bold uppercase tracking-[0.22em] mb-4">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/></svg>
                    Unser stärkstes Angebot
                  </span>
                </AnimatedSection>
                <AnimatedSection delay={0.05}>
                  <h2
                    id="angebot-heading"
                    className="text-4xl md:text-5xl font-bold text-white leading-tight"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Kostenloses Marken-Briefing —<br />
                    <span className="bg-gradient-to-r from-[#15803D] to-[#86EFAC] bg-clip-text text-transparent">
                      unverbindlich & konkret
                    </span>
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <p className="mt-5 text-white/60 text-base leading-relaxed">
                    In 30 Minuten sprechen wir über Ihre Marke, Ihre Ziele und Ihre Zielgruppe.
                    Sie erhalten erste konkrete Einschätzungen — kostenlos, ohne Vertrag, ohne Verpflichtung.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.15}>
                  <Link
                    href="/anfragen/branding"
                    className="mt-8 inline-flex items-center gap-2 bg-[#15803D] hover:bg-[#14532D] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(21,128,61,0.55)] text-base"
                  >
                    Jetzt Briefing anfragen — kostenlos
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </Link>
                  <p className="mt-3 text-white/40 text-xs">
                    Kein Risiko · Keine Vertragsbindung · Sofortige Antwort
                  </p>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={0.15} direction="right">
                <div className="space-y-4">
                  {[
                    { n: "01", t: "Marken-Analyse", d: "Wir schauen uns Ihren aktuellen Auftritt an und identifizieren konkretes Optimierungspotenzial." },
                    { n: "02", t: "Richtungs-Empfehlung", d: "Sie erhalten klare Empfehlungen — welcher Stil, welche Farben, welche Positionierung für Ihre Zielgruppe." },
                    { n: "03", t: "Kein Risiko", d: "Das Gespräch ist vollständig kostenlos. Entscheiden Sie danach in aller Ruhe." },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className="flex gap-4 p-5 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div className="shrink-0 w-9 h-9 rounded-xl bg-[#15803D]/20 border border-[#15803D]/30 flex items-center justify-center">
                        <span className="text-[#4ADE80] font-bold text-xs">{item.n}</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm mb-1">{item.t}</p>
                        <p className="text-white/60 text-sm leading-relaxed">{item.d}</p>
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
      <section id="leistungen" className="py-28 relative overflow-hidden" aria-labelledby="leistungen-heading">
        <div className="absolute right-1/4 top-0 w-[400px] h-[400px] bg-[#15803D]/05 rounded-full blur-[120px] pointer-events-none" />
        <div className="page-container relative">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#15803D] text-xs font-bold uppercase tracking-[0.22em] mb-4">Was wir bieten</span>
              <h2
                id="leistungen-heading"
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Unsere Branding-Leistungen
              </h2>
              <p className="mt-4 text-white/60 text-base max-w-lg mx-auto leading-relaxed">
                Alles aus einer Hand — von der ersten Idee bis zur fertigen Markenidentität.
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
          6. INBEGRIFFEN
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" aria-labelledby="inbegriffen-heading">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-block text-[#15803D] text-xs font-bold uppercase tracking-[0.22em] mb-4">Im Lieferumfang</span>
                <h2
                  id="inbegriffen-heading"
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Alles was Sie für Ihre{" "}
                  <span className="bg-gradient-to-r from-[#15803D] to-[#86EFAC] bg-clip-text text-transparent">
                    neue Marke brauchen
                  </span>
                </h2>
                <p className="mt-5 text-white/60 text-base leading-relaxed">
                  Kein Nachkaufen, kein versteckter Aufpreis. Sie erhalten von Anfang an alles
                  was Sie brauchen um Ihre Marke sofort einzusetzen.
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inbegriffen.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(21,128,61,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                      border: "1px solid rgba(21,128,61,0.12)",
                    }}
                  >
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#15803D]/15 border border-[#15803D]/30 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.2 2.2 3.8-4.2" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════
          7. PROZESS
      ══════════════════════════════════════════════════════════════ */}
      <section id="prozess" className="py-28 relative overflow-hidden" aria-labelledby="prozess-heading">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[800px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 400px 100% at 50% 50%, rgba(21,128,61,0.055) 0%, transparent 70%)" }}
        />
        <div className="max-w-5xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-24">
              <span className="inline-block text-[#15803D] text-xs font-bold uppercase tracking-[0.22em] mb-5">Unser Ablauf</span>
              <h2 id="prozess-heading" className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                So entsteht{" "}
                <span className="bg-gradient-to-r from-[#15803D] via-[#4ADE80] to-[#86EFAC] bg-clip-text text-transparent">Ihre Marke</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
                Von der ersten Idee bis zur fertigen Markenidentität — transparent, strukturiert und ohne Überraschungen.
              </p>
            </div>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(21,128,61,0.9) 6%, rgba(74,222,128,0.55) 40%, rgba(21,128,61,0.55) 60%, rgba(74,222,128,0.3) 94%, transparent 100%)", boxShadow: "0 0 16px 2px rgba(21,128,61,0.3), 0 0 40px 4px rgba(21,128,61,0.1)" }} />
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-[24px] rounded-full pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(21,128,61,0.12) 10%, rgba(21,128,61,0.07) 90%, transparent)", filter: "blur(8px)" }} />
            <div className="lg:hidden absolute left-[27px] top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(21,128,61,0.85) 5%, rgba(21,128,61,0.4) 95%, transparent)", boxShadow: "0 0 10px rgba(21,128,61,0.3)" }} />
            <div className="space-y-0">
              {prozess.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimatedSection key={item.step} delay={i * 0.13}>
                    {/* Mobile */}
                    <div className="lg:hidden flex items-start gap-5 pb-10 last:pb-0">
                      <div className="relative shrink-0 z-10 mt-1">
                        <div className="absolute inset-0 rounded-full bg-[#15803D]/20 blur-lg scale-[2.2]" />
                        <div className="absolute inset-[-5px] rounded-full border border-[#15803D]/15" />
                        <div className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #0D1F3C 0%, #08111E 100%)", border: "1.5px solid rgba(21,128,61,0.65)", boxShadow: "0 0 20px rgba(21,128,61,0.45), inset 0 0 12px rgba(21,128,61,0.08)" }}>
                          <span className="text-white font-black text-base" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1 rounded-2xl p-px" style={{ background: "linear-gradient(135deg, rgba(21,128,61,0.28) 0%, rgba(21,128,61,0.05) 60%, rgba(74,222,128,0.1) 100%)" }}>
                        <div className="relative bg-[#08111E] rounded-2xl p-6 overflow-hidden">
                          <span className="absolute -bottom-5 -right-2 text-[5.5rem] font-black leading-none select-none pointer-events-none" style={{ fontFamily: "var(--font-plus-jakarta)", color: "rgba(21,128,61,0.06)" }}>{item.step}</span>
                          <h3 className="text-white font-bold text-lg mb-2.5 relative" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                          <p className="text-white/60 text-sm leading-relaxed mb-5 relative">{item.desc}</p>
                          <div className="relative border-t border-white/[0.05] pt-4">
                            <ul className="space-y-2">
                              {item.deliverables.map((d) => (
                                <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#15803D]"><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.35" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
                          <div className="relative w-full max-w-[360px] rounded-2xl p-px" style={{ background: "linear-gradient(135deg, rgba(21,128,61,0.35) 0%, rgba(21,128,61,0.06) 60%, rgba(74,222,128,0.12) 100%)" }}>
                            <div className="relative bg-[#08111E] rounded-2xl p-7 overflow-hidden">
                              <span className="absolute -bottom-6 -right-1 text-[8rem] font-black leading-none select-none pointer-events-none" style={{ fontFamily: "var(--font-plus-jakarta)", color: "rgba(21,128,61,0.065)" }}>{item.step}</span>
                              <div className="relative">
                                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="border-t border-white/[0.05] pt-5">
                                  <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.18em] mb-3">Sie erhalten</p>
                                  <ul className="space-y-2">
                                    {item.deliverables.map((d) => (
                                      <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#15803D]"><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.35" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        {d}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex justify-center items-center relative z-10">
                        <div className="absolute w-16 h-16 rounded-full bg-[#15803D]/10 blur-xl" />
                        <div className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #0D1F3C 0%, #080F1E 100%)", border: "2px solid rgba(21,128,61,0.7)", boxShadow: "0 0 24px rgba(21,128,61,0.5)" }}>
                          <span className="text-white font-black text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      <div className={`flex justify-start pl-8 ${!isLeft ? "" : "opacity-0 pointer-events-none"}`}>
                        {!isLeft && (
                          <div className="relative w-full max-w-[360px] rounded-2xl p-px" style={{ background: "linear-gradient(225deg, rgba(21,128,61,0.35) 0%, rgba(21,128,61,0.06) 60%, rgba(74,222,128,0.12) 100%)" }}>
                            <div className="relative bg-[#08111E] rounded-2xl p-7 overflow-hidden">
                              <span className="absolute -bottom-6 -right-1 text-[8rem] font-black leading-none select-none pointer-events-none" style={{ fontFamily: "var(--font-plus-jakarta)", color: "rgba(21,128,61,0.065)" }}>{item.step}</span>
                              <div className="relative">
                                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="border-t border-white/[0.05] pt-5">
                                  <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.18em] mb-3">Sie erhalten</p>
                                  <ul className="space-y-2">
                                    {item.deliverables.map((d) => (
                                      <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#15803D]"><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.35" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        {d}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
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
          8. ZIELGRUPPE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" aria-labelledby="zielgruppe-heading">
        <div className="absolute left-1/4 top-0 w-[400px] h-[400px] bg-[#15803D]/05 rounded-full blur-[120px] pointer-events-none" />
        <div className="page-container relative">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#15803D] text-xs font-bold uppercase tracking-[0.22em] mb-4">Zielgruppe</span>
              <h2
                id="zielgruppe-heading"
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Für welche Unternehmen<br />
                <span className="bg-gradient-to-r from-[#15803D] to-[#86EFAC] bg-clip-text text-transparent">
                  ist professionelles Branding geeignet?
                </span>
              </h2>
              <p className="mt-4 text-white/60 text-base max-w-lg mx-auto leading-relaxed">
                Grundsätzlich für jedes Unternehmen — aber besonders für diese Gruppen ist eine starke Marke entscheidend.
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
                      ? "linear-gradient(135deg, rgba(21,128,61,0.1) 0%, rgba(15,23,42,0.5) 100%)"
                      : "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    border: z.highlight
                      ? "1px solid rgba(21,128,61,0.22)"
                      : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-[#4ADE80]"
                    style={{
                      background: z.highlight ? "rgba(21,128,61,0.15)" : "rgba(255,255,255,0.05)",
                      border: z.highlight ? "1px solid rgba(21,128,61,0.25)" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {z.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {z.title}
                      {z.highlight && (
                        <span className="ml-2 text-[10px] font-bold text-[#4ADE80] bg-[#15803D]/15 border border-[#15803D]/25 rounded-full px-2 py-0.5 uppercase tracking-wider">
                          Schwerpunkt
                        </span>
                      )}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{z.desc}</p>
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
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#15803D]/04 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#15803D] text-xs font-bold uppercase tracking-[0.22em] mb-4">FAQ</span>
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Häufige Fragen
              </h2>
              <p className="mt-4 text-white/60 text-base leading-relaxed">
                Antworten auf die Fragen, die wir am häufigsten hören.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              <FaqAccordion type="single" collapsible>
                {faq.map((item, i) => (
                  <FaqAccordionItem key={i} value={`faq-${i}`}>
                    <FaqAccordionTrigger question={item.frage} />
                    <FaqAccordionContent>{item.antwort}</FaqAccordionContent>
                  </FaqAccordionItem>
                ))}
              </FaqAccordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════
          10. FINAL CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" aria-label="Call to Action">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(21,128,61,0.08) 0%, transparent 70%)" }} />
        <div className="page-container relative text-center">
          <AnimatedSection>
            <span className="inline-block text-[#86EFAC] text-xs font-bold uppercase tracking-[0.22em] mb-4">Jetzt starten</span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Bereit für eine Marke die{" "}
              <span className="bg-gradient-to-r from-[#15803D] to-[#86EFAC] bg-clip-text text-transparent">
                in Erinnerung bleibt?
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Lassen Sie uns in einem kostenlosen Gespräch herausfinden wie wir Ihre Marke
              auf das nächste Level bringen — konkret, unverbindlich, ohne Risiko.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/anfragen/branding"
                className="inline-flex items-center gap-2 bg-[#15803D] hover:bg-[#14532D] text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(21,128,61,0.55)] text-base"
              >
                Kostenloses Marken-Briefing anfragen
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold px-10 py-4 rounded-full border border-white/10 transition-all duration-200 text-base"
              >
                Alle Leistungen ansehen
              </Link>
            </div>
            <p className="mt-6 text-white/40 text-sm">
              Kein Risiko · Keine Vertragsbindung · Antwort innerhalb von 24h
            </p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
