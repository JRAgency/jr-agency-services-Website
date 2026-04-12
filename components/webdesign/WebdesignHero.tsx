'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const C = "#2563EB";
const CL = "#93C5FD";

export default function WebdesignHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yA = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yC = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yD = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], [0, -40]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#020408] pt-20"
    >
      {/* Minimal background — no heavy glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Very faint center light */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
          style={{ background: `radial-gradient(ellipse, ${C}0d 0%, transparent 60%)` }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      {/* ── Floating mockups ── */}

      {/* Top-right — landscape device */}
      <motion.div
        style={{ y: yB }}
        className="absolute right-[4%] top-[7%] w-[260px] xl:w-[320px] pointer-events-none hidden lg:block"
        initial={{ opacity: 0, x: 50, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 8 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/01 - Apple Devices Mockup kimchi.png"
          alt="" width={320} height={230} quality={85}
          className="w-full rounded-2xl"
          style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.55))" }}
        />
      </motion.div>

      {/* Mid-right — iPhone */}
      <motion.div
        style={{ y: yD }}
        className="absolute right-[8%] bottom-[8%] w-[130px] xl:w-[160px] pointer-events-none hidden lg:block"
        initial={{ opacity: 0, x: 30, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: -5 }}
        transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/M001T1427 K iPhone Mockup 19Jul25 Kimchi.png"
          alt="" width={160} height={320} quality={85}
          className="w-full rounded-2xl"
          style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.55))" }}
        />
      </motion.div>

      {/* Top-left — landscape device */}
      <motion.div
        style={{ y: yA }}
        className="absolute left-[3%] top-[12%] w-[220px] xl:w-[280px] pointer-events-none hidden xl:block"
        initial={{ opacity: 0, x: -40, rotate: -7 }}
        animate={{ opacity: 1, x: 0, rotate: -7 }}
        transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/01 - Apple Devices Mockup lombare.png"
          alt="" width={280} height={200} quality={85}
          className="w-full rounded-2xl"
          style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.55))" }}
        />
      </motion.div>

      {/* Bottom-left — landscape device */}
      <motion.div
        style={{ y: yC }}
        className="absolute left-[5%] bottom-[10%] w-[180px] xl:w-[230px] pointer-events-none hidden xl:block"
        initial={{ opacity: 0, x: -30, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 5 }}
        transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/01 - Apple Devices Mockup Mana.png"
          alt="" width={230} height={165} quality={85}
          className="w-full rounded-2xl"
          style={{ filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.55))" }}
        />
      </motion.div>

      {/* ── Center content ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 page-container py-24 w-full"
      >
        <div className="max-w-2xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
            style={{ background: `${C}10`, borderColor: `${C}28`, color: CL }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: C }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em]">Webdesign</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold text-white leading-[1.03]"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(42px, 5.5vw, 80px)",
              letterSpacing: "-0.03em",
            }}
          >
            Websites die<br />
            <span
              style={{
                background: `linear-gradient(135deg, ${C} 0%, ${CL} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              begeistern
            </span>
            {" & wirken."}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[#64748B] text-[15px] md:text-base leading-relaxed max-w-lg mx-auto"
          >
            Individuell gestaltet, technisch einwandfrei und auf Ihre Marke abgestimmt —
            von der ersten Zeile Code bis zum Go-Live.
          </motion.p>

          {/* Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-wrap justify-center gap-2"
          >
            {["Responsive", "SEO-optimiert", "Blitzschnell", "30 Tage Support"].map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1.5 text-xs text-white/45 border border-white/[0.08] bg-white/[0.03] rounded-full px-3 py-1.5"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4L3.2 5.8L6.5 2.2" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex gap-3.5 flex-wrap justify-center"
          >
            <Link
              href="/anfragen"
              className="inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_32px_rgba(37,99,235,0.5)]"
              style={{ background: C }}
            >
              Projekt starten
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 text-white/55 hover:text-white font-medium px-7 py-3.5 rounded-full border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-200 text-sm"
            >
              Referenzen ansehen
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
