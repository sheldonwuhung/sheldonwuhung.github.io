import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/.astro/**', '**/.wrangler/**', '**/dist/**'],
      },
    },
  },

  adapter: cloudflare(),
});