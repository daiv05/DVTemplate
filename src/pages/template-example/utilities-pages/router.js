export default [
  {
    path: '/utilidades/temas-y-estilos',
    name: 'temas-estilos',
    component: () => import('./ThemesAndStyles.vue')
  },
  {
    path: '/utilidades/tipografia',
    name: 'tipografia',
    component: () => import('./TypographyAndClasses.vue')
  },
  {
    path: '/utilidades/colores',
    name: 'colores',
    component: () => import('./ColorThemes.vue')
  },
  {
    path: '/utilidades/iconos/mdi',
    name: 'mdi-icons',
    component: () => import('./MaterialIcons.vue')
  },
  {
    path: '/utilidades/alertas',
    name: 'alertas-temporales',
    component: () => import('./TemporalAlerts.vue')
  },
  {
    path: '/utilidades/loader',
    name: 'suspense-loader',
    component: () => import('./SuspenseLoader.vue')
  },
  {
    path: '/utilidades/services',
    name: 'services-http',
    component: () => import('./ServicesHttp.vue')
  }
]
