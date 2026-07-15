import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const PATHS = [
  "/",
  "/about",
  "/services",
  "/services/buyers-advocacy",
  "/services/off-market",
  "/services/auction-bidding",
  "/services/negotiation",
  "/services/investment-advisory",
  "/services/portfolio-strategy",
  "/services/property-research",
  "/services/due-diligence",
  "/services/first-home-buyers",
  "/services/interstate",
  "/services/expats",
  "/services/smsf",
  "/services/vendor-advocacy",
  "/process",
  "/why-us",
  "/blog",
  "/blog/melbourne-volatility",
  "/blog/yield-vs-growth",
  "/blog/auction-psychology",
  "/contact",
  "/faqs",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PATHS.map(
          (p) =>
            `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${p === "/" ? "1.0" : "0.7"}</priority>\n  </url>`
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
