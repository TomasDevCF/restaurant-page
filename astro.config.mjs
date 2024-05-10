import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import db from "@astrojs/db";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), db(), sitemap()],
  site: "https://loscabritos.vercel.app",
  output: "server",
  server: {
    host: true
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
      imageService: true,
      devImageService: 'squoosh',
    },
  })
});