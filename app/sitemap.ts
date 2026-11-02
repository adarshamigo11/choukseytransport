import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  const pages: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/packers-and-movers", priority: 0.9, freq: "weekly" },
    { path: "/house-shifting", priority: 0.9, freq: "weekly" },
    { path: "/office-shifting", priority: 0.8, freq: "monthly" },
    { path: "/local-shifting", priority: 0.8, freq: "weekly" },
    { path: "/domestic-relocation", priority: 0.8, freq: "monthly" },
    { path: "/car-transportation", priority: 0.8, freq: "monthly" },
    { path: "/bike-transportation", priority: 0.7, freq: "monthly" },
    { path: "/commercial-transportation", priority: 0.7, freq: "monthly" },
    { path: "/packing-unpacking", priority: 0.7, freq: "monthly" },
    { path: "/about-us", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
  ];

  return pages.map(({ path, priority, freq }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
