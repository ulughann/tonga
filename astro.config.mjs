import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://onrirr.github.io",
  base: "tonga",
  integrations: [
    starlight({
      defaultLocale: "en",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
        },
        tr: {
          label: "Türkçe",
          lang: "tr-TR",
        },
      },
      tableOfContents: false,
      title: "𐱃𐰆𐰭𐰀",
      pagination: false,
      social: {
        github: "https://github.com/onrirr",
      },
      customCss: ["./src/styles/s.css"],
      components: {
        Head: "./src/components/starlight/Head.astro",
      },
      sidebar: [
        {
          translations: {
            en: "Computing & I.T.",
            "tr-TR": "Yazılım & Bilişim",
          },
          label: "Yazılım & Bilişim",
          autogenerate: { directory: "yazilim" },
          collapsed: true,
        },
        {
          translations: {
            en: "Computers and the Internet",
            "tr-TR": "Bilgisayar ve İnternet",
          },
          label: "Bilgisayar ve İnternet",
          autogenerate: { directory: "bilgisayar" },
          collapsed: true,
        },
        {
          translations: {
            en: "Animals & Nature",
            "tr-TR": "Hayvanlar & Doğa",
          },
          label: "Hayvanlar & Doğa",
          autogenerate: { directory: "hayvanlar" },
          collapsed: true,
        },
        {
          translations: {
            en: "Philosophy",
            "tr-TR": "Felsefe",
          },
          label: "Felsefe",
          autogenerate: { directory: "felsefe" },
          collapsed: true,
        },
        {
          translations: {
            en: "Argo",
            "tr-TR": "Argo",
          },
          label: "Argo",
          autogenerate: { directory: "argo" },
          collapsed: true,
        },
        {
          translations: {
            en: "Fillers",
            "tr-TR": "Doldurucu Sözcükler",
          },
          label: "Doldurucu Sözcükler",
          autogenerate: { directory: "doldurucu" },
          collapsed: true,
        },
        {
          translations: {
            en: "Daily Life",
            "tr-TR": "Günlük Hayat",
          },
          label: "Günlük Hayat",
          autogenerate: { directory: "gunluk-hayat" },
          collapsed: true,
        },
        {
          translations: {
            en: "Medicine",
            "tr-TR": "Tıp",
          },
          label: "Tıp",
          autogenerate: { directory: "tip" },
          collapsed: true,
        },
        {
          translations: {
            en: "History",
            "tr-TR": "Tarih",
          },
          label: "Tarih",
          autogenerate: { directory: "tarih" },
          collapsed: true,
        },
        {
          translations: {
            en: "Theology",
            "tr-TR": "Teoloji",
          },
          label: "Teoloji",
          autogenerate: { directory: "teoloji" },
          collapsed: true,
        },
        {
          translations: {
            en: "History",
            "tr-TR": "Tarih",
          },
          label: "Tarih",
          autogenerate: { directory: "tarih" },
          collapsed: true,
        },
        {
          translations: {
            en: "Science",
            "tr-TR": "Bilim",
          },
          label: "Bilim",
          autogenerate: { directory: "bilim" },
          collapsed: true,
        },
        {
          translations: {
            en: "Writings",
            "tr-TR": "Yazıtlar",
          },
          label: "Yazıtlar",
          autogenerate: { directory: "writings" },
          badge: {
            text: "!",
            variant: "tip",
          },
        },
        {
          translations: {
            en: "Alphabets",
            "tr-TR": "Alfabeler",
          },
          label: "Alfabeler",
          autogenerate: { directory: "alphabets" },
        },
        {
          translations: {
            en: "Dictionary",
            "tr-TR": "Sözlük",
          },
          label: "Turkic Dictionary",
          autogenerate: { directory: "words" },
          badge: "Only In English",
        },
      ],
    }),
  ],
});
