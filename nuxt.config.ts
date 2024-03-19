// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: true
  },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt"],
  generate: {
    dir: 'docs'
  }
})