import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mentions-legales',
    name: 'mentions-legales',
    component: MentionsLegalesView
  },
  {
    path: '/404',
    name: 'not-found',
    component: NotFoundView
  },  
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'not-found'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
