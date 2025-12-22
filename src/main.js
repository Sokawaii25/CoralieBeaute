import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueMatomo from 'vue-matomo'

createApp(App)
  .use(VueMatomo, {
    host: 'https://analytics.informagic-landes.fr',
    siteId: 1,
    router: router,
    requireConsent: true,
    requireCookieConsent: true,
    trackInitialView: true,
  })
  .use(router)
  .mount('#app')

window._paq.push(['trackPageView'])
