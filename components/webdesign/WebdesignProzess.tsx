'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const C = "#2563EB";
const CL = "#93C5FD";

// S-curve path — viewBox "0 0 1000 1000", preserveAspectRatio="none"
// Circles: left at x=40, right at x=960
// 5 rows each 200 units tall → circle centers at y=100,300,500,700,900
const PATH =
  "M 40 100 C 40 200 960 200 960 300 C 960 400 40 400 40 500 C 40 600 960 600 960 700 C 960 800 40 800 40 900";

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

function StepCircle({ step, i, inView }: { step: string; i: number; inView: boolean }) {
  return (
    <motion.div
      className="relative shrink-0 flex items-center justify-center"
      style={{ width: 64, height: 64, zIndex: 10 }}
      initial={{ scale: 0.4, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.55, delay: 0.15 + i * 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 rounded-full blur-xl scale-[2.4] pointer-events-none"
        style={{ background: `${C}20` }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ inset: -7, border: `1px solid ${C}1A` }} />
      <div
        className="relative w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #0D1F3C 0%, #080F1E 100%)",
          border: `2px solid ${C}C0`,
          boxShadow: `0 0 32px ${C}60, 0 0 70px ${C}1A, inset 0 0 20px ${C}0C`,
        }}
      >
        <span className="text-white font-black text-[15px]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}>
          {step}
        </span>
      </div>
    </motion.div>
  );
}

