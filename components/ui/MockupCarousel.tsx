"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MockupCarouselProps {
  images: string[];
  accentColor?: string;
}

export default function MockupCarousel({ images, accentColor = "rgba(37,99,235,0.5)" }: MockupCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const advance = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const t = setInterval(advance, 3800);
    return () => clearInterval(t);
  }, [advance]);

  const getIdx = (offset: number) =>
    (current + offset + images.length) % images.length;

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  return (
    <div className="relative flex items-center justify-center" style={{ height: "480px" }}>

      {/* Left card */}
      <div
        className="absolute rounded-2xl overflow-hidden border border-white/[0.06] z-0 transition-all duration-500"
        style={{ width: "42%", height: "72%", left: 0, top: "14%", opacity: 0.35, filter: "blur(2px)", transform: "scale(0.94)" }}
      >
        <Image src={images[getIdx(-1)]} alt="" fill className="object-cover object-top" sizes="25vw" quality={80} />
        <div className="absolute inset-0 bg-[#020408]/40" />
      </div>

      {/* Center card */}
      <div className="relative z-10" style={{ width: "58%", height: "100%" }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            className="absolute inset-0 rounded-2xl overflow-hidden border border-white/[0.1]"
            style={{ boxShadow: `0 30px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)` }}
            initial={{ opacity: 0, x: direction * 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction * -40, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={images[current]} alt="" fill className="object-cover object-top" sizes="40vw" quality={90} priority />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right card */}
      <div
        className="absolute rounded-2xl overflow-hidden border border-white/[0.06] z-0 transition-all duration-500"
        style={{ width: "42%", height: "72%", right: 0, top: "14%", opacity: 0.35, filter: "blur(2px)", transform: "scale(0.94)" }}
      >
        <Image src={images[getIdx(1)]} alt="" fill className="object-cover object-top" sizes="25vw" quality={80} />
        <div className="absolute inset-0 bg-[#020408]/40" />
      </div>

      {/* Dots */}
      <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              background: i === current ? "#3B82F6" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
