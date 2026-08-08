import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: change this to match your GitHub repo name, e.g. "/my-portfolio/"
  // If you deploy to a custom domain or user page (username.github.io), set base to "/".
  base: "/",
});
