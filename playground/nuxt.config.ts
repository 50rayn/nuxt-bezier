export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-bezier/'
  },
  css: [
    'normalize.css/normalize.css',
    '~/assets/colors.css',
    '~/assets/index.css'
  ],
  modules: [
    '../src/module',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'DM Sans': [400,600,700]
    }
  },
  devtools: { enabled: true },
  nitro: {
    prerender: {
      failOnError: false,
    }
  }
})
