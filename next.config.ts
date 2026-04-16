import type { NextConfig } from "next";

const securityHeaders = [
  // Verhindert Einbettung der Seite in fremde iFrames (Clickjacking-Schutz)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Verhindert MIME-Type-Sniffing durch Browser
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Kontrolliert Referrer-Informationen bei externen Links
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Deaktiviert unbenötigte Browser-Features
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  // Erzwingt HTTPS für 2 Jahre (HSTS)
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Verhindert Cross-Site-Scripting über DNS-Prefetch
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
