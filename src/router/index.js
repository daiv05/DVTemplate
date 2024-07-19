import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue')
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../layouts/dashboard.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../pages/index.vue')
        },
      ]
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

router.beforeEach(async (to) => {
  const publicPages = ['/login', '/']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath
    return '/login'
  }
})

export default router
