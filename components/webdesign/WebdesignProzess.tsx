'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const C = "#2563EB";
const CL = "#93C5FD";

// S-curve path — viewBox 0 0 100 100, preserveAspectRatio="none"
// Circles alternate: left (x=4) at steps 01,03,05 — right (x=96) at steps 02,04
// Each row is 20% of total height, circle at vertical center → y = 10, 30, 50, 70, 90
const PATH =
  "M 4 10 C 4 20 96 20 96 30 C 96 40 4 40 4 50 C 4 60 96 60 96 70 C 96 80 4 80 4 90";

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
      style={{ width: 64, height: 64 }}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + i * 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Outer glow halo */}
      <div
        className="absolute inset-0 rounded-full blur-xl scale-[2.2] pointer-events-none"
        style={{ background: `${C}1A` }}
      />
      {/* Outer ring */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ inset: -6, border: `1px solid ${C}18` }}
      />
      {/* Circle */}
      <div
        className="relative w-16 h-16 rounded-full flex items-center justify-center z-10"
        style={{
          background: "linear-gradient(135deg, #0D1F3C 0%, #080F1E 100%)",
          border: `2px solid ${C}BB`,
          boxShadow: `0 0 28px ${C}55, 0 0 60px ${C}18, inset 0 0 18px ${C}0A`,
        }}
      >
        <span
          className="text-white font-black text-[15px]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          {step}
        </span>
      </div>
    </motion.div>
  );
}

