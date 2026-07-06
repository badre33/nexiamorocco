// Helper de suivi d'événements Google Analytics 4 (gtag.js chargé dans index.html).
// La balise GA4 (G-GQD0HJSZEC) expose une fonction globale `window.gtag`.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Envoie un événement personnalisé à GA4 (sans planter si gtag n'est pas chargé). */
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

/**
 * Suit un clic sur un bouton WhatsApp.
 * @param location Emplacement du bouton (ex : "footer", "contact_hero")
 */
export function trackWhatsAppClick(location: string): void {
  trackEvent("whatsapp_click", { link_location: location });
}

export {};
