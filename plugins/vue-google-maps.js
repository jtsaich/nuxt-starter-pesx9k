import { defineNuxtPlugin } from '#app'
import  VueGoogleMaps from '@fawmi/vue-google-maps'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDlsKdpc3vluW5nANFlrnXDc5EKOdIUArQ',
      libraries: 'drawing',
    },
  })
})