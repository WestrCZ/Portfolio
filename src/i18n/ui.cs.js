// =========================================================================
// ui.cs.js
//
// Czech UI copy: labels, headings and short interface strings — everything
// that is part of the *chrome* around the content, not the portfolio
// content itself (that lives in portfolioData.cs.js).
//
// Keep the shape of this file in sync with ui.en.js.
// Content may differ, schema must not.
// =========================================================================

export const ui = {
  nav: {
    experience: "Praxe",
    projects: "Projekty",
    stack: "Stack",
    contact: "Kontakt",
    writeEmail: "Napsat",
    languageSwitcherLabel: "Výběr jazyka",
  },
  skipLink: "Přeskočit na hlavní obsah",
  hero: {
    emailLabel: "Email",
  },
  terminal: {
    status: "stav",
    available: "dostupný",
  },
  experience: {
    eyebrow: "01 · Komerční praxe",
    title: "Kde jsem pracoval",
  },
  projects: {
    eyebrow: "02 · Projekty",
    title: "Na čem jsem dělal mimo práci",
  },
  stack: {
    eyebrow: "03 · Technologie",
    title: "Se kterými nástroji pracuji",
  },
  contact: {
    eyebrow: "04 · Kontakt",
    title: "Pojďme spolu něco postavit.",
    intro:
      "{availability}. Ozvěte se, pokud hledáte backendového vývojáře se smyslem pro architekturu a bezpečnost.",
    writeEmail: "Napsat email",
  },
  footer: {
    builtWith: "Postaveno v React + Vite + Tailwind.",
  },
  seo: {
    title: "Janek Hujer - Portfolio",
    description: "Janek Hujer — {title}. Portfolio a přehled komerční praxe.",
  },
};
