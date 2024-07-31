const sidebarItem = [
  {
    title: 'Inicio',
    icon: 'mdi-home-account',
    to: '/inicio'
  },
  { divider: true },
  { header: 'Páginas' },
  {
    title: 'Autenticación',
    icon: 'mdi-key-variant',
    children: [
      {
        title: 'Login',
        icon: 'mdi-circle',
        to: '/login'
      }
    ]
  },
  {
    title: 'Error 404',
    icon: 'mdi-alert-circle',
    to: '/404'
  },
  { divider: true },
  { header: 'Utilidades' },
  {
    title: 'Temas y estilos',
    icon: 'mdi-palette-swatch',
    to: '/utilidades/temas-y-estilos'
  },
  {
    title: 'Tipografía',
    icon: 'mdi-format-letter-case-lower',
    to: '/utilidades/tipografia'
  },
  {
    title: 'Colores',
    icon: 'mdi-palette',
    to: '/utilidades/colores'
  },
  {
    title: 'Iconos',
    icon: 'mdi-emoticon-happy-outline',
    children: [
      {
        title: 'Material Icons',
        icon: 'mdi-circle',
        to: '/utilidades/iconos/material'
      }
    ]
  },
  {
    title: 'Alertas',
    icon: 'mdi-bell-alert-outline',
    to: '/utilidades/alertas'
  },
  { divider: true },
  { header: 'Plugins' },
  {
    title: 'Axios',
    icon: 'mdi-link-edit',
    to: '/plugins/axios'
  },
  {
    title: 'date-fns',
    icon: 'mdi-clipboard-text-clock',
    to: '/plugins/date-fns'
  },
  {
    title: 'unplugin',
    icon: 'mdi-toy-brick-plus',
    to: '/plugins/unplugin'
  },
  {
    title: 'VueUse',
    icon: 'mdi-hand-coin',
    to: '/plugins/vueuse'
  },
  {
    title: 'ESLint y Prettier',
    icon: 'mdi-pretzel',
    to: '/plugins/eslint-prettier'
  },
  { divider: true },
  { header: 'Componentes' },
  {
    title: 'Vuetify Custom',
    icon: 'mdi-folder-plus',
    children: [
      {
        title: 'Fecha y hora',
        icon: 'mdi-circle',
        to: '/componentes/fecha-y-hora'
      },
      {
        title: 'Modales',
        icon: 'mdi-circle',
        to: '/componentes/modales'
      },
      {
        title: 'Tablas',
        icon: 'mdi-circle',
        to: '/componentes/tablas'
      },
      {
        title: 'Paginación',
        icon: 'mdi-circle',
        to: '/componentes/paginacion'
      }
    ]
  }
]

export default sidebarItem