function StepCard({
  item, isLeft, i, inView,
}: {
  item: (typeof prozess)[0]; isLeft: boolean; i: number; inView: boolean;
}) {
  return (
    <motion.div
      className="group relative rounded-2xl p-[2px] transition-all duration-300 hover:-translate-y-[3px]"
      style={{
        background: `linear-gradient(${isLeft ? "135deg" : "225deg"}, ${C}40 0%, ${C}08 55%, ${CL}16 100%)`,
        cursor: "default",
      }}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.2 + i * 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* hover border brighten */}
      <div className="absolute inset-0 rounded-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(${isLeft ? "135deg" : "225deg"}, ${C}60 0%, ${C}18 55%, ${CL}28 100%)` }} />
      <div className="relative rounded-[14px] p-6 lg:p-7 overflow-hidden"
        style={{ background: "#070C18" }}>
        {/* Decorative step number */}
        <span className="absolute -bottom-5 select-none pointer-events-none font-black leading-none"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            fontSize: "7rem",
            color: `${C}09`,
            right: isLeft ? "0.5rem" : undefined,
            left: !isLeft ? "0.5rem" : undefined,
          }}>
          {item.step}
        </span>
        <div className="absolute w-28 h-28 rounded-full blur-3xl pointer-events-none"
          style={{ background: `${C}0A`, top: 0, right: isLeft ? 0 : undefined, left: !isLeft ? 0 : undefined }} />
        <div className="relative">
          <h3 className="text-white font-bold text-[17px] lg:text-[19px] mb-2.5"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            {item.title}
          </h3>
          <p className="text-[#64748B] text-sm leading-relaxed mb-4">{item.desc}</p>
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
            {item.deliverables.map((d) => (
              <span key={d} className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                style={{ background: `${C}14`, color: CL, border: `1px solid ${C}28` }}>
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WebdesignProzess() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  // Each row is 200px tall (5 rows × 200px = 1000px total for SVG viewBox)
  const ROW_H = 200;

  return (
    <section
      ref={ref}
      id="prozess"
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ background: "#020408" }}
    >
      {/* bg radial */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${C}05 0%, transparent 65%)` }} />

      <div className="page-container relative">
        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5"
            style={{ color: C }}>
            Wie wir arbeiten
          </span>
          <h2 className="font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.02em" }}>
            Von der Idee zum{" "}
            <span style={{ background: `linear-gradient(135deg, ${C} 0%, ${CL} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              fertigen Produkt.
            </span>
          </h2>
          <p className="text-[#64748B] text-[15px] leading-relaxed max-w-md mx-auto">
            Unser bewährter Prozess bringt Ihre Website strukturiert, termingerecht und ohne böse Überraschungen ans Ziel.
          </p>
        </motion.div>

        {/* ── Desktop S-Curve ── */}
        <div className="hidden lg:block relative">
          {prozess.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={item.step}
                className="relative flex items-center"
                style={{ height: ROW_H }}
              >
                {isLeft ? (
                  <>
                    {/* Circle far left */}
                    <div className="shrink-0">
                      <StepCircle step={item.step} i={i} inView={inView} />
                    </div>
                    {/* Card takes ~48% */}
                    <div className="ml-8 xl:ml-12" style={{ width: "48%" }}>
                      <StepCard item={item} isLeft={true} i={i} inView={inView} />
                    </div>
                    {/* rest is empty — S-curve space */}
                  </>
                ) : (
                  <>
                    {/* Empty left side */}
                    <div style={{ width: "48%" }} />
                    {/* Card */}
                    <div className="mr-8 xl:mr-12 ml-auto" style={{ width: "48%" }}>
                      <StepCard item={item} isLeft={false} i={i} inView={inView} />
                    </div>
                    {/* Circle far right */}
                    <div className="shrink-0">
                      <StepCircle step={item.step} i={i} inView={inView} />
                    </div>
                  </>
                )}
              </div>
            );
          })}

          {/* SVG overlay — drawn on top, covers exact rows */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
            aria-hidden="true"
          >
            <svg
              className="w-full h-full"
              viewBox={`0 0 1000 ${ROW_H * prozess.length}`}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="prozessPathGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={C} stopOpacity="0.75" />
                  <stop offset="50%" stopColor={CL} stopOpacity="0.55" />
                  <stop offset="100%" stopColor={C} stopOpacity="0.75" />
                </linearGradient>
              </defs>

              {/* Glow layer */}
              <motion.path
                d={PATH}
                stroke={C}
                strokeWidth="6"
                fill="none"
                strokeOpacity="0.18"
                vectorEffect="non-scaling-stroke"
                style={{ filter: `blur(6px)` }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />

              {/* Main path */}
              <motion.path
                d={PATH}
                stroke="url(#prozessPathGrad)"
                strokeWidth="1.5"
                strokeDasharray="8 5"
                strokeLinecap="round"
                fill="none"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2.5, ease: "easeInOut", opacity: { duration: 0.3 } }}
              />
            </svg>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="lg:hidden relative">
          <div className="absolute left-[31px] top-8 bottom-8 w-[2px] rounded-full pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, transparent, ${C}85 5%, ${C}40 95%, transparent)`,
              boxShadow: `0 0 10px ${C}30`,
            }} />
          <div className="space-y-0">
            {prozess.map((item, i) => (
              <motion.div key={item.step} className="flex items-start gap-5 pb-9 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}>
                <div className="relative shrink-0 z-10 mt-1">
                  <div className="absolute inset-0 rounded-full blur-lg scale-[2.2]"
                    style={{ background: `${C}18` }} />
                  <div className="absolute rounded-full"
                    style={{ inset: -4, border: `1px solid ${C}15` }} />
                  <div className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #0D1F3C 0%, #08111E 100%)",
                      border: `1.5px solid ${C}AA`,
                      boxShadow: `0 0 20px ${C}45, inset 0 0 12px ${C}08`,
                    }}>
                    <span className="text-white font-black text-[13px]"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {item.step}
                    </span>
                  </div>
                </div>
                <div className="flex-1 rounded-2xl p-[1.5px]"
                  style={{ background: `linear-gradient(135deg, ${C}30 0%, ${C}06 55%, ${CL}10 100%)` }}>
                  <div className="relative rounded-[13px] p-5 overflow-hidden"
                    style={{ background: "#08111E" }}>
                    <span className="absolute -bottom-4 right-1 select-none pointer-events-none font-black leading-none"
                      style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "5rem", color: `${C}08` }}>
                      {item.step}
                    </span>
                    <div className="relative">
                      <h3 className="text-white font-bold text-[15px] mb-2"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {item.title}
                      </h3>
                      <p className="text-[#64748B] text-sm leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
                        {item.deliverables.map((d) => (
                          <span key={d} className="text-[10.5px] px-2.5 py-1 rounded-full font-medium"
                            style={{ background: `${C}12`, color: CL, border: `1px solid ${C}22` }}>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
