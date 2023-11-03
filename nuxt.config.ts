// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  plugins: ['~/plugins/vue3-google-map.js'],

  build: {
    transpile: ['@fawmi/vue-google-maps'],
  },
});
