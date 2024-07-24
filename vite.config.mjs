// Plugins
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unfonts from 'unplugin-fonts/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    Vue({
      template: {
        transformAssetUrls
        // compilerOptions: {
        //   // treat all tags with a dash as custom elements
        //   isCustomElement: (tag) => tag.startsWith("notifications"),
        // },
      }
    }),
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss'
      }
    }),
    Components(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Montserrat',
            local: 'Montserrat',
            styles: 'wght@100;300;400;500;700;900',
            src: 'src/assets/fonts/Montserrat.otf'
          }
        ],
        display: 'auto',
        preload: true
      }
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['src/composables/*', 'src/services/*', 'src/stores/*'],
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  },
  server: {
    port: 3000
  }
})
