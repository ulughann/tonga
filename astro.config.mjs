import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollectionCache: true,
  },
  integrations: [
    starlight({
      defaultLocale: "root",
      locales: {
        root: {
          lang: "tr-TR",
          label: "Türkçe",
        },
        en: {
          lang: "en-US",
          label: "English",
        }
      },
      tableOfContents: false,
      title: "Sözlük",
      pagination: false,
      social: {
        github: "https://github.com/onrirr",
      },
      customCss: ["./src/styles/s.css"],
      components: {
        Head: "./src/components/starlight/Head.astro",
        Sidebar: "./src/components/starlight/Sidebar.astro",
      },
     
    }),
  ],
});
