/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import notifications from '@/plugins/notification'
import axios from '@/plugins/axios'
import Notifications from '@kyvg/vue3-notification'
import 'highlight.js/scss/atom-one-dark.scss'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'unfonts.css'
import 'overlayscrollbars/overlayscrollbars.css'

export function registerPlugins(app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(Notifications)
    .use(hljsVuePlugin)
    .provide('alertToast', notifications.alertToast)
}
