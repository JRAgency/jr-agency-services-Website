import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

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
  title: "JR Agency Services – Ihre Digital-Agentur",
  description:
    "Webdesign, Social Media Management und Branding für Ihr Unternehmen. Professionelle digitale Lösungen aus einer Hand.",
  keywords: ["Webdesign", "Social Media", "Branding", "Agentur", "JR Agency"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <ScrollToTop />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
