import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const distRoot = join(projectRoot, "dist");
const template = await readFile(join(distRoot, "index.html"), "utf8");
const routes = JSON.parse(await readFile(join(projectRoot, "src/seo/routes.json"), "utf8"));
const siteUrl = "https://nexiamorocco.com";
const serviceSource = await readFile(join(projectRoot, "src/data/servicePages.ts"), "utf8");
const serviceModule = await import(`data:text/javascript;base64,${Buffer.from(ts.transpileModule(serviceSource, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 }
}).outputText).toString("base64")}`);
const servicePages = serviceModule.servicePages;
const servicePageBySlug = new Map(servicePages.map((page) => [page.slug, page]));

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const routeHref = (slug) => `${siteUrl}/${slug}/`;

function renderList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderStaticContent(path, seo) {
  if (!seo.robots.startsWith("index")) return "";

  const slug = path.slice(1);
  const service = servicePageBySlug.get(slug);
  const navigation = `
    <nav aria-label="Navigation principale">
      <a href="${siteUrl}/">Accueil</a>
      <a href="${siteUrl}/domaines-expertise/">Domaines d'expertise</a>
      <a href="${siteUrl}/a-propos/">À propos</a>
      <a href="${siteUrl}/perspectives-mondiales/">Perspectives</a>
      <a href="${siteUrl}/contact/">Contact</a>
    </nav>`;
  const footer = `
    <footer>
      <p><strong>Nexia Morocco</strong></p>
      <address>Beauséjour Lot Amina Rue Madiak Toudgha n°43 Hay Essalam, Casablanca, Maroc</address>
      <p><a href="tel:+212522364377">+212 5 22 36 43 77</a> · <a href="mailto:contact@nexiafiducia.ma">contact@nexiafiducia.ma</a></p>
    </footer>`;

  if (!service) {
    const heading = seo.title.split(" | ")[0];
    return `<div class="seo-static-shell">
      <header><a class="seo-brand" href="${siteUrl}/" aria-label="Nexia Morocco — Accueil">Nexia Morocco</a>${navigation}</header>
      <main>
        <p class="seo-eyebrow">Audit · Expertise comptable · Fiscalité · Conseil</p>
        <h1>${escapeHtml(heading)}</h1>
        <p class="seo-lead">${escapeHtml(seo.description)}</p>
        <p><a class="seo-cta" href="${siteUrl}/contact/">Échanger avec un expert</a></p>
      </main>${footer}
    </div>`;
  }

  const related = service.related.map((relatedSlug) => {
    const relatedPage = servicePageBySlug.get(relatedSlug);
    return `<li><a href="${routeHref(relatedSlug)}">${escapeHtml(relatedPage?.title ?? relatedSlug)}</a></li>`;
  }).join("");

  return `<div class="seo-static-shell">
    <header><a class="seo-brand" href="${siteUrl}/" aria-label="Nexia Morocco — Accueil">Nexia Morocco</a>${navigation}</header>
    <main>
      <nav class="seo-breadcrumb" aria-label="Fil d'Ariane"><a href="${siteUrl}/">Accueil</a> / <a href="${siteUrl}/domaines-expertise/">Domaines d'expertise</a> / <span>${escapeHtml(service.title)}</span></nav>
      <p class="seo-eyebrow">${escapeHtml(service.eyebrow)}</p>
      <h1>${escapeHtml(service.title)}</h1>
      <p class="seo-lead">${escapeHtml(service.intro)}</p>
      <p><a class="seo-cta" href="${siteUrl}/contact/?service=${encodeURIComponent(service.serviceValue)}">Parler à un expert</a></p>
      <section><h2>Quand nous solliciter</h2>${renderList(service.situations)}</section>
      <section><h2>Notre accompagnement</h2>${renderList(service.services)}</section>
      <section><h2>Une méthode claire, du cadrage à la restitution</h2>
        <ol>${service.process.map((step) => `<li><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.text)}</p></li>`).join("")}</ol>
      </section>
      <section><h2>Livrables</h2>${renderList(service.deliverables)}</section>
      <section><h2>Questions fréquentes</h2>
        ${service.faq.map((item) => `<article><h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.answer)}</p></article>`).join("")}
      </section>
      <section><h2>Expertises complémentaires</h2><ul>${related}</ul></section>
      <section><h2>Parlons de votre projet au Maroc</h2><p>Décrivez votre besoin à notre équipe. Nous vous recontactons pour cadrer les enjeux, le calendrier et les livrables attendus.</p><p><a class="seo-cta" href="${siteUrl}/contact/?service=${encodeURIComponent(service.serviceValue)}">Demander un premier échange</a></p></section>
    </main>${footer}
  </div>`;
}

