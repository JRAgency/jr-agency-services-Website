"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    num: "01",
    href: "/webdesign",
    label: "Webdesign Agentur",
    title: "Webdesign",
    titleGrad: "Mehr Anfragen",
    titleEnd: "für Ihr Unternehmen",
    description:
      "Individuelle Websites, die Besucher in echte Anfragen verwandeln — kein Template, kein Copy-Paste. Mobile-first, blitzschnell und SEO-optimiert.",
    features: ["Responsive Design", "E-Commerce", "Landing Pages", "SEO-optimiert"],
    accent: "#2563EB",
    accentLight: "#93C5FD",
    accentAlpha: "rgba(37,99,235,",
    gradFrom: "#2563EB",
    gradTo: "#93C5FD",
    img: "/images/mockup 14 inch.png",
    imgW: 520,
    imgH: 360,
  },
  {
    num: "02",
    href: "/social-media",
    label: "Social Media Management",
    title: "Social Media",
    titleGrad: "Mehr Reichweite",
    titleEnd: "für Ihr Unternehmen",
    description:
      "Strategisches Social Media Management, das Ihre Marke sichtbar macht. Inhalte, die performen — und eine Community, die wächst.",
    features: ["Content-Erstellung", "Community Management", "Werbeanzeigen", "Reporting"],
    accent: "#7C3AED",
    accentLight: "#C4B5FD",
    accentAlpha: "rgba(124,58,237,",
    gradFrom: "#7C3AED",
    gradTo: "#C4B5FD",
    img: "/images/social-media/social-instagram-showcase.png",
    imgW: 320,
    imgH: 320,
  },
  {
    num: "03",
    href: "/branding",
    label: "Branding & Corporate Identity",
    title: "Branding",
    titleGrad: "Ihre Marke",
    titleEnd: "die bleibt.",
    description:
      "Eine starke Markenidentität, die professionell wirkt und aus der Masse heraussticht — von Logo und Farben bis zu vollständigen Brand Guidelines.",
    features: ["Logo-Design", "Corporate Identity", "Brand Guidelines", "Visitenkarten"],
    accent: "#0EA5E9",
    accentLight: "#BAE6FD",
    accentAlpha: "rgba(14,165,233,",
    gradFrom: "#0EA5E9",
    gradTo: "#BAE6FD",
    img: "/images/branding/icon-jr-logo.png",
    imgW: 200,
    imgH: 200,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);
  const s = open !== null ? services[open] : null;

  return (
    <section id="leistungen" className="py-24 md:py-44 bg-[#020408]">
      <div className="page-container">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 lg:gap-32">

          {/* LEFT — sticky label + contextual content */}
          <div className="lg:pt-3">
            <AnimatedSection delay={0}>
              <span className="text-white/45 text-xs uppercase tracking-[0.22em] font-medium mb-6 block">
                Unsere Leistungen
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <h2
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                  lineHeight: 1.08,
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                }}
                className="text-white"
              >
                Alles, was Ihr
                <br />
                Unternehmen
                <br />
                online braucht
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-white/35 text-base leading-relaxed max-w-full lg:max-w-[280px]">
                Von der Website über Social Media bis zum Branding — alles aus einer Hand, persönlich betreut.
              </p>
            </AnimatedSection>

            {/* Contextual image when a service is open */}
            <AnimatePresence mode="wait">
              {s && (
                <motion.div
                  key={s.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease }}
                  className="hidden lg:block mt-10 relative rounded-2xl overflow-hidden"
                  style={{ border: `1px solid ${s.accentAlpha}0.2)` }}
                >
                  {/* Glow backdrop */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at center, ${s.accentAlpha}0.12) 0%, transparent 70%)` }}
                  />
                  <div
                    className="flex items-center justify-center py-8 px-6"
                    style={{ background: `linear-gradient(135deg, #080e1a 0%, #0a1020 100%)` }}
                  >
                    <Image
                      src={s.img}
                      alt={s.title}
                      width={s.imgW}
                      height={s.imgH}
                      className="w-full object-contain"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT — accordion */}
          <AnimatedSection delay={0.1}>
            <div className="divide-y divide-white/[0.07]">
              {services.map((service, i) => {
                const isOpen = open === i;
                return (
                  <div key={service.href} className="relative">

                    {/* Active colored glow bar */}
                    {isOpen && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-px"
                        style={{ background: `linear-gradient(to bottom, transparent, ${service.accent}, transparent)` }}
                      />
                    )}

                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-10 text-left group"
                    >
                      <div className="flex items-center gap-6">
                        <div>
                          {isOpen && (
                            <span
                              className="text-[10px] font-bold uppercase tracking-[0.18em] block mb-0.5 transition-all duration-200"
                              style={{ color: service.accentLight }}
                            >
                              {service.label}
                            </span>
                          )}
                          <span
                            className={`text-xl md:text-2xl font-bold transition-colors duration-200 ${isOpen ? "text-white" : "text-white group-hover:text-white/80"}`}
                            style={{ fontFamily: "var(--font-plus-jakarta)" }}
                          >
                            {service.title}
                          </span>
                        </div>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease }}
                          className="overflow-hidden"
                        >
                          <div className="pb-10 pl-[3.75rem]">
                            {/* Gradient headline */}
                            <p
                              className="font-extrabold mb-3 leading-tight"
                              style={{
                                fontFamily: "var(--font-plus-jakarta)",
                                fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                                letterSpacing: "-0.015em",
                              }}
                            >
                              <span
                                style={{
                                  background: `linear-gradient(120deg, ${service.gradFrom} 0%, ${service.gradTo} 100%)`,
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  backgroundClip: "text",
                                }}
                              >
                                {service.titleGrad}
                              </span>
                              {" "}
                              <span className="text-white/70">{service.titleEnd}</span>
                            </p>

                            <p className="text-white/50 text-base leading-relaxed mb-5 max-w-xl">
                              {service.description}
                            </p>

                            {/* Colored feature tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {service.features.map((f) => (
                                <span
                                  key={f}
                                  className="text-xs font-medium px-3 py-1.5 rounded-full"
                                  style={{
                                    color: service.accentLight,
                                    background: `${service.accentAlpha}0.08)`,
                                    border: `1px solid ${service.accentAlpha}0.22)`,
                                  }}
                                >
                                  {f}
                                </span>
                              ))}
                            </div>

                            {/* CTA in accent color */}
                            <Link
                              href={service.href}
                              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90"
                              style={{
                                background: service.accent,
                                color: "#fff",
                                boxShadow: `0 0 0 0 ${service.accentAlpha}0)`,
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 20px ${service.accentAlpha}0.4)`)}
                              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `0 0 0 0 ${service.accentAlpha}0)`)}
                            >
                              Mehr erfahren
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 8h10M9 4l4 4-4 4" />
                              </svg>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
