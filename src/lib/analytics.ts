// GA4 conversion tracking. Never send names, emails, phone numbers or messages.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export interface LeadAttribution {
  type: "lead_attribution_v1";
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
  gclid: string;
  fbclid: string;
  landing_page: string;
  referrer: string;
  captured_at: string;
}

const ATTRIBUTION_KEY = "nexia_first_touch_attribution";

function safeStorage(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function inferSource(params: URLSearchParams, referrer: string) {
  const utmSource = params.get("utm_source");
  if (utmSource) return { source: utmSource, medium: params.get("utm_medium") || "campaign" };
  if (params.get("gclid")) return { source: "google", medium: "cpc" };
  if (params.get("fbclid")) return { source: "meta", medium: "paid_social" };
  if (referrer) {
    try {
      const hostname = new URL(referrer).hostname.replace(/^www\./, "");
      if (hostname && !hostname.endsWith("nexiamorocco.com") && !hostname.endsWith("nexiamorocco.ma")) {
        return { source: hostname, medium: "referral" };
      }
    } catch {
      // Invalid referrers are treated as direct traffic.
    }
  }
  return { source: "direct", medium: "none" };
}

export function captureAttribution(): LeadAttribution {
  const storage = safeStorage();
  const existing = storage?.getItem(ATTRIBUTION_KEY);
  if (existing) {
    try {
      return JSON.parse(existing) as LeadAttribution;
    } catch {
      storage?.removeItem(ATTRIBUTION_KEY);
    }
  }

  const params = new URLSearchParams(window.location.search);
  const inferred = inferSource(params, document.referrer);
  const attribution: LeadAttribution = {
    type: "lead_attribution_v1",
    source: inferred.source,
    medium: inferred.medium,
    campaign: params.get("utm_campaign") || "",
    term: params.get("utm_term") || "",
    content: params.get("utm_content") || "",
    gclid: params.get("gclid") || "",
    fbclid: params.get("fbclid") || "",
    landing_page: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer,
    captured_at: new Date().toISOString(),
  };
  storage?.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  return attribution;
}

export function getAttribution(): LeadAttribution {
  if (typeof window === "undefined") {
    return {
      type: "lead_attribution_v1",
      source: "unknown",
      medium: "unknown",
      campaign: "",
      term: "",
      content: "",
      gclid: "",
      fbclid: "",
      landing_page: "",
      referrer: "",
      captured_at: "",
    };
  }
  return captureAttribution();
}

function attributionEventParams() {
  const attribution = getAttribution();
  return {
    lead_source: attribution.source,
    lead_medium: attribution.medium,
    campaign_name: attribution.campaign || undefined,
    campaign_term: attribution.term || undefined,
    campaign_content: attribution.content || undefined,
    landing_page: attribution.landing_page,
  };
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      page_path: window.location.pathname,
      page_title: document.title,
      language: document.documentElement.lang || "fr",
      ...attributionEventParams(),
      ...params,
    });
  }
}

export function trackGenerateLead(service: string): void {
  trackEvent("generate_lead", {
    lead_method: "contact_form",
    service: service || "non_precise",
  });
}

export function serializeLeadAttribution(): string {
  return JSON.stringify(getAttribution());
}

export {};
