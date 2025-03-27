import { createRouter, createWebHistory } from 'vue-router'
import FirstView from '../views/FirstView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '1',
      component: FirstView,
    },
    {
      path: '/2',
      name: '2',
      component: () => import('../views/SecondView.vue'),
    },
    {
      path: '/3',
      name: '3',
      component: () => import('../views/ThirdView.vue'),
    },
  ],
})

export default router
