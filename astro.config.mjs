// @ts-check

import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",

  adapter: cloudflare({
    prerenderEnvironment: "workerd",
  }),

  vite: {
    plugins: [tailwindcss()],

    ssr: {
      target: "webworker",
    },
  },
});
