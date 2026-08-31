(function () {
  "use strict";

  var key = "nexia_first_touch_attribution";

  function captureAttribution() {
    try {
      var existing = window.localStorage.getItem(key);
      if (existing) return JSON.parse(existing);

      var params = new URLSearchParams(window.location.search);
      var source = params.get("utm_source") || "direct";
      var medium = params.get("utm_medium") || "none";
      if (params.get("gclid")) {
        source = "google";
        medium = "cpc";
      } else if (params.get("fbclid")) {
        source = "meta";
        medium = "paid_social";
      } else if (!params.get("utm_source") && document.referrer) {
        try {
          var hostname = new URL(document.referrer).hostname.replace(/^www\./, "");
          if (hostname && !hostname.endsWith("nexiamorocco.com") && !hostname.endsWith("nexiamorocco.ma")) {
            source = hostname;
            medium = "referral";
          }
        } catch (_) {}
      }

      var attribution = {
        type: "lead_attribution_v1",
        source: source,
        medium: medium,
        campaign: params.get("utm_campaign") || "",
        term: params.get("utm_term") || "",
        content: params.get("utm_content") || "",
        gclid: params.get("gclid") || "",
        fbclid: params.get("fbclid") || "",
        landing_page: window.location.pathname + window.location.search,
        referrer: document.referrer,
        captured_at: new Date().toISOString()
      };
      window.localStorage.setItem(key, JSON.stringify(attribution));
      return attribution;
    } catch (_) {
      return { source: "unknown", medium: "unknown", landing_page: window.location.pathname };
    }
  }

  var attribution = captureAttribution();

  function track(name, params) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, Object.assign({
      page_path: window.location.pathname,
      page_title: document.title,
      language: document.documentElement.lang || "fr",
      lead_source: attribution.source,
      lead_medium: attribution.medium,
      campaign_name: attribution.campaign || undefined,
      landing_page: attribution.landing_page
    }, params || {}));
  }

  track("service_interest", {
    interaction: "landing_page_view",
    service_path: window.location.pathname
  });

  document.addEventListener("click", function (event) {
    var target = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!target) return;
    var href = target.href;
    if (href.indexOf("tel:") === 0) {
      track("phone_click", { link_location: "seo_landing_page" });
    } else if (href.indexOf("/contact") !== -1) {
      track("cta_click", {
        link_location: "seo_landing_page",
        cta_text: (target.textContent || "").trim().slice(0, 100)
      });
    }
  });
})();
