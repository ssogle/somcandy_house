const path = require('path')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'somcandy_house',
    },
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs'),
    },
  },
  // modules: ['@nuxtjs/tailwindcss', 'nuxt-quasar-ui'],
  // quasar: {
  // iconSet: 'mdi-v7',
  // },
})
