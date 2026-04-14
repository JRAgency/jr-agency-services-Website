"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface MockupCarouselProps {
  images: string[];
  accentColor?: string;
}

export default function MockupCarousel({ images }: MockupCarouselProps) {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const t = setInterval(advance, 4000);
    return () => clearInterval(t);
  }, [advance]);

  const getIdx = (offset: number) =>
    (current + offset + images.length) % images.length;

  return (
    <div className="relative flex items-center justify-center" style={{ height: "480px" }}>

      {/* Left card */}
      <div
        className="absolute rounded-2xl overflow-hidden border border-white/[0.06] z-0"
        style={{ width: "42%", height: "72%", left: 0, top: "14%", opacity: 0.35, filter: "blur(2px)", transform: "scale(0.94)" }}
      >
        <Image src={images[getIdx(-1)]} alt="" fill className="object-cover object-top" sizes="25vw" quality={75} />
        <div className="absolute inset-0 bg-[#020408]/40" />
      </div>

      {/* Center card — all images stacked, only current is visible */}
      <div
        className="relative z-10 rounded-2xl overflow-hidden border border-white/[0.1]"
        style={{
          width: "58%",
          height: "100%",
          boxShadow: "0 30px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.9s ease",
              zIndex: i === current ? 1 : 0,
            }}
          >
            <Image src={src} alt="" fill className="object-cover object-top" sizes="40vw" quality={90} />
          </div>
        ))}
      </div>

      {/* Right card */}
      <div
        className="absolute rounded-2xl overflow-hidden border border-white/[0.06] z-0"
        style={{ width: "42%", height: "72%", right: 0, top: "14%", opacity: 0.35, filter: "blur(2px)", transform: "scale(0.94)" }}
      >
        <Image src={images[getIdx(1)]} alt="" fill className="object-cover object-top" sizes="25vw" quality={75} />
        <div className="absolute inset-0 bg-[#020408]/40" />
      </div>

      {/* Dots */}
      <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full"
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              background: i === current ? "#3B82F6" : "rgba(255,255,255,0.25)",
              transition: "all 0.4s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
