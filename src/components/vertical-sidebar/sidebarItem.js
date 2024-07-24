const sidebarItem = [
  {
    title: 'Inicio',
    icon: 'mdi-home-account',
    to: '/'
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
    to: '/utils/colors'
  },
  {
    title: 'Tipografía',
    icon: 'mdi-format-letter-case-lower',
    to: '/utils/typography'
  },
  {
    title: 'Colores',
    icon: 'mdi-palette',
    to: '/utils/colors'
  },
  {
    title: 'Iconos',
    icon: 'mdi-emoticon-happy-outline',
    children: [
      {
        title: 'Material Icons',
        icon: 'mdi-circle',
        to: '/icons/material'
      }
    ]
  },
  {
    title: 'Alertas',
    icon: 'mdi-bell-alert-outline',
    to: '/utils/colors'
  },
  { divider: true },
  { header: 'Plugins' },
  {
    title: 'Axios',
    icon: 'mdi-link-edit',
    to: '/utils/typography'
  },
  {
    title: 'date-fns',
    icon: 'mdi-clipboard-text-clock',
    to: '/utils/typography'
  },
  {
    title: 'unplugin',
    icon: 'mdi-toy-brick-plus',
    to: '/utils/typography'
  },
  {
    title: 'VueUse',
    icon: 'mdi-hand-coin',
    to: '/utils/typography'
  },
  {
    title: 'ESLint y Prettier',
    icon: 'mdi-pretzel',
    to: '/utils/typography'
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
        to: '/icons/material'
      },
      {
        title: 'Modales',
        icon: 'mdi-circle',
        to: '/icons/material'
      },
      {
        title: 'Tablas',
        icon: 'mdi-circle',
        to: '/icons/material'
      },
      {
        title: 'Paginación',
        icon: 'mdi-circle',
        to: '/icons/material'
      }
    ]
  }
]

export default sidebarItem
