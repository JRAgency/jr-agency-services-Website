'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const C = "#2563EB";
const CL = "#3B82F6";

const shadow = "drop-shadow(0 16px 36px rgba(0,0,0,0.16)) drop-shadow(0 3px 10px rgba(0,0,0,0.10))";

/* Floating image definition */
const floats = [
  {
    src: "/images/01 - Apple Devices Mockup lombare.png",
    w: 240, h: 172,
    pos: { top: "9%", left: "5%" },
    rotate: -8, yFactor: -110, delay: 0.3,
    hide: "hidden xl:block",
  },
  {
    src: "/images/01 - Apple Devices Mockup Mana.png",
    w: 190, h: 136,
    pos: { top: "46%", left: "3%" },
    rotate: 5, yFactor: -70, delay: 0.55,
    hide: "hidden xl:block",
  },
  {
    src: "/images/01 - Apple Devices Mockup Peter schmid GMBH.png",
    w: 210, h: 150,
    pos: { bottom: "10%", left: "8%" },
    rotate: -5, yFactor: -90, delay: 0.7,
    hide: "hidden xl:block",
  },
  {
    src: "/images/M001T1427 K iPhone Mockup 19Jul25.png",
    w: 138, h: 276,
    pos: { top: "8%", right: "6%" },
    rotate: 7, yFactor: -160, delay: 0.35,
    hide: "hidden lg:block",
  },
  {
    src: "/images/01 - Apple Devices Mockup kimchi.png",
    w: 220, h: 158,
    pos: { top: "46%", right: "4%" },
    rotate: -4, yFactor: -130, delay: 0.5,
    hide: "hidden lg:block",
  },
  {
    src: "/images/M001T1427 K iPhone Mockup 19Jul25 Kimchi.png",
    w: 120, h: 240,
    pos: { bottom: "9%", right: "9%" },
    rotate: -6, yFactor: -100, delay: 0.75,
    hide: "hidden xl:block",
  },
];

function FloatImage({ item }: { item: typeof floats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, item.yFactor]);

  return (
    <motion.div
      className={`absolute pointer-events-none ${item.hide}`}
      style={{ ...item.pos, y }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={item.src}
        alt=""
        width={item.w}
        height={item.h}
        quality={85}
        className="rounded-xl"
        style={{ transform: `rotate(${item.rotate}deg)`, filter: shadow }}
      />
    </motion.div>
  );
}

export default function WebdesignHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -28]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden pt-24 pb-28"
      style={{
        minHeight: "92vh",
        background: "radial-gradient(ellipse 120% 70% at 50% -10%, #d6e2f8 0%, #edf1fa 55%, #f0f3fb 100%)",
      }}
    >
      {/* Floating images */}
      {floats.map((item) => (
        <FloatImage key={item.src} item={item} />
      ))}

      {/* Center content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full"
      >
        <div className="max-w-[640px] mx-auto px-6 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 border"
            style={{ background: `${C}10`, borderColor: `${C}28`, color: C }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: C }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em]">Webdesign</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold leading-[1.04]"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(44px, 6vw, 82px)",
              letterSpacing: "-0.03em",
              color: "#0f172a",
            }}
          >
            Websites die{" "}
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
            <br />
            {"& wirken."}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[15px] leading-relaxed max-w-md mx-auto"
            style={{ color: "#64748B" }}
          >
            Individuell gestaltet, technisch einwandfrei und auf Ihre Marke abgestimmt —
            von der Konzeption bis zum Go-Live.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex justify-center gap-3 flex-wrap"
          >
            <Link
              href="/anfragen"
              className="inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:opacity-90 hover:shadow-[0_8px_30px_rgba(37,99,235,0.38)]"
              style={{ background: C }}
            >
              Projekt starten
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200"
              style={{ color: "#334155", background: "rgba(255,255,255,0.75)", border: "1px solid #d1d9e8", backdropFilter: "blur(8px)" }}
            >
              Referenzen ansehen
            </Link>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex justify-center gap-8 flex-wrap"
          >
            {[
              { val: "48h", txt: "Erste Demo" },
              { val: "95+", txt: "Lighthouse Score (Ziel)" },
              { val: "0 €", txt: "Demo kostenlos" },
            ].map((s) => (
              <div key={s.txt} className="text-center">
                <p
                  className="font-extrabold text-[22px] leading-none"
                  style={{ fontFamily: "var(--font-plus-jakarta)", color: "#0f172a" }}
                >
                  {s.val}
                </p>
                <p className="text-xs mt-1" style={{ color: "#94A3B8" }}>{s.txt}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
