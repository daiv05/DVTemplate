<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'
import { inject } from 'vue'

const alertToast = inject('alertToast')

const alert = (type) => {
  alertToast({
    title: 'Notificación',
    text: 'Este es un mensaje de tipo: ' + type,
    type: type
  })
}

const codeExample = `
  const alertToast = inject('alertToast')

  const alert = (type) => {
    alertToast({
      title: 'Notificación',
      text: 'Este es un mensaje de tipo: ' + type,
      type: type
    })
  }
`

const codeConfig = `
  // Tambien puedes importar directamente la función notify de 
  // la librería en cualquier componente
  import { useNotification } from '@kyvg/vue3-notification'
  const { notify } = useNotification()

  const alertToast = (config) => {
    notify({
      ...config
      // Aquí puedes agregar más configuraciones por defecto
    })
  }

  export default alertToast
`
const codeNotiComponent = `<notifications position="top center" />`

const page = ref({ title: 'Notificaciones' })
const breadcrumbs = ref([
  {
    title: 'Notificaciones',
    disabled: true,
    href: '#'
  }
])
</script>
<template>
  <div>
    <AppBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></AppBreadcrumb>
    <v-row>
      <v-col cols="12">
        <AppBaseCard title="vue3-notification">
          <v-row>
            <v-col cols="12">
              <p>
                Como parte de la plantilla, se ha integrado la librería
                <a href="https://github.com/kyvg/vue3-notification" target="_blank"
                  >vue3-notification</a
                >
                para mostrar notificaciones temporales en la aplicación.
              </p>
              <p>
                Puedes preconfigurar las alertas por defecto, en el archivo
                <code>src\plugins\notification.js</code>
              </p>
              <v-row>
                <v-col cols="12">
                  <highlightjs
                    :code="codeConfig"
                    language="javascript"
                    :autodetect="false"
                  ></highlightjs>
                </v-col>
              </v-row>
              <p class="my-4">
                Disponibles globalmente gracias a provide/inject, puedes utilizar tu configuración
                base de la siguiente forma:
              </p>
              <v-row>
                <v-col cols="12">
                  <highlightjs
                    :code="codeExample"
                    language="javascript"
                    :autodetect="false"
                  ></highlightjs>
                </v-col>
              </v-row>
              <v-row class="ma-2">
                <v-col cols="12" class="d-flex justify-center flex-wrap ga-2">
                  <v-btn elevation="0" @click="alert('success')" color="success">Success</v-btn>
                  <v-btn elevation="0" @click="alert('info')" color="info">Info</v-btn>
                  <v-btn elevation="0" @click="alert('warn')" color="warning">Warning</v-btn>
                  <v-btn elevation="0" @click="alert('error')" color="error">Error</v-btn>
                </v-col>
              </v-row>
              <p>La función alertToast recibe un objeto con las siguientes propiedades:</p>
              <v-list>
                <v-list-item>
                  <v-list-item-title>title (opcional)</v-list-item-title>
                  <v-list-item-subtitle>El título de la notificación</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>text</v-list-item-title>
                  <v-list-item-subtitle>El texto de la notificación</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>type (opcional)</v-list-item-title>
                  <v-list-item-subtitle>
                    El tipo de notificación, puede ser: <code>success</code>, <code>info</code>,
                    <code>warn</code> o <code>error</code>
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>duration (opcional)</v-list-item-title>
                  <v-list-item-subtitle>
                    La duración de la notificación en milisegundos
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>speed (opcional)</v-list-item-title>
                  <v-list-item-subtitle>
                    La velocidad de la animación de la notificación
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>data (opcional)</v-list-item-title>
                  <v-list-item-subtitle>
                    Datos adicionales que puedes enviar a la notificación (objeto)
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
              <v-row>
                <v-col cols="12">
                  <p class="my-2">
                    Algunas de estas y otras opciones pueden modificarse desde el
                    componente, disponible en <code>App.vue</code>
                  </p>
                </v-col>
              </v-row>
              <highlightjs
                  :code="codeNotiComponent"
                  language="html"
                  :autodetect="false"
                ></highlightjs>
            </v-col>
          </v-row>
        </AppBaseCard>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
