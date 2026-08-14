import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: change this to match your GitHub repo name, e.g. "/my-portfolio/"
  // If you deploy to a custom domain or user page (username.github.io), set base to "/".
  //
  // This value also drives the /cs/ and /en/ locale routing (see
  // src/i18n/i18n.js, which reads it back via import.meta.env.BASE_URL) and
  // the postbuild step in scripts/postbuild.mjs — so /cs/ and /en/ will
  // automatically become "<base>cs/" and "<base>en/" without any further
  // changes if you update this value.
  base: "/",
});
