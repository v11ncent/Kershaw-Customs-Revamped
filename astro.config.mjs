import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kershawcustoms.com/",
  experimental: {
    assets: true,
  },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "always", // https://github.com/withastro/roadmap/discussions/343#discussioncomment-5539608
  },
});
