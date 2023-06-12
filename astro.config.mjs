import { defineConfig } from "astro/config";
import critters from "astro-critters";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://lucky-chimera-6ead29.netlify.app/",
  experimental: {
    assets: true,
  },
  integrations: [critters(), sitemap()],
});
