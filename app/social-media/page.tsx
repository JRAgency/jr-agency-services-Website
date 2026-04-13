import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LeistungenCard from "@/components/ui/LeistungenCard";
import { FaqAccordion, FaqAccordionItem, FaqAccordionTrigger, FaqAccordionContent } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Social Media Management – JR Agency Services",
  description:
    "Professionelles Social Media Management für Instagram, TikTok, Facebook & LinkedIn. Strategisch, konsistent, messbar.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "Ø +340%", label: "Follower-Wachstum" },
  { value: "30+", label: "Posts pro Monat" },
  { value: "3–5×", label: "Mehr Reichweite" },
  { value: "100%", label: "Transparentes Reporting" },
];

const probleme = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: "Kein Wachstum trotz Posting",
    desc: "Sie posten regelmäßig — aber die Follower stagnieren, das Engagement bleibt aus und Anfragen kommen keine.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: "Kein Zeit für Beständigkeit",
    desc: "Social Media kostet täglich Stunden. Zwischen Meetings, Kundenprojekten und Alltag bleibt kaum Zeit für konsistente Beiträge.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Inkonsistenter Auftritt",
    desc: "Mal ein Foto, mal ein Zitat, mal gar nichts. Ohne klare Linie wirkt Ihr Profil unprofessionell — und Kunden springen ab.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
    title: "Keine messbaren Ergebnisse",
    desc: "Was bringt Social Media eigentlich? Ohne Strategie und Reporting ist Social Media ein Zeitfresser ohne klares Ergebnis.",
  },
];

const loesungPunkte = [
  {
    t: "Strategischer Contentplan",
    d: "Monatlicher Plan abgestimmt auf Ihre Ziele, Zielgruppe und Plattform-Algorithmen.",
  },
  {
    t: "Professionelle Content-Erstellung",
    d: "Grafiken, Texte, Reels und Stories — konsistent mit Ihrer Markenidentität.",
  },
  {
    t: "Community Management",
    d: "Kommentare, DMs und Interaktionen werden aktiv betreut. Echte Beziehungen entstehen.",
  },
  {
    t: "Monatliches Reporting",
    d: "Transparente KPI-Berichte mit konkreten Optimierungsmaßnahmen für den nächsten Monat.",
  },
];

