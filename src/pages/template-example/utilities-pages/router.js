export default [
  {
    path: '/utilidades/temas-y-estilos',
    name: 'temas-estilos',
    component: () => import('./ThemesAndStyles.vue')
  },
  {
    path: '/utilidades/tipografia',
    name: 'tipografia',
    component: () => import('./Typography.vue')
  },
  {
    path: '/utilidades/colores',
    name: 'colores',
    component: () => import('./ColorThemes.vue')
  },
  {
    path: '/utilidades/iconos/material',
    name: 'material-icons',
    component: () => import('./MaterialIcons.vue')
  }
]
