import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sheldonwuhung.github.io",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/.astro/**', '**/.wrangler/**', '**/dist/**'],
      },
    },
  },
});
