"use client";

import { motion } from "framer-motion";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { AnimatedText } from "@/components/ui/animated-shiny-text";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── 1. Shader canvas — fades out cleanly after intro ─ */}
      {/* Wrapping in motion.div lets us fade the canvas itself */}
      {/* to 0 so the frozen last-frame never "hangs" visibly.  */}
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

      {/* ── 5. "JR AGENCY SERVICES" + "Webdesign" ───────────── */}
      <motion.div
        className="relative z-[3] w-full flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5.8, delay: 0.3, ease: "easeIn" }}
      >
        <AnimatedText
          text="JR Agency Services"
          gradientColors="linear-gradient(90deg, #e2e8f0 0%, #1d4ed8 22%, #172554 40%, #e2e8f0 55%, #1e3a8a 72%, #1d4ed8 88%, #e2e8f0 100%)"
          gradientAnimationDuration={5}
          hoverEffect
          textClassName="font-extrabold uppercase tracking-[0.1em] text-center"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        />

      </motion.div>

    </section>
  );
}
