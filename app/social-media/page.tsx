import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LeistungenCard from "@/components/ui/LeistungenCard";

export const metadata: Metadata = {
  title: "Social Media Management – JR Agency Services",
  description:
    "Strategisches Social Media Management für Instagram, TikTok, Facebook & LinkedIn. Mehr Reichweite, mehr Engagement, mehr Kunden.",
};

const stats = [
  { value: "Ø +340%", label: "Follower-Wachstum" },
  { value: "30+", label: "Posts pro Monat" },
  { value: "3–5×", label: "Mehr Reichweite" },
  { value: "100%", label: "Transparentes Reporting" },
];

const plattformen = [
  {
    name: "Instagram",
    desc: "Feed, Stories, Reels — visuelle Inhalte die begeistern und Follower gewinnen.",
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
    desc: "Wir entwickeln einen maßgeschneiderten Content-Plan — abgestimmt auf Ihre Zielgruppe, Branche und Ziele. Kein Raten, sondern Daten.",
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
    desc: "Monatliche Reports mit allen wichtigen KPIs — Reichweite, Engagement, Follower-Wachstum und Conversions. Immer transparent.",
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

const inbegriffen = [
  "Individueller Contentplan pro Monat",
  "Professionell gestaltete Posts & Stories",
  "Reels / Kurzvideos (plattformspezifisch)",
  "Community Management & DM-Betreuung",
  "Algorithmisch optimierte Posting-Zeiten",
  "Hashtag-Recherche & -Strategie",
  "Monatliches Reporting & KPI-Analyse",
  "Regelmäßige Strategie-Abstimmung",
];

export default function SocialMediaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#070C18] pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/6 w-72 h-72 bg-[#7C3AED]/8 rounded-full blur-[100px]" />
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
                  Social{" "}
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                    Media
                  </span>
                  <br />
                  das wächst.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-6 text-[#94A3B8] text-lg leading-relaxed max-w-lg">
                  Wir übernehmen Ihre komplette Social-Media-Präsenz — von der
                  Strategie bis zum täglichen Management. Mehr Reichweite, mehr
                  Engagement, mehr Kunden.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-9 flex gap-4 flex-wrap">
                  <Link
                    href="/anfragen/social-media"
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_32px_rgba(37,99,235,0.5)] text-base"
                  >
                    Jetzt starten
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                  <Link
                    href="#leistungen"
                    className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold px-8 py-4 rounded-full border border-[#94A3B8]/15 transition-all duration-200 text-base"
                  >
                    Leistungen ansehen
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} direction="right">
              <div className="relative flex justify-center gap-5 items-end">
                <div className="absolute -inset-8 bg-gradient-to-br from-[#2563EB]/15 via-transparent to-[#7C3AED]/10 rounded-full blur-3xl" />
                <Image
                  src="/images/712shots_so.png"
                  alt="Social Media Management"
                  width={290}
                  height={580}
                  className="relative rounded-3xl drop-shadow-2xl"
                  priority
                />
                <Image
                  src="/images/678shots_so.png"
                  alt="Social Media Content"
                  width={290}
                  height={580}
                  className="relative rounded-3xl drop-shadow-2xl mb-10"
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

      {/* ── Plattformen ── */}
      <section className="py-32 bg-[#070C18]">
        <div className="page-container">
          <SectionHeading
            label="Unsere Plattformen"
            title="Überall wo Ihre Kunden sind"
            description="Wir managen Ihre Präsenz auf allen relevanten Plattformen — plattformspezifisch optimiert, nicht einfach kopiert."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plattformen.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <div className={`group relative bg-gradient-to-br ${p.gradient} bg-[#0B1220] border ${p.border} rounded-2xl p-7 hover:scale-[1.02] transition-all duration-300 h-full`}>
                  <div className={`w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5`}>
                    {p.icon}
                  </div>
                  <h3
                    className="text-white font-bold text-lg mb-2"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{p.desc}</p>
                  <div className={`mt-4 flex items-center gap-2`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                    <span className="text-white/40 text-xs">Aktiv verwaltet</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Was wir tun — Content Showcase ── */}
      <section className="py-28 bg-[#0D1526] border-y border-[#94A3B8]/10">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#2563EB]/15 to-[#7C3AED]/10 rounded-3xl blur-2xl" />
                <Image
                  src="/images/827shots_so.png"
                  alt="Social Media Content Erstellung"
                  width={600}
                  height={440}
                  className="relative w-full rounded-2xl drop-shadow-2xl"
                />
              </div>
            </AnimatedSection>
            <div>
              <AnimatedSection delay={0.05}>
                <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-3">
                  Was wir liefern
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Content der
                  <br />
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                    wirklich performt
                  </span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="mt-5 text-white text-base leading-relaxed">
                  Guter Social-Media-Content ist kein Zufall — er entsteht durch
                  Strategie, Kreativität und ein tiefes Verständnis der
                  Plattform-Algorithmen.
                </p>
                <p className="mt-4 text-white text-base leading-relaxed">
                  Wir kombinieren ansprechendes Design mit datengetriebenem
                  Vorgehen. Das Ergebnis: Posts die nicht nur schön aussehen,
                  sondern auch echte Reichweite und Engagement erzeugen.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    "Feed-Posts & Karussells",
                    "Stories & Highlights",
                    "Reels & Kurzvideos",
                    "Captions & Hashtags",
                    "Story-Designs",
                    "Profiloptimierung",
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
      <section id="leistungen" className="py-32 bg-[#070C18]">
        <div className="page-container">
          <SectionHeading
            label="Leistungen im Detail"
            title="Alles aus einer Hand"
            description="Vom ersten Post bis zum monatlichen Report — wir übernehmen alle Aufgaben rund um Ihre Social-Media-Kanäle."
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

      {/* ── Was ist immer inklusive ── */}
      <section className="py-28 bg-[#0D1526] border-y border-[#94A3B8]/10">
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
                    Paket inklusive
                  </span>{" "}ist
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-5 text-white text-base leading-relaxed max-w-md">
                  Keine halben Sachen — diese Leistungen sind bei jeder
                  Zusammenarbeit selbstverständlich dabei.
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
              <div className="relative flex justify-center">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#2563EB]/15 to-[#7C3AED]/10 rounded-full blur-3xl" />
                <Image
                  src="/images/M001T1427 I iPhone Mockup 19Jul25.png"
                  alt="Social Media App"
                  width={300}
                  height={600}
                  className="relative rounded-3xl drop-shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Prozess ── */}
      <section id="prozess" className="py-32 bg-[#070C18] relative overflow-hidden">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[800px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 400px 100% at 50% 50%, rgba(37,99,235,0.055) 0%, transparent 70%)" }}
        />
        <div className="max-w-5xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-24">
              <span className="inline-block text-[#2563EB] text-xs font-bold uppercase tracking-[0.22em] mb-5">Unser Ablauf</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                So arbeiten{" "}
                <span className="bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">wir zusammen</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto">
                Vom ersten Gespräch bis zum laufenden Betrieb — transparent, strukturiert und ohne Überraschungen.
              </p>
            </div>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(37,99,235,0.9) 6%, rgba(96,165,250,0.55) 40%, rgba(37,99,235,0.55) 60%, rgba(96,165,250,0.3) 94%, transparent 100%)", boxShadow: "0 0 16px 2px rgba(37,99,235,0.3), 0 0 40px 4px rgba(37,99,235,0.1)" }} />
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-[24px] rounded-full pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.12) 10%, rgba(37,99,235,0.07) 90%, transparent)", filter: "blur(8px)" }} />
            <div className="lg:hidden absolute left-[27px] top-[30px] bottom-[30px] w-[2px] rounded-full pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.85) 5%, rgba(37,99,235,0.4) 95%, transparent)", boxShadow: "0 0 10px rgba(37,99,235,0.3)" }} />
            <div className="space-y-0">
              {prozess.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimatedSection key={item.step} delay={i * 0.13}>
                    {/* Mobile */}
                    <div className="lg:hidden flex items-start gap-5 pb-10 last:pb-0">
                      <div className="relative shrink-0 z-10 mt-1">
                        <div className="absolute inset-0 rounded-full bg-[#2563EB]/20 blur-lg scale-[2.2]" />
                        <div className="absolute inset-[-5px] rounded-full border border-[#2563EB]/15" />
                        <div className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #0D1F3C 0%, #08111E 100%)", border: "1.5px solid rgba(37,99,235,0.65)", boxShadow: "0 0 20px rgba(37,99,235,0.45), inset 0 0 12px rgba(37,99,235,0.08)" }}>
                          <span className="text-white font-black text-base" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1 rounded-2xl p-px" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.28) 0%, rgba(37,99,235,0.05) 60%, rgba(96,165,250,0.1) 100%)" }}>
                        <div className="relative bg-[#08111E] rounded-2xl p-6 overflow-hidden">
                          <span className="absolute -bottom-5 -right-2 text-[5.5rem] font-black leading-none select-none pointer-events-none" style={{ fontFamily: "var(--font-plus-jakarta)", color: "rgba(37,99,235,0.06)" }}>{item.step}</span>
                          <h3 className="text-white font-bold text-lg mb-2.5 relative" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                          <p className="text-[#94A3B8] text-sm leading-relaxed mb-5 relative">{item.desc}</p>
                          <div className="relative border-t border-white/[0.05] pt-4">
                            <ul className="space-y-2">
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
                    </div>
                    {/* Desktop */}
                    <div className="hidden lg:grid grid-cols-[1fr_96px_1fr] items-center pb-10 last:pb-0">
                      <div className={`flex justify-end pr-8 ${isLeft ? "" : "opacity-0 pointer-events-none"}`}>
                        {isLeft && (
                          <div className="relative w-full max-w-[360px] rounded-2xl p-px" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.06) 60%, rgba(96,165,250,0.12) 100%)" }}>
                            <div className="relative bg-[#08111E] rounded-2xl p-7 overflow-hidden">
                              <span className="absolute -bottom-6 -right-1 text-[8rem] font-black leading-none select-none pointer-events-none" style={{ fontFamily: "var(--font-plus-jakarta)", color: "rgba(37,99,235,0.065)" }}>{item.step}</span>
                              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(37,99,235,0.07)" }} />
                              <div className="relative">
                                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="border-t border-white/[0.05] pt-5">
                                  <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.18em] mb-3">Sie erhalten</p>
                                  <ul className="space-y-2">
                                    {item.deliverables.map((d) => (
                                      <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#60A5FA]"><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.3" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        {d}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="absolute right-0 top-8 bottom-8 w-[2px] rounded-full" style={{ background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.35), transparent)" }} />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex justify-center items-center relative z-10">
                        <div className="absolute w-20 h-20 rounded-full bg-[#2563EB]/12 blur-2xl" />
                        <div className="absolute w-16 h-16 rounded-full border border-[#2563EB]/14" />
                        <div className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #0D1F3C 0%, #080F1E 100%)", border: "2px solid rgba(37,99,235,0.75)", boxShadow: "0 0 28px rgba(37,99,235,0.55), 0 0 60px rgba(37,99,235,0.18), inset 0 0 18px rgba(37,99,235,0.1)" }}>
                          <span className="text-white font-black text-[15px]" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.step}</span>
                        </div>
                      </div>
                      <div className={`flex justify-start pl-8 ${!isLeft ? "" : "opacity-0 pointer-events-none"}`}>
                        {!isLeft && (
                          <div className="relative w-full max-w-[360px] rounded-2xl p-px" style={{ background: "linear-gradient(225deg, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.06) 60%, rgba(96,165,250,0.12) 100%)" }}>
                            <div className="relative bg-[#08111E] rounded-2xl p-7 overflow-hidden">
                              <span className="absolute -bottom-6 -right-1 text-[8rem] font-black leading-none select-none pointer-events-none" style={{ fontFamily: "var(--font-plus-jakarta)", color: "rgba(37,99,235,0.065)" }}>{item.step}</span>
                              <div className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(37,99,235,0.07)" }} />
                              <div className="relative">
                                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="border-t border-white/[0.05] pt-5">
                                  <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.18em] mb-3">Sie erhalten</p>
                                  <ul className="space-y-2">
                                    {item.deliverables.map((d) => (
                                      <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#60A5FA]"><circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.3" /><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
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

      {/* ── Warum Social Media ── */}
      <section className="py-28 bg-[#0D1526] border-t border-[#94A3B8]/10">
        <div className="page-container">
          <SectionHeading
            label="Warum es wichtig ist"
            title="Social Media ist kein Trend — es ist Ihr Vertrieb"
            description="Über 4 Milliarden Menschen nutzen täglich Social Media. Ihre Kunden sind dort — die Frage ist nur, ob Sie auch da sind."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Sichtbarkeit aufbauen",
                desc: "Wer nicht sichtbar ist, existiert nicht. Eine konsistente Social-Media-Präsenz sorgt dafür, dass potenzielle Kunden Sie kennenlernen — bevor sie aktiv suchen.",
                stat: "4 Mrd.",
                statLabel: "Tägliche Nutzer weltweit",
              },
              {
                title: "Vertrauen schaffen",
                desc: "Echte Einblicke, Kundenstimmen und regelmäßiger Content bauen Vertrauen auf. Menschen kaufen von Menschen — nicht von anonymen Marken.",
                stat: "78%",
                statLabel: "Kaufentscheidungen durch Social Media beeinflusst",
              },
              {
                title: "Kunden gewinnen",
                desc: "Social Media ist einer der günstigsten und effektivsten Akquise-Kanäle. Mit der richtigen Strategie werden Follower zu Käufern.",
                stat: "3×",
                statLabel: "Mehr Leads gegenüber klassischer Werbung",
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
                    <p className="text-[#94A3B8]/60 text-xs mt-1">{item.statLabel}</p>
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
      <section className="py-28 bg-[#020408]">
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
                  Ihr Social Media
                  <br />in professionellen Händen
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-5 text-[#94A3B8] text-lg max-w-xl mx-auto leading-relaxed">
                  Wir übernehmen — Sie wachsen. Lassen Sie uns in einem
                  kostenlosen Erstgespräch herausfinden wie wir Ihre Kanäle
                  auf das nächste Level bringen.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="mt-9 flex justify-center gap-4 flex-wrap">
                  <Link
                    href="/anfragen/social-media"
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] text-base"
                  >
                    Kostenloses Erstgespräch
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                  <Link
                    href="/anfragen/social-media"
                    className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold px-8 py-4 rounded-full border border-[#94A3B8]/15 transition-all duration-200 text-base"
                  >
                    Anfrage senden
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
