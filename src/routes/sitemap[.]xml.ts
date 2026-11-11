import { createFileRoute } from "@tanstack/react-router";

const PATHS = [
  "/",
  "/summit",
  "/quantum",
  "/ai",
  "/mindset",
  "/speakers",
  "/panels",
  "/expo",
  "/project-expo",
  "/startup-expo",
  "/future-tech-20",
  "/awards",
  "/global-connect",
  "/future-talent",
  "/partners",
  "/contact",
  "/connect",
  "/privacy",
  "/terms",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PATHS.map(
  (p) =>
    `  <url><loc>${origin}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`,
).join("\n")}
</urlset>`;
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
