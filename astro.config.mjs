import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://onrirr.github.io",
  base: "tonga",
  integrations: [
    starlight({
      tableOfContents: false,
      title: "𐱃𐰆𐰭𐰀",
      pagination: false,
      logo: {
        src: "/logo.png",
      },
      social: {
        github: "https://github.com/onrirr",
      },
      sidebar: [
        {
          label: "Words",
          autogenerate: { directory: "words" },
        },
      ],
    }),
  ],
});
