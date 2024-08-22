// Styles
import 'vuetify/styles'
import { DVLightTheme, DVDarkTheme } from '@/themes/dv.theme.js'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
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
      rounded: 'lg'
    },
    VTooltip: {
      location: 'top'
    },
    VMain: {
      style: 'margin-right: 10px;'
    }
  }
})
