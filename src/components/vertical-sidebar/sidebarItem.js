const sidebarItem = [
  { header: 'Dashboard' },
  {
    title: 'Default',
    icon: 'mdi-monitor-dashboard',
    to: '/'
  },
  { divider: true },
  { header: 'Pages' },
  {
    title: 'Authentication',
    icon: 'mdi-key-variant',
    to: '/auth',
    children: [
      {
        title: 'Login',
        icon: 'mdi-circle',
        to: '/login'
      },
      {
        title: 'Register',
        icon: 'mdi-circle',
        to: '/auth/register'
      }
    ]
  },
  {
    title: 'Error 404',
    icon: 'mdi-alert-circle',
    to: '/pages/error'
  },
  { divider: true },
  { header: 'Utilities' },
  {
    title: 'Typography',
    icon: 'mdi-format-letter-case-lower',
    to: '/utils/typography'
  },
  {
    title: 'Shadows',
    icon: 'mdi-box-shadow',
    to: '/utils/shadows'
  },
  {
    title: 'Colors',
    icon: 'mdi-palette',
    to: '/utils/colors'
  },

  {
    title: 'Icons',
    icon: 'mdi-emoticon-angry',
    to: '/forms/radio',
    children: [
      {
        title: 'Tabler Icons',
        icon: 'mdi-circle',
        to: '/icons/tabler'
      },
      {
        title: 'Material Icons',
        icon: 'mdi-circle',
        to: '/icons/material'
      }
    ]
  },
  { divider: true },
  {
    title: 'Sample Page',
    icon: 'mdi-book-open',
    to: '/starter'
  },
  {
    title: 'Documentation',
    icon: 'mdi-lightbulb-question',
    to: 'https://codedthemes.gitbook.io/berry-vuetify/',
    type: 'external'
  },
  { header: 'Dashboard' },
  {
    title: 'Default',
    icon: 'mdi-monitor-dashboard',
    to: '/dashboard/default'
  },
  { divider: true },
  { header: 'Pages' },
  {
    title: 'Authentication',
    icon: 'mdi-key-variant',
    to: '/auth',
    children: [
      {
        title: 'Login',
        icon: 'mdi-circle',
        to: '/login'
      },
      {
        title: 'Register',
        icon: 'mdi-circle',
        to: '/auth/register'
      }
    ]
  },
  {
    title: 'Error 404',
    icon: 'mdi-alert-circle',
    to: '/pages/error'
  },
  { divider: true },
  { header: 'Utilities' },
  {
    title: 'Typography',
    icon: 'mdi-format-letter-case-lower',
    to: '/utils/typography'
  },
  {
    title: 'Shadows',
    icon: 'mdi-box-shadow',
    to: '/utils/shadows'
  },
  {
    title: 'Colors',
    icon: 'mdi-palette',
    to: '/utils/colors'
  },

  {
    title: 'Icons',
    icon: 'mdi-emoticon-angry',
    to: '/forms/radio',
    children: [
      {
        title: 'Tabler Icons',
        icon: 'mdi-circle',
        to: '/icons/tabler'
      },
      {
        title: 'Material Icons',
        icon: 'mdi-circle',
        to: '/icons/material'
      }
    ]
  },
  { divider: true },
  {
    title: 'Sample Page',
    icon: 'mdi-book-open',
    to: '/starter'
  },
  {
    title: 'Documentation',
    icon: 'mdi-lightbulb-question',
    to: 'https://codedthemes.gitbook.io/berry-vuetify/',
    type: 'external'
  }
];

export default sidebarItem;
