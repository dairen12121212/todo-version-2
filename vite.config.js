import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/todo-version-2",
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
});