const plattformen = [
  {
    name: "Instagram",
    desc: "Feed, Stories, Reels — visuell ansprechend und reichweitenstark.",
    gradient: "from-[#F58529]/20 via-[#DD2A7B]/20 to-[#8134AF]/20",
    border: "border-[#DD2A7B]/25",
    dot: "bg-[#DD2A7B]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#E1306C]">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    desc: "Kurzvideos & Trends — organische Reichweite durch viralen Content.",
    gradient: "from-[#010101]/40 via-[#69C9D0]/10 to-[#EE1D52]/15",
    border: "border-[#69C9D0]/20",
    dot: "bg-[#69C9D0]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    desc: "Community-Aufbau, bezahlte Ads und zielgruppengerechter Content.",
    gradient: "from-[#1877F2]/20 to-[#1877F2]/5",
    border: "border-[#1877F2]/25",
    dot: "bg-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#1877F2]">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    desc: "B2B-Positionierung, Thought Leadership und professionelles Employer Branding.",
    gradient: "from-[#0A66C2]/20 to-[#0A66C2]/5",
    border: "border-[#0A66C2]/25",
    dot: "bg-[#0A66C2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#0A66C2]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const leistungen = [
  {
    title: "Content-Strategie",
    desc: "Maßgeschneiderter Contentplan abgestimmt auf Ihre Zielgruppe, Branche und Ziele. Kein Raten, sondern Daten.",
    color: "#3B82F6",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  },
  {
    title: "Content-Erstellung",
    desc: "Professionelle Grafiken, Texte, Reels und Stories — visuell auf Ihre Marke abgestimmt, konsistent und ansprechend.",
    color: "#EC4899",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>,
  },
  {
    title: "Community Management",
    desc: "Kommentare, DMs und Interaktionen werden betreut. Wir bauen echte Beziehungen zu Ihrer Community auf.",
    color: "#14B8A6",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: "Posting & Scheduling",
    desc: "Algorithmisch optimierte Posting-Zeiten und automatisierte Veröffentlichung — Ihr Kanal läuft auch wenn Sie schlafen.",
    color: "#F59E0B",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    title: "Hashtag & SEO",
    desc: "Recherchierte Hashtag-Strategien und plattformspezifische SEO damit Ihre Posts auch gefunden werden.",
    color: "#8B5CF6",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/></svg>,
  },
  {
    title: "Analytics & Reporting",
    desc: "Monatliche Reports mit allen wichtigen KPIs — Reichweite, Engagement, Follower-Wachstum und Conversions.",
    color: "#10B981",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  },
];

const prozess = [
  {
    step: "01",
    title: "Onboarding & Analyse",
    desc: "Wir analysieren Ihre bisherigen Kanäle, Ihre Zielgruppe und Ihre Wettbewerber gründlich — und entwickeln daraus eine fundierte Ausgangsstrategie, die wirklich zu Ihnen passt.",
    deliverables: ["Kanal-Audit & Analyse", "Wettbewerbs-Recherche", "Strategie-Dokument"],
  },
  {
    step: "02",
    title: "Strategie & Contentplan",
    desc: "Ein detaillierter Monatsplan entsteht: Themen, Formate, Posting-Zeiten und Plattformen — alles abgestimmt, von Ihnen freigegeben, bevor ein einziger Post veröffentlicht wird.",
    deliverables: ["Monatlicher Contentplan", "Themen- & Formatauswahl", "Posting-Zeitplan"],
  },
  {
    step: "03",
    title: "Content-Produktion",
    desc: "Grafiken, Texte, Reels und Stories werden professionell produziert — visuell konsistent mit Ihrer Markenidentität und auf den Algorithmus der jeweiligen Plattform abgestimmt.",
    deliverables: ["Professionelle Grafiken & Texte", "Reels & Stories", "Markenkonsistentes Design"],
  },
  {
    step: "04",
    title: "Veröffentlichung & Management",
    desc: "Posts gehen zum algorithmisch optimalen Zeitpunkt live. Wir betreuen aktiv Kommentare, DMs und Interaktionen — Ihre Community ist in guten Händen.",
    deliverables: ["Termingerechte Veröffentlichung", "Community Management", "DM- & Kommentar-Betreuung"],
  },
  {
    step: "05",
    title: "Reporting & Optimierung",
    desc: "Monatlicher Report mit allen relevanten KPIs. Daraus leiten wir klare Optimierungsmaßnahmen ab — jeder Monat baut auf dem vorherigen auf.",
    deliverables: ["Monatlicher KPI-Report", "Performance-Analyse", "Optimierungsempfehlungen"],
  },
];

const zielgruppen = [
  {
    title: "Selbstständige & Unternehmer",
    desc: "Sie haben ein Unternehmen zu führen — keine Zeit für tägliches Posten, Content-Planung und Community-Pflege. Wir übernehmen das vollständig.",
    highlight: true,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  },
  {
    title: "Unternehmen mit stagnierenden Kanälen",
    desc: "Sie sind schon aktiv, aber das Wachstum stagniert. Wir bringen neue Strategie, frischen Content und messbares Wachstum.",
    highlight: true,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  },
  {
    title: "Neugründungen & Startups",
    desc: "Von Anfang an professionell auftreten. Wir bauen Ihre Social-Media-Präsenz von Grund auf — mit Strategie, nicht mit Bauchgefühl.",
    highlight: false,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  },
  {
    title: "Alle weiteren Unternehmen",
    desc: "Gastronomie, Dienstleister, E-Commerce, Handwerk — wer mehr Kunden über Social Media gewinnen will, ist bei uns richtig.",
    highlight: false,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
];

const faq = [
  {
    frage: "Wann sind erste Ergebnisse sichtbar?",
    antwort: "In den ersten 4–6 Wochen sehen Sie erste Verbesserungen in Reichweite und Engagement. Nachhaltiges Follower-Wachstum und messbare Anfragen entstehen typischerweise ab Monat 2–3. Social Media ist ein langfristiger Kanal — aber mit unserer Strategie deutlich schneller.",
  },
  {
    frage: "Was muss ich selbst liefern?",
    antwort: "Zu Beginn brauchen wir ein Briefing zu Ihrem Unternehmen, Ihren Zielen und Ihrer Marke. Danach übernehmen wir den Rest vollständig — inklusive Ideen, Design und Texten. Bei Bedarf liefern Sie Fotos oder Videos aus Ihrem Betrieb, die wir professionell aufbereiten.",
  },
  {
    frage: "Auf welchen Plattformen sind Sie aktiv?",
    antwort: "Wir managen Instagram, TikTok, Facebook und LinkedIn — jeweils plattformspezifisch optimiert. Sie entscheiden welche Kanäle für Ihre Zielgruppe relevant sind. Empfehlung geben wir gerne im Erstgespräch.",
  },
  {
    frage: "Wie lange laufen Verträge?",
    antwort: "Unsere Pakete laufen monatlich kündbar. Wir glauben daran, durch Ergebnisse zu überzeugen — nicht durch lange Vertragslaufzeiten. Für beste Ergebnisse empfehlen wir jedoch mindestens 3 Monate Zusammenarbeit.",
  },
  {
    frage: "Was unterscheidet Sie von anderen Agenturen?",
    antwort: "Wir kombinieren Strategie, Design und echtes Community Management aus einer Hand. Kein generischer Content, kein Outsourcing ins Ausland. Alle Inhalte entstehen von uns, auf Ihre Marke abgestimmt — mit transparentem Reporting damit Sie immer wissen was Ihr Geld bringt.",
  },
];

// ─── Divider ─────────────────────────────────────────────────────────────────

function SectionDivider() {
  return (
    <div className="relative h-px mx-auto max-w-4xl px-6">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(236,72,153,0.25) 30%, rgba(244,114,182,0.35) 50%, rgba(236,72,153,0.25) 70%, transparent 100%)" }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-[3px] w-[6px] h-[6px] rounded-full"
        style={{ background: "rgba(244,114,182,0.55)", boxShadow: "0 0 8px 2px rgba(236,72,153,0.45)" }}
      />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SocialMediaPage() {
  return (
    <div className="bg-[#070C18]">

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20" aria-label="Hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[520px] h-[520px] bg-[#EC4899]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 left-[10%] w-80 h-80 bg-[#7C3AED]/07 rounded-full blur-[110px]" />
        </div>
        <div className="page-container py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-block text-[#FBCFE8] text-sm font-semibold uppercase tracking-widest mb-4">
                  Social Media Management
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <h1
                  className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Social Media<br />
                  <span className="bg-gradient-to-r from-[#EC4899] to-[#FBCFE8] bg-clip-text text-transparent">
                    Mehr Reichweite
                  </span>{" "}
                  für Ihr Unternehmen
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-lg">
                  Wir übernehmen Ihre komplette Social-Media-Präsenz — von der Strategie
                  bis zum täglichen Management. Mehr Reichweite, mehr Engagement, mehr Kunden.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-9 flex gap-4 flex-wrap">
                  <Link
                    href="/anfragen/social-media"
                    className="inline-flex items-center gap-2 bg-[#EC4899] hover:bg-[#BE185D] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_32px_rgba(236,72,153,0.5)] text-base"
                  >
                    Kostenloses Erstgespräch
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
                  <span className="text-white font-semibold">30+ Unternehmen</span> vertrauen bereits auf unser Social Media Management
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} direction="right">
              <div className="relative flex justify-center">
                <div className="absolute -inset-8 bg-gradient-to-br from-[#EC4899]/15 via-transparent to-[#7C3AED]/10 rounded-full blur-3xl" />
                <Image
                  src="/images/social-media/social-instagram-showcase.png"
                  alt="Social Media Management"
                  width={700}
                  height={700}
                  className="relative drop-shadow-2xl w-full max-w-[700px]"
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
              background: "linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(15,23,42,0.5) 100%)",
              border: "1px solid rgba(236,72,153,0.14)",
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
                Kostet Social Media mehr{" "}
                <span className="bg-gradient-to-r from-[#F87171] to-[#FBBF24] bg-clip-text text-transparent">Zeit als Ergebnisse?</span>
              </h2>
              <p className="mt-5 text-white/60 text-base max-w-lg mx-auto leading-relaxed">
                Viele Unternehmen investieren täglich Zeit in Social Media — und sehen kaum Rücklauf. Das muss nicht so sein.
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
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#EC4899]/06 rounded-full blur-[130px] pointer-events-none" />
        <div className="page-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <div className="relative flex justify-center">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#EC4899]/15 to-[#7C3AED]/10 rounded-3xl blur-2xl" />
                <Image
                  src="/images/social-media/social-carousel-phones.png"
                  alt="Social Media Content Erstellung"
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
                <span className="inline-block text-[#FBCFE8] text-sm font-semibold uppercase tracking-widest mb-3">
                  Unser Ansatz
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2
                  id="loesung-heading"
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Social Media das<br />
                  <span className="bg-gradient-to-r from-[#EC4899] to-[#FBCFE8] bg-clip-text text-transparent">Ergebnisse liefert</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="mt-5 text-white/60 text-base leading-relaxed">
                  Kein generischer Content, kein Copy-Paste von anderen Kanälen. Wir entwickeln eine Strategie
                  die zu Ihrem Unternehmen passt — und setzen sie konsequent um.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="mt-8 space-y-4">
                  {loesungPunkte.map((item) => (
                    <div key={item.t} className="flex gap-4">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#EC4899]/15 border border-[#EC4899]/30 flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3.2 5.8L6.5 2.2" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(236,72,153,0.07) 0%, transparent 70%)" }} />
        <div className="page-container relative">
          <div
            className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(8,17,30,0.9) 60%)",
              border: "1px solid rgba(236,72,153,0.2)",
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#EC4899]/08 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedSection>
                  <span className="inline-flex items-center gap-2 text-[#FBCFE8] text-xs font-bold uppercase tracking-[0.22em] mb-4">
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
                    Kostenloses Erstgespräch —<br />
                    <span className="bg-gradient-to-r from-[#EC4899] to-[#FBCFE8] bg-clip-text text-transparent">
                      unverbindlich & konkret
                    </span>
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <p className="mt-5 text-white/60 text-base leading-relaxed">
                    In 30 Minuten analysieren wir Ihren aktuellen Social-Media-Auftritt und geben Ihnen konkrete,
                    sofort umsetzbare Empfehlungen — kostenlos, ohne Vertrag, ohne Verpflichtung.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.15}>
                  <Link
                    href="/anfragen/social-media"
                    className="mt-8 inline-flex items-center gap-2 bg-[#EC4899] hover:bg-[#BE185D] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(236,72,153,0.55)] text-base"
                  >
                    Jetzt Gespräch anfragen — kostenlos
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
                    { n: "01", t: "Kanal-Analyse", d: "Wir schauen uns Ihren aktuellen Auftritt an und identifizieren konkretes Verbesserungspotenzial." },
                    { n: "02", t: "Strategie-Empfehlung", d: "Sie erhalten klare Empfehlungen — welche Plattformen, welche Formate, welche Frequenz für Ihre Zielgruppe." },
                    { n: "03", t: "Kein Risiko", d: "Das Gespräch ist vollständig kostenlos. Entscheiden Sie danach in aller Ruhe." },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className="flex gap-4 p-5 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div className="shrink-0 w-9 h-9 rounded-xl bg-[#EC4899]/20 border border-[#EC4899]/30 flex items-center justify-center">
                        <span className="text-[#F472B6] font-bold text-xs">{item.n}</span>
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
        <div className="absolute right-1/4 top-0 w-[400px] h-[400px] bg-[#EC4899]/05 rounded-full blur-[120px] pointer-events-none" />
        <div className="page-container relative">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#EC4899] text-xs font-bold uppercase tracking-[0.22em] mb-4">Was wir bieten</span>
              <h2
                id="leistungen-heading"
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Unsere Social-Media-Leistungen
              </h2>
              <p className="mt-4 text-white/60 text-base max-w-lg mx-auto leading-relaxed">
                Alles aus einer Hand — von der Strategie bis zum monatlichen Report.
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
          6. PLATTFORMEN
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" aria-labelledby="plattformen-heading">
        <div className="page-container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#EC4899] text-xs font-bold uppercase tracking-[0.22em] mb-4">Überall präsent</span>
              <h2
                id="plattformen-heading"
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Überall wo Ihre Kunden sind
              </h2>
              <p className="mt-4 text-white/60 text-base max-w-lg mx-auto leading-relaxed">
                Wir managen Ihre Präsenz auf allen relevanten Plattformen — plattformspezifisch optimiert, nicht einfach kopiert.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plattformen.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <div className={`group relative bg-gradient-to-br ${p.gradient} border ${p.border} rounded-2xl p-7 hover:scale-[1.02] transition-all duration-300 h-full`}
                  style={{ background: undefined, backgroundColor: "rgba(11,18,32,0.8)" }}>
                  <div className={`bg-gradient-to-br ${p.gradient} absolute inset-0 rounded-2xl opacity-100`} />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5">
                      {p.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{p.name}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                      <span className="text-white/40 text-xs">Aktiv verwaltet</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
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
          style={{ background: "radial-gradient(ellipse 400px 100% at 50% 50%, rgba(236,72,153,0.055) 0%, transparent 70%)" }}
        />
        <div className="max-w-5xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-24">
              <span className="inline-block text-[#EC4899] text-xs font-bold uppercase tracking-[0.22em] mb-5">Unser Ablauf</span>
              <h2 id="prozess-heading" className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                So arbeiten{" "}
                <span className="bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FBCFE8] bg-clip-text text-transparent">wir zusammen</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
                Vom ersten Gespräch bis zum laufenden Betrieb — transparent, strukturiert und ohne Überraschungen.
              </p>
            </div>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(236,72,153,0.9) 6%, rgba(244,114,182,0.55) 40%, rgba(236,72,153,0.55) 60%, rgba(244,114,182,0.3) 94%, transparent 100%)", boxShadow: "0 0 16px 2px rgba(236,72,153,0.3), 0 0 40px 4px rgba(236,72,153,0.1)" }} />
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-[24px] rounded-full pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(236,72,153,0.12) 10%, rgba(236,72,153,0.07) 90%, transparent)", filter: "blur(8px)" }} />
            <div className="lg:hidden absolute left-[27px] top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(236,72,153,0.85) 5%, rgba(236,72,153,0.4) 95%, transparent)", boxShadow: "0 0 10px rgba(236,72,153,0.3)" }} />
            <div className="space-y-0">
              {prozess.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimatedSection key={item.step} delay={i * 0.13}>
                    {/* Mobile */}
                    <div className="lg:hidden flex items-start gap-5 pb-10 last:pb-0">
                      <div className="relative shrink-0 z-10 mt-1">
                        <div className="absolute inset-0 rounded-full bg-[#EC4899]/20 blur-lg scale-[2.2]" />
                        <div className="absolute inset-[-5px] rounded-full border border-[#EC4899]/15" />
                        <div className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #0D1F3C 0%, #08111E 100%)", border: "1.5px solid rgba(236,72,153,0.65)", boxShadow: "0 0 20px rgba(236,72,153,0.45), inset 0 0 12px rgba(236,72,153,0.08)" }}>
                          <span className="text-white font-black text-base" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1 rounded-2xl p-px" style={{ background: "linear-gradient(135deg, rgba(236,72,153,0.28) 0%, rgba(236,72,153,0.05) 60%, rgba(244,114,182,0.1) 100%)" }}>
                        <div className="relative bg-[#08111E] rounded-2xl p-6 overflow-hidden">
                          <span className="absolute -bottom-5 -right-2 text-[5.5rem] font-black leading-none select-none pointer-events-none" style={{ fontFamily: "var(--font-plus-jakarta)", color: "rgba(236,72,153,0.06)" }}>{item.step}</span>
                          <h3 className="text-white font-bold text-lg mb-2.5 relative" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                          <p className="text-white/60 text-sm leading-relaxed mb-5 relative">{item.desc}</p>
                          <div className="relative border-t border-white/[0.05] pt-4">
                            <ul className="space-y-2">
                              {item.deliverables.map((d) => (
                                <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#EC4899]"><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.35" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
                          <div className="relative w-full max-w-[360px] rounded-2xl p-px" style={{ background: "linear-gradient(135deg, rgba(236,72,153,0.35) 0%, rgba(236,72,153,0.06) 60%, rgba(244,114,182,0.12) 100%)" }}>
                            <div className="relative bg-[#08111E] rounded-2xl p-7 overflow-hidden">
                              <span className="absolute -bottom-6 -right-1 text-[8rem] font-black leading-none select-none pointer-events-none" style={{ fontFamily: "var(--font-plus-jakarta)", color: "rgba(236,72,153,0.065)" }}>{item.step}</span>
                              <div className="relative">
                                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="border-t border-white/[0.05] pt-5">
                                  <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.18em] mb-3">Sie erhalten</p>
                                  <ul className="space-y-2">
                                    {item.deliverables.map((d) => (
                                      <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#EC4899]"><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.35" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
                        <div className="absolute w-16 h-16 rounded-full bg-[#EC4899]/10 blur-xl" />
                        <div className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #0D1F3C 0%, #080F1E 100%)", border: "2px solid rgba(236,72,153,0.7)", boxShadow: "0 0 24px rgba(236,72,153,0.5)" }}>
                          <span className="text-white font-black text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      <div className={`flex justify-start pl-8 ${!isLeft ? "" : "opacity-0 pointer-events-none"}`}>
                        {!isLeft && (
                          <div className="relative w-full max-w-[360px] rounded-2xl p-px" style={{ background: "linear-gradient(225deg, rgba(236,72,153,0.35) 0%, rgba(236,72,153,0.06) 60%, rgba(244,114,182,0.12) 100%)" }}>
                            <div className="relative bg-[#08111E] rounded-2xl p-7 overflow-hidden">
                              <span className="absolute -bottom-6 -right-1 text-[8rem] font-black leading-none select-none pointer-events-none" style={{ fontFamily: "var(--font-plus-jakarta)", color: "rgba(236,72,153,0.065)" }}>{item.step}</span>
                              <div className="relative">
                                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="border-t border-white/[0.05] pt-5">
                                  <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.18em] mb-3">Sie erhalten</p>
                                  <ul className="space-y-2">
                                    {item.deliverables.map((d) => (
                                      <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#EC4899]"><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.35" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
        <div className="absolute left-1/4 top-0 w-[400px] h-[400px] bg-[#EC4899]/05 rounded-full blur-[120px] pointer-events-none" />
        <div className="page-container relative">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#EC4899] text-xs font-bold uppercase tracking-[0.22em] mb-4">Zielgruppe</span>
              <h2
                id="zielgruppe-heading"
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Für welche Unternehmen<br />
                <span className="bg-gradient-to-r from-[#EC4899] to-[#FBCFE8] bg-clip-text text-transparent">
                  ist Social Media Management geeignet?
                </span>
              </h2>
              <p className="mt-4 text-white/60 text-base max-w-lg mx-auto leading-relaxed">
                Grundsätzlich für jedes Unternehmen — aber besonders für diese Gruppen bringt es den größten Mehrwert.
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
                      ? "linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(15,23,42,0.5) 100%)"
                      : "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    border: z.highlight
                      ? "1px solid rgba(236,72,153,0.22)"
                      : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-[#F472B6]"
                    style={{
                      background: z.highlight ? "rgba(236,72,153,0.15)" : "rgba(255,255,255,0.05)",
                      border: z.highlight ? "1px solid rgba(236,72,153,0.25)" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {z.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {z.title}
                      {z.highlight && (
                        <span className="ml-2 text-[10px] font-bold text-[#F472B6] bg-[#EC4899]/15 border border-[#EC4899]/25 rounded-full px-2 py-0.5 uppercase tracking-wider">
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
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#EC4899]/04 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#EC4899] text-xs font-bold uppercase tracking-[0.22em] mb-4">FAQ</span>
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
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(236,72,153,0.08) 0%, transparent 70%)" }} />
        <div className="page-container relative text-center">
          <AnimatedSection>
            <span className="inline-block text-[#FBCFE8] text-xs font-bold uppercase tracking-[0.22em] mb-4">Jetzt starten</span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Bereit für mehr{" "}
              <span className="bg-gradient-to-r from-[#EC4899] to-[#FBCFE8] bg-clip-text text-transparent">
                Reichweite & Kunden?
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Lassen Sie uns in einem kostenlosen Gespräch herausfinden wie wir Ihren Social-Media-Auftritt
              auf das nächste Level bringen können.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/anfragen/social-media"
                className="inline-flex items-center gap-2 bg-[#EC4899] hover:bg-[#BE185D] text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] text-base"
              >
                Kostenloses Erstgespräch anfragen
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </Link>
              <Link
                href="/termin"
                className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold px-8 py-4 rounded-full border border-white/10 transition-all duration-200 text-base"
              >
                Termin buchen
              </Link>
            </div>
            <p className="mt-5 text-white/40 text-sm">Kein Risiko · Keine Vertragsbindung · Antwort in 24h</p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
