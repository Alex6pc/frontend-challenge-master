// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
