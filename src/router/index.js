import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

import routerUtilitiesPages from '@/pages/template-example/utilities-pages/router.js'
import routerPluginPages from '@/pages/template-example/plugin-pages/router.js'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../layouts/DashboardLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../pages/LoginView.vue')
        },
        {
          path: '/inicio',
          name: 'inicio',
          component: () => import('../pages/template-example/WelcomePage.vue')
        },
        ...routerUtilitiesPages,
        ...routerPluginPages,
        {
          path: '/:pathMatch(.*)*',
          name: 'not-found',
          component: () => import('../pages/NotFound.vue')
        }
      ]
    },
    {
      path: '/m',
      name: 'main',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '/index-view',
          name: 'indexView',
          component: () => import('../pages/IndexView.vue')
        }
      ]
    }
  ],
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      await delay(10)
      return savedPosition
    } else if (to.hash) {
      await delay(10)
      return { el: to.hash, behavior: 'smooth' }
    } else {
      await delay(10)
      return { top: 0, behavior: 'smooth', left: 0 }
    }
  }
})

router.beforeEach(async (to) => {
  const publicPages = ['/login', '/']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()

  if (to.path === '/') {
    return '/inicio'
  }

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath
    return '/login'
  }
})

router.onError((error) => {
  console.error(error, 'errorHandler router.js')
  if (error.message.includes('Failed to fetch dinamically imported module')) {
    console.warn('Failed dynamic import, reloading...')
    window.location.reload()
  }
})

export default router
