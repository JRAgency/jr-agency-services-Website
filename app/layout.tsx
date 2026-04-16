import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CookieBanner from "@/components/ui/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jragencyservices.com"),
  title: {
    default: "JR Agency Services – Webdesign, Social Media & Branding",
    template: "%s | JR Agency Services",
  },
  description:
    "Professionelles Webdesign, Social Media Management und Branding für Unternehmen in Deutschland. Kostenlose Demo in 48 Stunden. Jetzt anfragen.",
  keywords: [
    "Webdesign", "Social Media Agentur", "Branding", "Digital Agentur",
    "Website erstellen", "Logo Design", "SEO", "JR Agency Services", "Schwaigern",
  ],
  authors: [{ name: "JR Agency Services" }],
  creator: "JR Agency Services",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.jragencyservices.com",
    siteName: "JR Agency Services",
    title: "JR Agency Services – Webdesign, Social Media & Branding",
    description:
      "Professionelles Webdesign, Social Media Management und Branding für Unternehmen. Kostenlose Demo in 48 Stunden.",
    images: [{ url: "/images/JR Logo (glow effekt) PNG.png", width: 1200, height: 630, alt: "JR Agency Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JR Agency Services – Webdesign, Social Media & Branding",
    description: "Professionelles Webdesign, Social Media und Branding. Kostenlose Demo in 48 Stunden.",
    images: ["/images/JR Logo (glow effekt) PNG.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://www.jragencyservices.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "JR Agency Services",
              description: "Webdesign, Social Media Management und Branding für Unternehmen.",
              url: "https://www.jragencyservices.com",
              telephone: "+4901783993437",
              email: "info@jragencyservices.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Im Eselsberg 17",
                addressLocality: "Schwaigern",
                postalCode: "74193",
                addressCountry: "DE",
              },
              sameAs: ["https://www.instagram.com/jragencyservices/"],
              priceRange: "€€",
              servesCuisine: undefined,
            }),
          }}
        />
        <ScrollToTop />
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
