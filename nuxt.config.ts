// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  build: {
    transpile: ['@fawmi/vue-google-maps'],
  },
  vite: {
    optimizeDeps: {
      include: [
        "@fawmi/vue-google-maps",
        "fast-deep-equal"
      ]
    }
  }
});
