// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt", //
    "@nuxtjs/google-fonts",
  ],
  css: ["normalize.css/normalize.css"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `@use "~/assets/variables.sass" as *\n`,
        },
      },
    },
  },
  googleFonts: {
    preload: true,
    families: {
      "Cormorant Infant": true,
      "Space Grotesk": true,
    },
  },
});