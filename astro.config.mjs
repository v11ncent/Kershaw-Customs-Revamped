import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://lucky-chimera-6ead29.netlify.app/",
  experimental: {
    assets: true,
  },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "always", // https://github.com/withastro/roadmap/discussions/343#discussioncomment-5539608
  },
});
