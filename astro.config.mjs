import { defineConfig } from "astro/config";
import critters from "astro-critters";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kershawcustoms.com",
  experimental: {
    assets: true
  },
  integrations: [critters(), sitemap()]
});