const staticStyles = `<style id="seo-static-styles">
  .seo-static-shell{font-family:Arial,sans-serif;color:#171717;line-height:1.6;max-width:1180px;margin:auto;padding:0 24px}.seo-static-shell header{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:24px 0;border-bottom:1px solid #ddd}.seo-static-shell nav{display:flex;flex-wrap:wrap;gap:18px}.seo-static-shell a{color:#493078}.seo-brand{font-size:1.35rem;font-weight:700;text-decoration:none}.seo-static-shell main{max-width:850px;padding:64px 0}.seo-static-shell h1{font-size:clamp(2.25rem,6vw,4.5rem);line-height:1.05;margin:.2em 0}.seo-static-shell h2{font-size:1.7rem;margin-top:2.5em}.seo-static-shell h3{font-size:1.1rem;margin-bottom:.2em}.seo-eyebrow{text-transform:uppercase;letter-spacing:.08em;color:#69518f;font-weight:700}.seo-lead{font-size:1.25rem;max-width:760px}.seo-cta{display:inline-block;background:#493078;color:#fff!important;padding:12px 20px;text-decoration:none;font-weight:700}.seo-breadcrumb{font-size:.9rem;margin-bottom:28px}.seo-static-shell li{margin:.55em 0}.seo-static-shell footer{border-top:1px solid #ddd;padding:32px 0 48px}.seo-static-shell address{font-style:normal}@media(max-width:760px){.seo-static-shell header{align-items:flex-start;flex-direction:column}.seo-static-shell main{padding:40px 0}}
</style>`;

function replaceMeta(html, selector, value) {
  const escaped = escapeHtml(value);
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<meta\\s+[^>]*${escapedSelector}[^>]*>`, "i");
  return pattern.test(html)
    ? html.replace(pattern, `<meta ${selector} content="${escaped}" />`)
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
  const service = servicePageBySlug.get(path.slice(1));
  if (seo.schemaType === "Service" && service) {
    const schema = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${canonical}#service`,
          name: service.title,
          description: seo.description,
          url: canonical,
          areaServed: { "@type": "Country", name: "Maroc" },
          provider: {
            "@type": "AccountingService",
            "@id": `${siteUrl}/#organization`,
            name: "Nexia Morocco",
            url: siteUrl,
            telephone: "+212522364377",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Beauséjour Lot Amina Rue Madiak Toudgha n°43 Hay Essalam",
              addressLocality: "Casablanca",
              addressCountry: "MA"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.5720521,
              longitude: -7.6589182
            }
          }
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` },
            { "@type": "ListItem", position: 2, name: "Domaines d'expertise", item: `${siteUrl}/domaines-expertise/` },
            { "@type": "ListItem", position: 3, name: service.title, item: canonical }
          ]
        },
        {
          "@type": "FAQPage",
          mainEntity: service.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
          }))
        }
      ]
    }).replaceAll("<", "\\u003c");
    html = html.replace("</head>", `    <script type="application/ld+json">${schema}</script>\n  </head>`);
  }
  const staticContent = renderStaticContent(path, seo);
  if (staticContent) {
    html = html.replace("</head>", `    ${staticStyles}\n  </head>`);
    html = html.replace(/<div\s+id=["']root["']>\s*<\/div>/i, `<div id="root">${staticContent}</div>`);
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

for (const [path, seo] of Object.entries(routes)) {
  if (!seo.robots.startsWith("index")) continue;
  const output = path === "/" ? join(distRoot, "index.html") : join(distRoot, path.slice(1), "index.html");
  const generated = await readFile(output, "utf8");
  if (!generated.includes("<main>") || !generated.includes("<h1>")) {
    throw new Error(`Missing crawlable HTML content for ${path}`);
  }
}

console.log(`Generated ${Object.keys(routes).length} route pages and 404.html with crawlable HTML fallbacks`);
