import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.jragencyservices.com";
  const leistungen = ["design", "mobile", "seo", "datenschutz", "betreuung"];

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...leistungen.map((slug) => ({
      url: `${base}/leistungen/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
