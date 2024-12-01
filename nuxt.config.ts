// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
  ],
  googleFonts: {
    base64: true,
    fontsDir: "assets/fonts",
    overwriting: true,
    families: {
      Inter: [400, 700],
    },
  },
  nitro: {
    routeRules: {
      "/api/**": { cors: true },
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
})