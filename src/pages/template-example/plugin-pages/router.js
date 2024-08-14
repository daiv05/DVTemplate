export default [
  {
    path: '/plugins/axios',
    name: 'axios',
    component: () => import('./AxiosCommon.vue')
  },
  {
    path: '/plugins/date-fns',
    name: 'date-fns',
    component: () => import('./DateFns.vue')
  },
  {
    path: '/plugins/unplugin',
    name: 'unplugin',
    component: () => import('./UnPlugin.vue')
  }
]
