// =========================================================================
// scripts/postbuild.mjs
//
// GitHub Pages workaround for /cs/ and /en/ without React Router.
//
// Vite's build only ever produces one dist/index.html. GitHub Pages is a
// static file host: it does not know how to fall back to index.html for
// arbitrary paths the way a typical SPA dev server or Node/nginx server
// does. So a direct request (or a page refresh) for /cs/ or /en/ would
// normally 404, because no such file exists on disk.
//
// The fix used here is deliberately simple: after `vite build`, copy the
// single dist/index.html into dist/cs/index.html and dist/en/index.html.
// All three files are byte-identical. This works because:
//
//   - Vite emits every asset reference in index.html as an ABSOLUTE path
//     (prefixed with the configured `base`, e.g. "/assets/main.abc123.js"),
//     never a relative one — so the same HTML file loads the same JS/CSS
//     bundle correctly no matter which directory GitHub Pages serves it
//     from.
//   - Once that bundle runs, src/i18n/i18n.js reads window.location.pathname
//     to figure out which locale ("cs" or "en") the visitor is on, and
//     I18nProvider renders the matching content — see
//     "Jak funguje /cs/ a /en/ bez React Routeru" in the docs for the full
//     explanation.
//
// No routing library, no server-side rewrite rule, no 404.html redirect
// trick — just three copies of one static file.
// =========================================================================

import { copyFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const distDir = path.resolve(process.cwd(), "dist");
const sourceIndex = path.join(distDir, "index.html");

const locales = ["cs", "en"];

async function run() {
  if (!existsSync(sourceIndex)) {
    console.error(`[postbuild] Expected ${sourceIndex} to exist — did "vite build" run first?`);
    process.exit(1);
  }

  for (const locale of locales) {
    const targetDir = path.join(distDir, locale);
    await mkdir(targetDir, { recursive: true });
    const targetIndex = path.join(targetDir, "index.html");
    await copyFile(sourceIndex, targetIndex);
    console.log(`[postbuild] dist/index.html -> dist/${locale}/index.html`);
  }
}

await run();
