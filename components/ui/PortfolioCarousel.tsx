"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface Project {
  img: string;
  name: string;
  cat?: string;
  category?: string;
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
        <div className="relative rounded-3xl overflow-hidden bg-[#0A0F1E]" style={{ aspectRatio: "16/9" }}>

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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
            {/* Top: slide counter */}
            <div className="flex justify-end">
              <span className="text-white/40 text-xs font-mono tabular-nums">
                {String(current + 1).padStart(2, "0")} / {String(projekte.length).padStart(2, "0")}
              </span>
            </div>

            {/* Bottom: project info */}
            <div className="flex items-end justify-between gap-4">
              <div>
                {(projekte[current].tags?.length ?? 0) > 0 && (
                  <div className="flex gap-2 mb-3">
                    {projekte[current].tags!.map(tag => (
                      <span key={tag} className="text-[#93C5FD] text-[10px] font-bold uppercase tracking-widest bg-[#2563EB]/20 border border-[#2563EB]/30 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-white/50 text-xs uppercase tracking-[0.18em] mb-1">{projekte[current].cat ?? projekte[current].category}</p>
                <h3 className="text-white font-extrabold text-2xl md:text-3xl" style={{ fontFamily: "var(--font-plus-jakarta)", letterSpacing: "-0.02em" }}>
                  {projekte[current].name}
                </h3>
              </div>

              {/* Arrows */}
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={prev_}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 3L5 8l5 5" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3l5 5-5 5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#2563EB] to-[#93C5FD] transition-none"
              style={{ width: `${progress}%`, transition: paused ? "none" : "width 0.05s linear" }}
            />
          </div>
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
