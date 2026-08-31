import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { captureAttribution, trackEvent } from "@/lib/analytics";

const SERVICE_PATHS = [
  "/domaines-expertise",
  "/expertise-comptable-audit-casablanca",
  "/commissaire-aux-comptes-maroc",
  "/honoraires-expert-comptable-casablanca",
  "/externalisation-paie-casablanca",
  "/creer-societe-maroc",
];

function trackingLocation(link: HTMLAnchorElement) {
  return (
    link.dataset.trackingLocation ||
    link.closest<HTMLElement>("[data-tracking-section]")?.dataset.trackingSection ||
    "page"
  );
}

export default function ConversionTracker() {
  const location = useLocation();
  const firstPage = useRef(true);

  useEffect(() => {
    captureAttribution();
  }, []);

  useEffect(() => {
    if (firstPage.current) {
      firstPage.current = false;
      return;
    }
    trackEvent("page_view", { page_location: window.location.href });
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.href;
      const locationName = trackingLocation(link);
      const linkText = link.textContent?.trim().replace(/\s+/g, " ").slice(0, 100) || "";

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_location: locationName });
        return;
      }
      if (href.startsWith("mailto:")) {
        trackEvent("email_click", { link_location: locationName });
        return;
      }
      if (href.includes("wa.me/")) {
        trackEvent("whatsapp_click", { link_location: locationName });
        return;
      }
      if (href.includes("google.com/maps")) {
        trackEvent("map_click", { link_location: locationName });
        return;
      }
      if (/\.(pdf|docx?|xlsx?|pptx?)(\?|$)/i.test(href)) {
        trackEvent("file_download", { link_url: href, link_text: linkText, link_location: locationName });
        return;
      }

      try {
        const url = new URL(href);
        if (url.origin !== window.location.origin) return;
        const path = url.pathname.replace(/\/$/, "") || "/";
        if (path === "/contact") {
          trackEvent("cta_click", { cta_text: linkText, link_location: locationName });
        } else if (SERVICE_PATHS.includes(path)) {
          trackEvent("service_interest", { service_path: path, link_location: locationName });
        }
      } catch {
        // Ignore malformed links.
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
