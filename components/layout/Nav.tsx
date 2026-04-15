"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NeonButton } from "@/components/ui/neon-button";

const leistungen = [
  {
    href: "/webdesign",
    label: "Webdesign",
    desc: "Responsive Websites & Landing Pages",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    href: "/social-media",
    label: "Social Media",
    desc: "Management & Content-Erstellung",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "/branding",
    label: "Branding",
    desc: "Logo, Corporate Identity & mehr",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#020408]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="page-container h-20 md:h-24 flex items-center justify-between md:grid md:grid-cols-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <Image
            src="/images/JR Logo (glow effekt) PNG.png"
            alt="JR Agency"
            width={88}
            height={88}
            className="w-[56px] h-[56px] md:w-[88px] md:h-[88px] object-contain"
          />
          <span
            className="font-extrabold text-white text-[11px] md:text-sm tracking-wider uppercase leading-none whitespace-nowrap"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            JR Agency Services
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center justify-center gap-10">
          {leistungen.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-base font-semibold transition-colors duration-200 tracking-wide ${
                  pathname === item.href ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center justify-end gap-5">
          <NeonButton href="/anfragen" variant="default" size="default" className="hidden md:inline-flex font-bold">
            Projekt starten
          </NeonButton>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-8 pt-4 border-t border-white/[0.06]">

          {leistungen.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-3.5 text-base transition-colors duration-200 ${pathname === item.href ? "text-white" : "text-white/40 hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4">
            <Link
              href="/anfragen"
              className="block text-center bg-white text-[#020408] text-sm font-semibold px-5 py-3.5 rounded-full"
            >
              Projekt starten
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
