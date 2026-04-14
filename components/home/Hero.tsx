"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShaderAnimation } from "@/components/ui/shader-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── 1. Shader canvas — fades out cleanly after intro ─ */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2.5, delay: 4.5, ease: "easeInOut" }}
      >
        <ShaderAnimation />
      </motion.div>

      {/* ── 2. Dark overlay — fades up during shader playback ── */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none bg-[#020408]"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 4.5, delay: 0.6, ease: "easeInOut" }}
      />

      {/* ── 3. Persistent blue ambient glow ──────────────────── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none animate-blue-pulse"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.20) 0%, transparent 70%)",
        }}
      />

      {/* ── 4. Hero content ───────────────────────────────────── */}
      <motion.div
        className="relative z-[3] w-full flex flex-col items-center text-center px-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/50 text-xs font-medium uppercase tracking-[0.2em]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
          JR Agency Services
        </motion.span>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="max-w-4xl font-extrabold text-white leading-[1.05]"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            fontSize: "clamp(2.6rem, 5.5vw, 5.2rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Websites, Branding &amp; Social Media
          <br />
          <span
            style={{
              background: "linear-gradient(95deg, #93c5fd 0%, #60a5fa 35%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            für mehr Kundenanfragen
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="mt-7 max-w-xl text-white/45 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
        >
          Wir helfen Unternehmen, online sichtbar zu werden, Vertrauen aufzubauen
          und planbar neue Kunden zu gewinnen.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/anfragen"
            className="inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_32px_rgba(37,99,235,0.5)]"
            style={{ background: "#2563EB" }}
          >
            Kostenlose Demo anfordern
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
          <Link
            href="/#leistungen"
            className="inline-flex items-center gap-2 text-white/55 hover:text-white font-medium px-7 py-3.5 rounded-full border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.03] transition-all duration-200 text-sm"
          >
            Leistungen ansehen
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}
