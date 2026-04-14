'use client';

import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  color?: string;
  href?: string;
  ctaLabel?: string;
  img?: string;
  imgPadding?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function CardFlip({
  title = 'Leistung',
  subtitle = 'Für Ihr Unternehmen',
  description = 'Professionelle Leistungen für Ihren digitalen Erfolg.',
  features = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  color = '#2563EB',
  href = '#',
  ctaLabel = 'Mehr erfahren',
  img,
  imgPadding = '20px',
  gradientFrom,
  gradientTo,
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const gFrom = gradientFrom ?? color;
  const gTo = gradientTo ?? color;

  const cardBase = {
    background: '#0a1020',
    border: `1px solid rgba(255,255,255,0.07)`,
  };

  return (
    <div
      className="group relative w-full [perspective:1800px]"
      style={{ height: '420px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          'relative h-full w-full [transform-style:preserve-3d] transition-all duration-700',
          isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]',
        )}
      >

        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden flex flex-col"
          style={cardBase}
        >
          {/* Accent top line */}
          <div className="absolute top-0 left-0 right-0 h-px z-10"
            style={{ background: `linear-gradient(90deg, transparent 10%, ${color}55 50%, transparent 90%)` }} />

          {/* Image area — 60% of card */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              height: '272px',
              background: `radial-gradient(ellipse at 60% 40%, ${color}12 0%, #080e1a 65%)`,
            }}
          >
            {img && (
              <Image
                src={img}
                alt={title}
                width={340}
                height={220}
                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{ padding: imgPadding }}
              />
            )}
          </div>

          {/* Divider */}
          <div className="h-px mx-6" style={{ background: 'rgba(255,255,255,0.05)' }} />

          {/* Text area — 40% of card */}
          <div className="flex-1 flex flex-col justify-between px-6 py-5">
            <div>
              <p
                className="text-white font-bold text-[1.05rem] leading-snug"
                style={{ fontFamily: 'var(--font-plus-jakarta)', letterSpacing: '-0.01em' }}
              >
                {title}
              </p>
              <p className="text-white/40 text-[0.8rem] mt-1">{subtitle}</p>
            </div>
            <div className="flex items-center justify-between">
              <span
                className="text-[0.75rem] font-semibold uppercase tracking-[0.15em]"
                style={{ color }}
              >
                Mehr erfahren
              </span>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}
              >
                <ArrowRight className="w-3.5 h-3.5" style={{ color }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-3xl flex flex-col p-6"
          style={{ ...cardBase, border: `1px solid ${color}30` }}
        >
          {/* Accent top line */}
          <div className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
            style={{ background: `linear-gradient(90deg, transparent 10%, ${color}70 50%, transparent 90%)` }} />

          {/* Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none rounded-full"
            style={{
              background: `radial-gradient(ellipse at top right, ${color}14 0%, transparent 65%)`,
              filter: 'blur(20px)', transform: 'translate(20%, -20%)',
            }} />

          <div className="relative z-10 flex flex-col h-full gap-4">
            {/* Title */}
            <div>
              <p
                className="font-extrabold leading-tight"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontSize: '1.2rem',
                  letterSpacing: '-0.02em',
                  background: `linear-gradient(120deg, ${gFrom} 0%, ${gTo} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {title}
              </p>
              <p className="text-white/35 text-xs mt-0.5">{subtitle}</p>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed">{description}</p>

            {/* Features */}
            <div className="flex-1 space-y-2.5">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 transition-all duration-500"
                  style={{
                    transform: isFlipped ? 'translateX(0)' : 'translateX(-10px)',
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 65 + 150}ms`,
                  }}
                >
                  <div
                    className="w-4 h-4 shrink-0 rounded-md flex items-center justify-center"
                    style={{ background: `${color}15`, border: `1px solid ${color}28` }}
                  >
                    <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4L3.5 6L6.5 2" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={href}
              className="flex items-center justify-between rounded-2xl px-5 py-3.5 transition-all duration-200 hover:opacity-90 mt-auto"
              style={{ background: color }}
            >
              <span className="text-white text-sm font-semibold">{ctaLabel}</span>
              <ArrowRight className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
