export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-bezier/',
    head: {
      title: 'nuxt-bezier',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A Nuxt module providing Vue 3 transition components with Bezier timing functions. Includes fade, dissolve, blur, scale, slide, push, wipe, rotate, zoom, and clip-path transitions.' },
        { name: 'theme-color', content: '#00dc82' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'nuxt-bezier' },
        { property: 'og:description', content: 'Vue 3 transition components with Bezier timing functions for Nuxt' },
        { property: 'og:url', content: 'https://50rayn.github.io/nuxt-bezier/' },
        { property: 'og:image', content: 'https://50rayn.github.io/nuxt-bezier/logo.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'nuxt-bezier' },
        { name: 'twitter:description', content: 'Vue 3 transition components with Bezier timing functions for Nuxt' },
        { name: 'twitter:image', content: 'https://50rayn.github.io/nuxt-bezier/logo.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/nuxt-bezier/logo.png' },
      ],
    },
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
