/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { registerDirectives } from '@/directives'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
  console.error(err, 'errorHandler')
}
registerPlugins(app)
registerDirectives(app)



app.mount('#app')
