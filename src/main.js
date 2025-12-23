import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Track page views on route change
router.afterEach((to) => {
  if (window._paq) {
    window._paq.push(['setCustomUrl', window.location.href])
    window._paq.push(['setDocumentTitle', to.meta.title || document.title])
    window._paq.push(['trackPageView'])
  }
})

createApp(App)
  .use(router)
  .mount('#app')
