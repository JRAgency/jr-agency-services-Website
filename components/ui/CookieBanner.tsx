"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "jr_cookie_consent";

const categories = [
  {
    id: "necessary" as const,
    label: "Notwendig",
    desc: "Technisch erforderliche Cookies für Grundfunktionen der Website (z. B. Sitzungsverwaltung). Können nicht deaktiviert werden.",
    required: true,
  },
  {
    id: "analytics" as const,
    label: "Analyse",
    desc: "Helfen uns zu verstehen, wie Besucher die Website nutzen (z. B. aufgerufene Seiten, Verweildauer). Alle Daten werden anonymisiert.",
    required: false,
  },
  {
    id: "marketing" as const,
    label: "Marketing",
    desc: "Ermöglichen personalisierte Inhalte und Werbung basierend auf Ihrem Surfverhalten.",
    required: false,
  },
];

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setTimeout(() => setVisible(true), 800);
    } else {
      setHasConsented(true);
    }
  }, []);

  const save = (all: boolean) => {
    const result: ConsentState = all
      ? { necessary: true, analytics: true, marketing: true }
      : { necessary: true, analytics: consent.analytics, marketing: consent.marketing };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
    setVisible(false);
    setHasConsented(true);
    setExpanded(false);
  };

  const reopen = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as ConsentState;
      setConsent(parsed);
    }
    setVisible(true);
  };

  if (!visible) {
    return hasConsented ? (
      <button
        onClick={reopen}
        aria-label="Cookie-Einstellungen öffnen"
        className="fixed bottom-5 left-5 z-[999] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_0_24px_rgba(37,99,235,0.5)]"
        style={{
          background: "linear-gradient(135deg, rgba(8,17,30,0.98) 0%, rgba(5,10,20,0.98) 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        {/* Fingerprint icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
          <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
          <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
          <path d="M2 12a10 10 0 0 1 18-6" />
          <path d="M2 17c1 .5 2.5 1 4 1" />
          <path d="M20 12a10 10 0 0 1-.25 2.25" />
          <path d="M6 10a6 6 0 0 1 11.8-1.27" />
          <path d="M7 16.3c.3-1.3.3-2.6.3-4.3" />
          <path d="M9.7 6.46A6 6 0 0 1 17.85 13" />
        </svg>
      </button>
    ) : null;
  }

  return (
    <>
      {/* Backdrop blur when expanded */}
      {expanded && (
        <div className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm" />
      )}

      <div
        className="fixed z-[999] transition-all duration-500"
        style={
          expanded
            ? { inset: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "0 16px 24px" }
            : { bottom: "24px", left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "720px", padding: "0 16px" }
        }
      >
        <div
          className="w-full rounded-2xl border border-white/[0.09] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(8,17,30,0.98) 0%, rgba(5,10,20,0.98) 100%)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
            maxHeight: expanded ? "90vh" : undefined,
            overflowY: expanded ? "auto" : undefined,
          }}
        >
          {/* Top accent line */}
          <div
            className="h-px w-full"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.6) 50%, transparent 100%)",
            }}
          />

          <div className="p-5 md:p-6">

            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Datenschutzeinstellungen
                </span>
              </div>

              {/* Cookie icon badge */}
              <span className="text-white/25 text-xs hidden sm:block shrink-0 mt-0.5">🍪 JR Agency Services</span>
            </div>

            {/* Description */}
            <p className="text-white/45 text-xs leading-relaxed mb-5">
              Wir nutzen Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. Notwendige Cookies werden
              immer gesetzt. Für alle anderen Kategorien können Sie selbst entscheiden.{" "}
              <Link href="/datenschutz" className="text-[#60A5FA] hover:text-white transition-colors underline underline-offset-2">
                Datenschutzerklärung
              </Link>
            </p>

            {/* Expanded category toggles */}
            {expanded && (
              <div className="space-y-3 mb-5">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    className="rounded-xl p-4 border border-white/[0.07]"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-medium">{cat.label}</span>
                        {cat.required && (
                          <span
                            className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                            style={{ background: "rgba(16,185,129,0.15)", color: "#34D399", border: "1px solid rgba(16,185,129,0.25)" }}
                          >
                            Immer aktiv
                          </span>
                        )}
                      </div>

                      {/* Toggle */}
                      {!cat.required && (
                        <button
                          onClick={() => setConsent((prev) => ({ ...prev, [cat.id]: !prev[cat.id as keyof ConsentState] }))}
                          className="relative shrink-0 transition-all duration-300"
                          style={{ width: "44px", height: "24px" }}
                          aria-label={`${cat.label} ${consent[cat.id as keyof ConsentState] ? "deaktivieren" : "aktivieren"}`}
                        >
                          <div
                            className="absolute inset-0 rounded-full transition-all duration-300"
                            style={{
                              background: consent[cat.id as keyof ConsentState]
                                ? "linear-gradient(90deg, #1d4ed8, #2563eb)"
                                : "rgba(255,255,255,0.1)",
                              border: consent[cat.id as keyof ConsentState]
                                ? "1px solid rgba(37,99,235,0.5)"
                                : "1px solid rgba(255,255,255,0.1)",
                            }}
                          />
                          <div
                            className="absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white transition-all duration-300"
                            style={{
                              left: consent[cat.id as keyof ConsentState] ? "23px" : "3px",
                              boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
                            }}
                          />
                        </button>
                      )}

                      {cat.required && (
                        <div
                          className="shrink-0 w-[44px] h-[24px] rounded-full flex items-center justify-end pr-[3px]"
                          style={{ background: "linear-gradient(90deg, #065f46, #047857)", border: "1px solid rgba(16,185,129,0.3)" }}
                        >
                          <div className="w-[18px] h-[18px] rounded-full bg-white" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.4)" }} />
                        </div>
                      )}
                    </div>
                    <p className="text-white/35 text-xs leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Action buttons */}
            <div className={`flex gap-2.5 ${expanded ? "flex-col sm:flex-row" : "flex-col sm:flex-row"}`}>
              {/* Accept all */}
              <button
                onClick={() => save(true)}
                className="flex-1 text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                style={{ background: "linear-gradient(90deg, #1d4ed8, #2563eb)", order: 0 }}
              >
                Alle akzeptieren
              </button>

              {/* Save selection (only when expanded) */}
              {expanded && (
                <button
                  onClick={() => save(false)}
                  className="flex-1 text-white/80 hover:text-white text-sm font-medium py-2.5 px-5 rounded-xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  Auswahl speichern
                </button>
              )}

              {/* Reject / Manage */}
              {!expanded ? (
                <>
                  <button
                    onClick={() => save(false)}
                    className="flex-1 text-white/60 hover:text-white text-sm font-medium py-2.5 px-5 rounded-xl border border-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={() => setExpanded(true)}
                    className="flex-1 text-white/40 hover:text-white/70 text-sm font-medium py-2.5 px-5 rounded-xl transition-colors duration-200"
                  >
                    Einstellungen
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setExpanded(false)}
                  className="flex-1 text-white/40 hover:text-white/70 text-sm font-medium py-2.5 px-5 rounded-xl transition-colors duration-200"
                >
                  Zurück
                </button>
              )}
            </div>

            {/* Footer links */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/[0.06]">
              <Link href="/impressum" className="text-white/25 hover:text-white/50 text-xs transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="text-white/25 hover:text-white/50 text-xs transition-colors">Datenschutz</Link>
              <span className="text-white/15 text-xs ml-auto">Powered by JR Agency</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
