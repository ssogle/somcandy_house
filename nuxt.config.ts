const path = require('path')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    baseURL: '/somcandy_house/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    head: {
      title: 'somcandy_house',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/somcandy_house/favicon.ico',
        },
      ],
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
