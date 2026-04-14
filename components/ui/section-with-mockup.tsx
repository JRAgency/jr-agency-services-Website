'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MockupCarousel from "@/components/ui/MockupCarousel";

interface SectionWithMockupProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  features?: string[];
  primaryImageSrc: string;
  secondaryImageSrc: string;
  carouselImages?: string[];
  singleImage?: boolean;
  reverseLayout?: boolean;
  tag?: string;
  accentColor?: string;
  href?: string;
  ctaLabel?: string;
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
  title,
  description,
  features,
  primaryImageSrc,
  secondaryImageSrc,
  carouselImages,
  singleImage = false,
  reverseLayout = false,
  tag,
  accentColor = "rgba(37,99,235,0.5)",
  href,
  ctaLabel = "Mehr erfahren",
}) => {
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="relative py-32 md:py-48 bg-[#020408] overflow-hidden">

      {/* Ambient glow behind the image side */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          [reverseLayout ? "left" : "right"]: "-100px",
          background: `radial-gradient(ellipse at center, ${accentColor} 0%, transparent 70%)`,
          filter: "blur(40px)",
          opacity: 0.4,
        }}
      />

      <div className="page-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 lg:gap-32">

          {/* ── Text ─────────────────────────────── */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col gap-6"
            style={{ order: reverseLayout ? 2 : 1 }}
            initial={{ opacity: 0, x: reverseLayout ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            {tag && (
              <span className="text-white/45 text-xs uppercase tracking-[0.22em] font-medium">
                {tag}
              </span>
            )}

            <h2
              className="text-white font-bold"
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h2>

            <p className="text-white/40 text-base leading-relaxed max-w-lg">
              {description}
            </p>

            {features && features.length > 0 && (
              <ul className="flex flex-col gap-3 mt-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 border border-[#3B82F6]/30"
                      style={{ background: "rgba(37,99,235,0.12)" }}
                    >
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="#60A5FA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="1.5 6 4.5 9 10.5 3" />
                      </svg>
                    </span>
                    <span className="text-white/50 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            )}

            {href && (
              <div className="mt-2">
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_28px_rgba(37,99,235,0.45)]"
                  style={{ background: "#2563EB" }}
                >
                  {ctaLabel}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            )}
          </motion.div>

          {/* ── Mockup / Carousel ─────────────────── */}
          <motion.div
            className="w-full md:w-1/2 relative"
            style={{ order: reverseLayout ? 1 : 2, minHeight: "420px" }}
            initial={{ opacity: 0, x: reverseLayout ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            {carouselImages && carouselImages.length > 0 ? (
              <MockupCarousel images={carouselImages} accentColor={accentColor} />
            ) : singleImage ? (
              /* Single image — no secondary card */
              <motion.div
                className="relative rounded-3xl overflow-hidden border border-white/[0.09] z-10"
                style={{
                  width: "100%",
                  height: "480px",
                  background: "rgba(255,255,255,0.03)",
                  boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)`,
                }}
                initial={{ y: 0 }}
                whileInView={{ y: 12 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
              >
                <Image
                  src={primaryImageSrc}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </motion.div>
            ) : (
              <>
                {/* Secondary card — drifts up */}
                <motion.div
                  className="absolute rounded-3xl overflow-hidden border border-white/[0.06] z-0"
                  style={{
                    width: "75%",
                    height: "85%",
                    top: "8%",
                    [reverseLayout ? "right" : "left"]: "-8%",
                    background: "#080e1a",
                    filter: "blur(1.5px)",
                  }}
                  initial={{ y: 0 }}
                  whileInView={{ y: -22 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.3, ease: "easeOut" }}
                >
                  <Image
                    src={secondaryImageSrc}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 75vw, 40vw"
                    quality={90}
                  />
                </motion.div>

                {/* Primary card — drifts down */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden border border-white/[0.09] z-10 ml-auto"
                  style={{
                    width: "85%",
                    height: "480px",
                    marginLeft: reverseLayout ? "0" : "auto",
                    marginRight: reverseLayout ? "auto" : "0",
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(12px)",
                    boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)`,
                  }}
                  initial={{ y: 0 }}
                  whileInView={{ y: 22 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.3, ease: "easeOut", delay: 0.1 }}
                >
                  <Image
                    src={primaryImageSrc}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />
                </motion.div>
              </>
            )}
          </motion.div>

        </div>
      </div>

      {/* Bottom blue divider */}
      <div
        className="absolute w-full h-px bottom-0 left-0"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(59,130,246,0.18) 0%, transparent 100%)",
        }}
      />
    </section>
  );
};

export default SectionWithMockup;
