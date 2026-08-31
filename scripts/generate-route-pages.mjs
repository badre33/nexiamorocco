import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const distRoot = join(projectRoot, "dist");
const template = await readFile(join(distRoot, "index.html"), "utf8");
const routes = JSON.parse(await readFile(join(projectRoot, "src/seo/routes.json"), "utf8"));
const siteUrl = "https://nexiamorocco.com";

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

function replaceMeta(html, selector, value) {
  const escaped = escapeHtml(value);
  const pattern = new RegExp(`(<meta\\s+${selector}=["'][^"']+["']\\s+content=["'])[^"']*(["']\\s*\\/?>)`, "i");
  return pattern.test(html)
    ? html.replace(pattern, `$1${escaped}$2`)
    : html.replace("</head>", `    <meta ${selector} content="${escaped}" />\n  </head>`);
}

function renderRoute(path, seo) {
  const canonical = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}/`;
  let html = template
    .replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<link\s+rel=["']alternate["'][^>]*hreflang=["']fr["'][^>]*>/i, `<link rel="alternate" hreflang="fr" href="${canonical}" />`)
    .replace(/<link\s+rel=["']alternate["'][^>]*hreflang=["']en["'][^>]*>/i, `<link rel="alternate" hreflang="en" href="${canonical}?lang=en" />`)
    .replace(/<link\s+rel=["']alternate["'][^>]*hreflang=["']x-default["'][^>]*>/i, `<link rel="alternate" hreflang="x-default" href="${canonical}" />`);

  html = replaceMeta(html, 'name="description"', seo.description);
  html = replaceMeta(html, 'name="robots"', seo.robots);
  html = replaceMeta(html, 'property="og:type"', seo.type);
  html = replaceMeta(html, 'property="og:url"', canonical);
  html = replaceMeta(html, 'property="og:title"', seo.title);
  html = replaceMeta(html, 'property="og:description"', seo.description);
  html = replaceMeta(html, 'name="twitter:url"', canonical);
  html = replaceMeta(html, 'name="twitter:title"', seo.title);
  html = replaceMeta(html, 'name="twitter:description"', seo.description);
  if (seo.schemaType === "Service") {
    const schema = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: seo.title.split(" | ")[0],
      description: seo.description,
      url: canonical,
      areaServed: { "@type": "Country", name: "Maroc" },
      provider: {
        "@type": "AccountingService",
        name: "Nexia Morocco",
        url: siteUrl,
        telephone: "+212522364377",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Beauséjour, Lot Amina, Rue Madiak Toudgha n°43, Hay Essalam",
          addressLocality: "Casablanca",
          addressCountry: "MA"
        }
      }
    }).replaceAll("<", "\\u003c");
    html = html.replace("</head>", `    <script type="application/ld+json">${schema}</script>\n  </head>`);
  }
  return html;
}

for (const [path, seo] of Object.entries(routes)) {
  if (path === "/") {
    await writeFile(join(distRoot, "index.html"), renderRoute(path, seo));
    continue;
  }
  const output = join(distRoot, path.slice(1), "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, renderRoute(path, seo));
}

const notFound = renderRoute("/404", {
  title: "Page introuvable | Nexia Morocco",
  description: "La page demandée est introuvable.",
  robots: "noindex, nofollow",
  type: "website",
});
await writeFile(join(distRoot, "404.html"), notFound);

console.log(`Generated ${Object.keys(routes).length} route pages and 404.html`);
