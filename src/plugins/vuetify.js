// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { DVLightTheme, DVDarkTheme } from '@/themes/dv.theme.js'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'DVLightTheme',
    themes: {
      DVLightTheme,
      DVDarkTheme
    }
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      rounded: 'lg',
    },
    VTooltip: {
      location: 'top'
    },
    VMain: {
      style: 'margin-right: 10px;'
    }
  },
})
