"use client";

import { ReactNode } from "react";

interface LeistungenCardProps {
  title: string;
  desc: string;
  color: string;
  icon: ReactNode;
}

export default function LeistungenCard({ title, desc, color, icon }: LeistungenCardProps) {
  return (
    <div
      className="group bg-[#0B1220] border border-[#94A3B8]/10 rounded-2xl p-8 transition-all duration-300 h-full relative overflow-hidden"
      onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = color + "50"}
      onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(148,163,184,0.1)"}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
        style={{ background: color + "18", border: `1px solid ${color}35`, color }}
      >
        {icon}
      </div>
      <h3
        className="text-white font-bold text-lg mb-3"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
