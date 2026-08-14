// =========================================================================
// i18n.js
//
// Minimal, dependency-free i18n core. No react-i18next, no i18next, no
// router library — this file only knows how to:
//
//   - list the supported locales,
//   - read/write the persisted language preference (localStorage),
//   - work out which locale a given URL pathname points to,
//   - build a locale-prefixed pathname,
//   - interpolate "{token}" placeholders into UI strings.
//
// All React-specific wiring (context, state, effects) lives in
// I18nProvider.jsx. Keeping this file framework-agnostic makes it easy to
// read top-to-bottom and to unit-test in isolation if that's ever needed.
// =========================================================================

export const LOCALES = ["cs", "en"];
export const DEFAULT_LOCALE = "cs";

// localStorage key. Namespaced with "portfolio-" so it doesn't collide with
// anything else that might live in localStorage for this origin.
export const STORAGE_KEY = "portfolio-language";

export function isSupportedLocale(value) {
  return LOCALES.includes(value);
}

// Vite exposes the `base` configured in vite.config.js as import.meta.env.BASE_URL
// at build time, always with a trailing slash (e.g. "/" or "/Portfolio/").
// Every path helper below is built relative to it, so locale routing keeps
// working no matter what base path the site is deployed under.
export function getBasePath() {
  return import.meta.env.BASE_URL;
}

// Given the current pathname (e.g. "/Portfolio/en/" or "/cs/"), work out
// which locale it points to. Returns null if the path has no locale segment
// (this is the case at the bare root, e.g. "/" or "/Portfolio/").
export function getLocaleFromPath(pathname) {
  const base = getBasePath();
  const withoutBase = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, "");
  const [firstSegment] = withoutBase.split("/");
  return isSupportedLocale(firstSegment) ? firstSegment : null;
}

// Builds the absolute pathname for a given locale, preserving the deployed
// base path, e.g. buildLocalizedPath("en") -> "/Portfolio/en/".
export function buildLocalizedPath(locale) {
  const base = getBasePath();
  return `${base}${locale}/`;
}

export function getStoredLocale() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return isSupportedLocale(value) ? value : null;
  } catch {
    // localStorage can throw (private browsing, disabled storage, etc.) —
    // treat that the same as "nothing stored".
    return null;
  }
}

export function setStoredLocale(locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore write failures — the language still works for this page view,
    // it just won't be remembered on the next visit.
  }
}

// Resolves the locale to use on first load, per the priority rules from the
// spec: URL segment > localStorage > default locale (cs).
export function resolveInitialLocale(pathname) {
  return getLocaleFromPath(pathname) ?? getStoredLocale() ?? DEFAULT_LOCALE;
}

// Tiny interpolation helper: replaces "{token}" occurrences in `template`
// with values[token]. Intentionally not a templating engine — just enough
// for strings like "{availability}. Ozvěte se, pokud...".
export function interpolate(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (match, token) =>
    Object.prototype.hasOwnProperty.call(values, token) ? String(values[token]) : match
  );
}
