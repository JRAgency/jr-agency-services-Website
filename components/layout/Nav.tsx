"use client";

import { useState, useEffect, useRef } from "react";
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
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileLeistungenOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#020408]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/JR Logo (glow effekt) PNG.png"
            alt="JR Agency"
            width={56}
            height={56}
            className="w-14 h-14 object-contain"
          />
          <span
            className="font-extrabold text-white text-base tracking-wider uppercase"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            JR Agency Services
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">

          {/* Leistungen dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 text-base font-semibold text-white/50 hover:text-white transition-colors duration-200 tracking-wide"
            >
              Leistungen
              <svg
                width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 transition-all duration-200 ${
              dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}>
              {/* Arrow */}
              <div className="flex justify-center mb-1">
                <div className="w-3 h-3 bg-[#0D1526] border-l border-t border-white/[0.08] rotate-45 -mb-2" />
              </div>
              <div className="bg-[#0D1526] border border-white/[0.08] rounded-2xl p-2 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
                {leistungen.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-150 group ${
                        isActive
                          ? "bg-[#2563EB]/15 text-white"
                          : "hover:bg-white/[0.05] text-white/60 hover:text-white"
                      }`}
                    >
                      <span className={`shrink-0 ${isActive ? "text-[#60A5FA]" : "text-white/30 group-hover:text-[#60A5FA]"} transition-colors duration-150`}>
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-semibold text-sm leading-tight text-white">{item.label}</p>
                        <p className="text-white/40 text-xs mt-0.5">{item.desc}</p>
                      </div>
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </li>

        </ul>

        {/* Right side */}
        <div className="flex items-center gap-5">
          <Link
            href="/termin"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white/80 transition-colors duration-200"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Termin buchen
          </Link>
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

          {/* Leistungen accordion */}
          <button
            onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
            className="w-full flex items-center justify-between py-3.5 text-white/40 hover:text-white text-base transition-colors duration-200"
          >
            Leistungen
            <svg
              width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
              className={`transition-transform duration-200 ${mobileLeistungenOpen ? "rotate-180" : ""}`}
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${mobileLeistungenOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="pl-4 pb-2 space-y-1">
              {leistungen.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 py-2.5 text-white/40 hover:text-white text-sm transition-colors duration-200"
                >
                  <span className="text-white/25">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/#referenzen" className="block py-3.5 text-white/40 hover:text-white text-base transition-colors duration-200">
            Referenzen
          </Link>
          <Link href="/kontakt" className="block py-3.5 text-white/40 hover:text-white text-base transition-colors duration-200">
            Kontakt
          </Link>

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
