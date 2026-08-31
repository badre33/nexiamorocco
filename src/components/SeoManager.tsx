import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routeSeo from "@/seo/routes.json";

type SeoEntry = {
  title: string;
  description: string;
  robots: string;
  type: string;
  schemaType?: string;
};

const SITE_URL = "https://nexiamorocco.com";
const SOCIAL_IMAGE = `${SITE_URL}/nexia-morocco-logo.png`;

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    if (hreflang) element.hreflang = hreflang;
    document.head.appendChild(element);
  }
  element.href = href;
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace(/\/$/, "") || "/";
    const seo: SeoEntry = (routeSeo as Record<string, SeoEntry>)[path] ?? {
      title: "Page introuvable | Nexia Morocco",
      description: "La page demandée est introuvable.",
      robots: "noindex, nofollow",
      type: "website",
    };
    const canonical = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`;
    const language = new URLSearchParams(location.search).get("lang") === "en" ? "en" : "fr";

    document.documentElement.lang = language;
    document.title = seo.title;
    setMeta('meta[name="description"]', "name", "description", seo.description);
    setMeta('meta[name="robots"]', "name", "robots", seo.robots);
    setMeta('meta[property="og:type"]', "property", "og:type", seo.type);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    setMeta('meta[property="og:description"]', "property", "og:description", seo.description);
    setMeta('meta[property="og:image"]', "property", "og:image", SOCIAL_IMAGE);
    setMeta('meta[name="twitter:url"]', "name", "twitter:url", canonical);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", seo.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", SOCIAL_IMAGE);
    setLink("canonical", canonical);
    setLink("alternate", canonical, "fr");
    setLink("alternate", `${canonical}?lang=en`, "en");
    setLink("alternate", canonical, "x-default");
    const schemaId = "route-structured-data";
    document.getElementById(schemaId)?.remove();
    if (seo.schemaType === "Service") {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: seo.title.split(" | ")[0],
        description: seo.description,
        url: canonical,
        areaServed: { "@type": "Country", name: "Maroc" },
        provider: { "@type": "AccountingService", name: "Nexia Morocco", url: SITE_URL, telephone: "+212522364377" },
      });
      document.head.appendChild(script);
    }
  }, [location.pathname, location.search]);

  return null;
}
