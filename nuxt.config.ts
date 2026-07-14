// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    cssPath: '~/assets/css/main.css',
  },
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: 'DND Associate — Strategic Design & Product Studio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Studio SRDS is a strategic design studio and product development partner. We build direction, experience, and growth systems with brands for lasting impact.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/header-hero/logo.svg' }
      ]
    },
  },
})
