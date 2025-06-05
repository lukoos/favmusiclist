// https://nuxt.com/docs/api/configuration/nuxt-config
// import Aura from "@primeuix/themes/aura";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/style/main.scss"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@nuxtjs/device",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/google-fonts",
  ],
  i18n: {
    locales: [
      { code: "en", name: "English", language: "en-US", file: "en.json" },
      { code: "pl", name: "Polish", language: "pl-PL", file: "pl.json" },
    ],
    defaultLocale: "en",
  },
  primevue: {
    importTheme: { from: "~/assets/themes/favmusiclist.js" },
    options: {
      ripple: true,
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 900],
    },
    display: "swap",
  },
});
