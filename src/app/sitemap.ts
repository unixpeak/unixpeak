import type { MetadataRoute } from "next";
import { tours } from "@/data/tours";

const baseUrl = "https://unixpeaktravel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/program-tours",
    "/tour-packages",
    "/about",
    "/faq",
    "/contact",
  ];

  const tourRoutes = tours.map((tour) => `/program-tours/${tour.slug}`);
  const routes = [...staticRoutes, ...tourRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
