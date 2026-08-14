// =========================================================================
// I18nProvider.jsx
//
// React wiring around the framework-agnostic helpers in i18n.js. This is
// where "locale" becomes actual React state, and where that state gets
// synced with the URL, localStorage, <html lang> and SEO metadata.
//
// See the project documentation ("Jak funguje i18n v tomto projektu") for
// a full walkthrough aimed at a backend developer who doesn't know React
// well — this file is intentionally kept small so that walkthrough can
// map 1:1 onto the code below.
// =========================================================================

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LOCALE,
  buildLocalizedPath,
  getLocaleFromPath,
  interpolate,
  resolveInitialLocale,
  setStoredLocale,
} from "./i18n.js";
import { ui as uiCs } from "./ui.cs.js";
import { ui as uiEn } from "./ui.en.js";
import { portfolioData as dataCs } from "./portfolioData.cs.js";
import { portfolioData as dataEn } from "./portfolioData.en.js";
import { applySeoMetadata } from "./seo.js";

const UI_BY_LOCALE = { cs: uiCs, en: uiEn };
const DATA_BY_LOCALE = { cs: dataCs, en: dataEn };

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(() =>
    typeof window === "undefined" ? DEFAULT_LOCALE : resolveInitialLocale(window.location.pathname)
  );

  // The only thing components need to call to switch languages. Everything
  // else (URL, localStorage, <html lang>, SEO tags) reacts to the state
  // change via the effects below.
  const setLocale = useCallback((nextLocale) => {
    setLocaleState((current) => (current === nextLocale ? current : nextLocale));
  }, []);

  // Keep the URL, localStorage and <html lang> in sync whenever `locale`
  // changes (including the very first render).
  useEffect(() => {
    setStoredLocale(locale);
    document.documentElement.lang = locale;

    const targetPath = buildLocalizedPath(locale);
    const currentLocaleInUrl = getLocaleFromPath(window.location.pathname);

    if (currentLocaleInUrl !== locale) {
      // pushState (not replaceState) so switching language is a normal,
      // back-button-friendly browser navigation. The one-time root ("/")
      // normalization below uses replaceState instead — see that effect
      // for why.
      window.history.pushState({}, "", targetPath + window.location.search + window.location.hash);
    }
  }, [locale]);

  // One-time, first-render-only step: if the app was opened at the bare
  // root (no /cs/ or /en/ segment — e.g. "/" or the configured base path),
  // normalize the address bar to the resolved locale's URL. The content
  // for `locale` is already what's on screen, so this only rewrites the
  // URL bar — no navigation, no reload, no visible redirect.
  useEffect(() => {
    if (getLocaleFromPath(window.location.pathname) === null) {
      const targetPath = buildLocalizedPath(locale);
      window.history.replaceState({}, "", targetPath + window.location.search + window.location.hash);
    }
    // Intentionally runs only once, on mount — this is a startup
    // normalization step, not a reaction to locale changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Support the browser's Back/Forward buttons between /cs/ and /en/.
  useEffect(() => {
    function handlePopState() {
      const nextLocale = getLocaleFromPath(window.location.pathname);
      if (nextLocale) {
        setLocaleState(nextLocale);
      }
    }
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const t = UI_BY_LOCALE[locale];
  const data = DATA_BY_LOCALE[locale];

  // Sync document.title, meta description, canonical and hreflang links
  // whenever the locale (or the data it depends on) changes.
  useEffect(() => {
    applySeoMetadata(locale, t, data.profile);
  }, [locale, t, data]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      data,
      // Re-exposed so components can interpolate UI strings (e.g.
      // t.contact.intro) without importing the i18n core directly.
      interpolate,
    }),
    [locale, setLocale, t, data]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// Components read the active locale, UI strings and portfolio data through
// this hook instead of importing data files or branching on language
// themselves — see ExperienceSection.jsx or NavBar.jsx for examples.
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
