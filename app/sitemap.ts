import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.jragencyservices.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/webdesign`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/social-media`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/branding`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/anfragen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}