function StepCard({
  item,
  isLeft,
  i,
  inView,
}: {
  item: (typeof prozess)[0];
  isLeft: boolean;
  i: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="group relative rounded-2xl p-[2px] transition-all duration-300 hover:-translate-y-[2px] cursor-default"
      style={{
        background: `linear-gradient(${isLeft ? "135deg" : "225deg"}, ${C}38 0%, ${C}08 55%, ${CL}14 100%)`,
      }}
      initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + i * 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Border brightens on hover */}
      <div
        className="absolute inset-0 rounded-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(${isLeft ? "135deg" : "225deg"}, ${C}55 0%, ${C}18 55%, ${CL}28 100%)`,
        }}
      />
      {/* Inner card */}
      <div
        className="relative rounded-[14px] p-6 lg:p-7 overflow-hidden"
        style={{ background: "#070C18" }}
      >
        {/* Decorative step number */}
        <span
          className="absolute -bottom-5 select-none pointer-events-none font-black leading-none"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            fontSize: "7rem",
            color: `${C}08`,
            right: isLeft ? "0.5rem" : undefined,
            left: !isLeft ? "0.5rem" : undefined,
          }}
        >
          {item.step}
        </span>
        {/* Ambient corner glow */}
        <div
          className="absolute w-28 h-28 rounded-full blur-3xl pointer-events-none"
          style={{
            background: `${C}09`,
            top: 0,
            right: isLeft ? 0 : undefined,
            left: !isLeft ? 0 : undefined,
          }}
        />
        <div className="relative">
          <h3
            className="text-white font-bold text-[17px] lg:text-[19px] mb-2.5"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            {item.title}
          </h3>
          <p className="text-[#64748B] text-sm leading-relaxed mb-4">{item.desc}</p>
          {/* Deliverable chips */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
            {item.deliverables.map((d) => (
              <span
                key={d}
                className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                style={{
                  background: `${C}12`,
                  color: CL,
                  border: `1px solid ${C}22`,
                }}
              >
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

  return (
    <section
      ref={ref}
      id="prozess"
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ background: "#020408" }}
    >
      {/* Subtle bg radial */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${C}06 0%, transparent 65%)`,
        }}
      />

      <div className="page-container relative">
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5"
            style={{ color: C }}
          >
            Wie wir arbeiten
          </span>
          <h2
            className="font-extrabold text-white leading-tight mb-5"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(28px, 4vw, 52px)",
              letterSpacing: "-0.02em",
            }}
          >
            Von der Idee zum{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${C} 0%, ${CL} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              fertigen Produkt.
            </span>
          </h2>
          <p className="text-[#64748B] text-[15px] leading-relaxed max-w-md mx-auto">
            Unser bewährter Prozess bringt Ihre Website strukturiert, termingerecht und ohne böse
            Überraschungen ans Ziel.
          </p>
        </motion.div>

        {/* ── Desktop: S-Curve Path ── */}
        <div className="relative hidden lg:block">
          {/* SVG absolute overlay — S-curve path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="prozessGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={C} stopOpacity="0.7" />
                <stop offset="50%" stopColor={CL} stopOpacity="0.5" />
                <stop offset="100%" stopColor={C} stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* Glow layer (blurred, behind) */}
            <motion.path
              d={PATH}
              stroke={C}
              strokeWidth="1.8"
              fill="none"
              strokeOpacity="0.22"
              style={{ filter: "blur(4px)" }}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />

            {/* Main dashed path */}
            <motion.path
              d={PATH}
              stroke="url(#prozessGrad)"
              strokeWidth="0.45"
              strokeDasharray="2.2 1.4"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeInOut", opacity: { duration: 0.3 } }}
            />
          </svg>

          {/* Steps */}
          <div>
            {prozess.map((item, i) => {
              // Even index (0,2,4) → 01,03,05: circle LEFT, card RIGHT
              // Odd index (1,3) → 02,04: circle RIGHT (flex-row-reverse), card LEFT
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.step}
                  className={`flex items-center gap-8 xl:gap-14 py-8 ${
                    isLeft ? "" : "flex-row-reverse"
                  }`}
                >
                  {/* Circle */}
                  <StepCircle step={item.step} i={i} inView={inView} />

                  {/* Card */}
                  <div className="flex-1 min-w-0 max-w-[520px]" style={{ [isLeft ? "marginLeft" : "marginRight"]: 0 }}>
                    <StepCard item={item} isLeft={isLeft} i={i} inView={inView} />
                  </div>

                  {/* Spacer (opposite side) */}
                  <div className="flex-1 hidden xl:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: Vertical Stack ── */}
        <div className="lg:hidden relative">
          {/* Left line */}
          <div
            className="absolute left-[31px] top-8 bottom-8 w-[2px] rounded-full pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, transparent, ${C}85 5%, ${C}40 95%, transparent)`,
              boxShadow: `0 0 10px ${C}30`,
            }}
          />
          <div className="space-y-0">
            {prozess.map((item, i) => (
              <motion.div
                key={item.step}
                className="flex items-start gap-5 pb-9 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Mobile circle */}
                <div className="relative shrink-0 z-10 mt-1">
                  <div
                    className="absolute inset-0 rounded-full blur-lg scale-[2.2]"
                    style={{ background: `${C}18` }}
                  />
                  <div
                    className="absolute rounded-full"
                    style={{ inset: -4, border: `1px solid ${C}15` }}
                  />
                  <div
                    className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #0D1F3C 0%, #08111E 100%)",
                      border: `1.5px solid ${C}AA`,
                      boxShadow: `0 0 20px ${C}45, inset 0 0 12px ${C}08`,
                    }}
                  >
                    <span
                      className="text-white font-black text-[13px]"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Mobile card */}
                <div
                  className="flex-1 rounded-2xl p-[1.5px]"
                  style={{
                    background: `linear-gradient(135deg, ${C}30 0%, ${C}06 55%, ${CL}10 100%)`,
                  }}
                >
                  <div
                    className="relative rounded-[13px] p-5 overflow-hidden"
                    style={{ background: "#08111E" }}
                  >
                    <span
                      className="absolute -bottom-4 right-1 select-none pointer-events-none font-black leading-none"
                      style={{
                        fontFamily: "var(--font-plus-jakarta)",
                        fontSize: "5rem",
                        color: `${C}08`,
                      }}
                    >
                      {item.step}
                    </span>
                    <div className="relative">
                      <h3
                        className="text-white font-bold text-[15px] mb-2"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[#64748B] text-sm leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
                        {item.deliverables.map((d) => (
                          <span
                            key={d}
                            className="text-[10.5px] px-2.5 py-1 rounded-full font-medium"
                            style={{
                              background: `${C}12`,
                              color: CL,
                              border: `1px solid ${C}22`,
                            }}
                          >
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
