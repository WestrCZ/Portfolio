// Central GoatCounter wrapper. Every tracked interaction in the app goes
// through this single function — components should never call
// `window.goatcounter` directly, so the "does the script exist yet"
// guard only has to live in one place.
export const trackEvent = (eventName, options = {}) => {
  if (typeof window !== "undefined" && window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({
      path: eventName,
      event: true,
      ...options,
    });
  }
};
