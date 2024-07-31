import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

import routerUtilitiesPages from '@/pages/template-example/utilities-pages/router.js'
import routerPluginPages from '@/pages/template-example/plugin-pages/router.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginView.vue')
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../layouts/DashboardLayout.vue'),
      children: [
        {
          path: '/inicio',
          name: 'inicio',
          component: () => import('../pages/template-example/WelcomePage.vue')
        },
        ...routerUtilitiesPages,
        ...routerPluginPages
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../pages/NotFound.vue')
    }
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
