export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-bezier/',
  },
  css: [
    'normalize.css/normalize.css',
    '~/assets/colors.css',
    '~/assets/index.css',
  ],
  modules: [
    '../src/module',
    '@nuxt/fonts',
  ],
  devtools: { enabled: true },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  compatibilityDate: '2025-02-27',
})
