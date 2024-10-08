// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  modules: ["@pinia/nuxt"],
  css: [
    "@/scss/main.scss", // Add your SCSS file here
  ],
});
