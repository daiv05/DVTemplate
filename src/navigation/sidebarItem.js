// Sin el uso de unplugin-icons/unplugin-auto-import se tendrían
// que importar los iconos uno por uno:
// import IconMdiAlertCircle from '~icons/mdi/alert-circle'
// import IconMdiBellAlertOutline from '~icons/mdi/bell-alert-outline'
// ...

const sidebarItem = [
  {
    title: 'Inicio',
    icon: IconMdiHomeAccount,
    // chip: 'Nuevo',
    // chipColor: 'primary',
    // chipIcon: IconMdiStar,
    // chipVariant: 'flat',
    to: '/inicio'
  },
  { divider: true },
  { header: 'Antes de empezar' },
  {
    title: 'Recomendaciones',
    icon: IconMdiHeadLightbulbOutline,
    to: '/recomendaciones'
  },
  {
    title: 'Extensiones',
    icon: IconMdiPuzzleOutline,
    to: '/extensiones-editor'
  },
  {
    title: 'Estándares',
    icon: IconMdiMapMarkerDistance,
    to: '/estandares'
  },
  { divider: true },
  { header: 'Páginas' },
  {
    title: 'Autenticación',
    icon: IconMdiKeyVariant,
    children: [
      {
        title: 'Login',
        icon: IconMdiCircle,
        to: '/login'
      }
    ]
  },
  {
    title: 'Error 404',
    icon: IconMdiAlertCircle,
    to: '/404'
  },
  { divider: true },
  { header: 'Utilidades' },
  {
    title: 'Temas y estilos',
    icon: IconMdiPaletteSwatch,
    to: '/utilidades/temas-y-estilos'
  },
  {
    title: 'Tipografía',
    icon: IconMdiFormatLetterCaseLower,
    to: '/utilidades/tipografia'
  },
  {
    title: 'Colores',
    icon: IconMdiPalette,
    to: '/utilidades/colores'
  },
  {
    title: 'Iconos',
    icon: IconMdiEmoticonHappyOutline,
    children: [
      {
        title: 'MDI',
        icon: IconMdiCircle,
        to: '/utilidades/iconos/mdi'
      }
    ]
  },
  {
    title: 'Alertas',
    icon: IconMdiBellAlertOutline,
    to: '/utilidades/alertas'
  },
  {
    title: 'Suspense/Loader',
    icon: IconMdiReload,
    to: '/utilidades/loader'
  },
  {
    title: 'Services',
    icon: IconMdiLockOutline,
    to: '/utilidades/services'
  },
  {
    title: 'Barra de navegación',
    icon: IconMdiNavigationOutline,
    to: '/utilidades/sidebar'
  },
  { divider: true },
  { header: 'Plugins' },
  {
    title: 'Axios',
    icon: IconMdiLinkEdit,
    to: '/plugins/axios'
  },
  {
    title: 'date-fns',
    icon: IconMdiClipboardTextClock,
    to: '/plugins/date-fns'
  },
  {
    title: 'unplugin',
    icon: IconMdiToyBrickPlus,
    to: '/plugins/unplugin'
  },
  {
    title: 'VueUse',
    icon: IconMdiHandCoin,
    to: '/plugins/vueuse'
  },
  {
    title: 'ESLint y Prettier',
    icon: IconMdiPretzel,
    to: '/plugins/eslint-prettier'
  },
  { divider: true },
  { header: 'Componentes' },
  {
    title: 'Vuetify Custom',
    icon: IconMdiFolderPlus,
    children: [
      {
        title: 'Fecha y hora',
        icon: IconMdiCircle,
        to: '/componentes/fecha-y-hora'
      },
      {
        title: 'Modales',
        icon: IconMdiCircle,
        to: '/componentes/modales'
      },
      {
        title: 'Tablas',
        icon: IconMdiCircle,
        to: '/componentes/tablas'
      },
      {
        title: 'Paginación',
        icon: IconMdiCircle,
        to: '/componentes/paginacion'
      }
    ]
  }
]

export default sidebarItem
