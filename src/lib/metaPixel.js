// Meta (Facebook/Instagram) Pixel — scoped to the Worship Keys Challenge
// funnel only. Deliberately NOT added to index.html: that would load it
// site-wide on every route. Instead, WorshipKeysChallenge.jsx calls
// loadMetaPixel() itself on mount, so it only ever loads on this page.
const PIXEL_ID = "1467439141757190";

let loaded = false;

/**
 * Injects the Meta Pixel base script (idempotent — safe to call from an
 * effect that may re-run) and fires the standard PageView event.
 */
export function loadMetaPixel() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;

  /* eslint-disable */
  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */

  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
}

/**
 * Fires a Meta Pixel event. No-op if the pixel hasn't loaded (e.g. ad
 * blockers, or called before loadMetaPixel()) — never throws.
 *
 * NOTE: never call this with a "Purchase" event from the frontend.
 * Razorpay's Checkout success callback is not proof of payment (see
 * CLAUDE.md's non-negotiable rule) — only the backend's independent
 * verification is. Real Purchase conversion tracking belongs server-side,
 * via Meta's Conversions API from the Apps Script webhook handler, once
 * it has actually verified the payment with Razorpay.
 */
export function trackPixelEvent(eventName, params) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", eventName, params);
}
