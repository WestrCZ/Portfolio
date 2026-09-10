export const trackEvent = (eventName) => {
  if (typeof window !== "undefined" && window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({
      path: eventName,
      event: true,
    });
  }
};