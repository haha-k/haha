import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/table',
      name: 'vTable',
      component: () => import('../views/VTable/main.vue')
    }
  ]
})

export default router
