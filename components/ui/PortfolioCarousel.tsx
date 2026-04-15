"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface Project {
  img: string;
  name: string;
  cat?: string;
  category?: string;
  result?: string;
  tags?: string[];
}

export default function PortfolioCarousel({ projekte }: { projekte: Project[] }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const DURATION = 4000;

  const goTo = useCallback((index: number, dir: "next" | "prev") => {
    if (animating) return;
    setDirection(dir);
    setPrev(current);
    setAnimating(true);
    setProgress(0);
    setCurrent(index);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 600);
  }, [animating, current]);

  const next = useCallback(() => {
    goTo((current + 1) % projekte.length, "next");
  }, [current, projekte.length, goTo]);

  const prev_ = useCallback(() => {
    goTo((current - 1 + projekte.length) % projekte.length, "prev");
  }, [current, projekte.length, goTo]);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, DURATION);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next, paused]);

  // Progress bar
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const step = 50;
    progressRef.current = setInterval(() => {
      setProgress(p => Math.min(p + (step / DURATION) * 100, 100));
    }, step);
    return () => { if (progressRef.current) clearInterval(progressRef.current); };
  }, [current, paused]);

  const enterStyles = direction === "next"
    ? "animate-[carouselIn_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
    : "animate-[carouselInPrev_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]";

  const exitStyles = direction === "next"
    ? "animate-[carouselOut_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
    : "animate-[carouselOutPrev_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]";

  return (
    <>
      <style>{`
        @keyframes carouselIn {
          from { opacity: 0; transform: translateX(60px) scale(0.96); }
          to   { opacity: 1; transform: translateX(0)    scale(1); }
        }
        @keyframes carouselInPrev {
          from { opacity: 0; transform: translateX(-60px) scale(0.96); }
          to   { opacity: 1; transform: translateX(0)     scale(1); }
        }
        @keyframes carouselOut {
          from { opacity: 1; transform: translateX(0)     scale(1); }
          to   { opacity: 0; transform: translateX(-60px) scale(0.96); }
        }
        @keyframes carouselOutPrev {
          from { opacity: 1; transform: translateX(0)    scale(1); }
          to   { opacity: 0; transform: translateX(60px) scale(0.96); }
        }
        @keyframes kenburns {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
      `}</style>

      <div
        className="relative select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Main card */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0A0F1E] aspect-[4/3] md:aspect-[16/9]">

          {/* Exiting slide */}
          {prev !== null && (
            <div className={`absolute inset-0 ${exitStyles}`}>
              <Image
                src={`/images/${projekte[prev].img}`}
                alt={projekte[prev].name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 80vw"
                quality={90}
                style={{ animation: "none" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>
          )}

          {/* Active slide */}
          <div className={`absolute inset-0 ${animating ? enterStyles : ""}`}>
            <Image
              key={current}
              src={`/images/${projekte[current].img}`}
              alt={projekte[current].name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 80vw"
              quality={90}
              style={{ animation: !animating ? "kenburns 6s ease-in-out alternate infinite" : "none" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Overlay: only counter + arrows, NO text on image */}
          <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-10">
            <div className="flex justify-between items-start">
              {/* Tags top-left */}
              <div className="flex gap-2 flex-wrap">
                {(projekte[current].tags?.length ?? 0) > 0 && projekte[current].tags!.map(tag => (
                  <span key={tag} className="text-[#93C5FD] text-[10px] font-bold uppercase tracking-widest bg-[#2563EB]/20 border border-[#2563EB]/30 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              {/* Counter top-right */}
              <span className="text-white/40 text-xs font-mono tabular-nums shrink-0">
                {String(current + 1).padStart(2, "0")} / {String(projekte.length).padStart(2, "0")}
              </span>
            </div>

            {/* Arrows bottom-right only */}
            <div className="flex justify-end gap-2">
              <button onClick={prev_} className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-all duration-200 backdrop-blur-sm">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3L5 8l5 5" /></svg>
              </button>
              <button onClick={next} className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-all duration-200 backdrop-blur-sm">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3l5 5-5 5" /></svg>
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#2563EB] to-[#93C5FD]"
              style={{ width: `${progress}%`, transition: paused ? "none" : "width 0.05s linear" }}
            />
          </div>
        </div>

        {/* Project info BELOW image on all screens */}
        <div className="mt-4 px-1">
          <p className="text-white/45 text-xs uppercase tracking-[0.18em] mb-1">{projekte[current].cat ?? projekte[current].category}</p>
          <h3 className="text-white font-extrabold text-xl md:text-2xl" style={{ fontFamily: "var(--font-plus-jakarta)", letterSpacing: "-0.02em" }}>
            {projekte[current].name}
          </h3>
          {projekte[current].result && (
            <p className="mt-1 inline-flex items-center gap-1.5 text-[#4ADE80] text-xs font-semibold">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12 L7 5 L10 9 L14 3" />
              </svg>
              {projekte[current].result}
            </p>
          )}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {projekte.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              className="transition-all duration-300"
            >
              <div className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-[#2563EB]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
