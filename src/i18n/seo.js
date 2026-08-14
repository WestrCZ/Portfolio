// =========================================================================
// seo.js
//
// Keeps document.title, the description meta tag, the canonical link and
// the hreflang alternate links in sync with the active locale.
//
// This is a handful of direct DOM updates, not a library — see the
// "Jak funguje SEO" section of the project documentation for why each tag
// matters and what its real limits are on a static single-page app.
// =========================================================================

import { LOCALES, buildLocalizedPath, interpolate } from "./i18n.js";

function upsertMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertAlternateLink(hreflang, href) {
  let el = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "alternate");
    el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertCanonicalLink(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function absoluteUrl(pathname) {
  return `${window.location.origin}${pathname}`;
}

const OG_LOCALE_BY_LOCALE = { cs: "cs_CZ", en: "en_US" };

// Called from I18nProvider whenever the active locale (or the data it
// derives from) changes.
export function applySeoMetadata(locale, t, profile) {
  const title = t.seo.title;
  const description = interpolate(t.seo.description, { title: profile.title });

  document.title = title;
  upsertMetaByName("description", description);

  const canonicalPath = buildLocalizedPath(locale);
  const canonicalUrl = absoluteUrl(canonicalPath);
  upsertCanonicalLink(canonicalUrl);

  // hreflang: tell search engines that /cs/ and /en/ are translations of
  // each other, plus an x-default pointing at the default language (cs).
  LOCALES.forEach((loc) => {
    upsertAlternateLink(loc, absoluteUrl(buildLocalizedPath(loc)));
  });
  upsertAlternateLink("x-default", absoluteUrl(buildLocalizedPath("cs")));

  upsertMetaByProperty("og:title", title);
  upsertMetaByProperty("og:description", description);
  upsertMetaByProperty("og:locale", OG_LOCALE_BY_LOCALE[locale]);
  upsertMetaByProperty("og:url", canonicalUrl);
}
