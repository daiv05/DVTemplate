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

const alertServer = (type) => {
  alertToast({
    title: 'Error del servidor',
    text: 'Este es un mensaje de tipo: ' + type,
    type: type,
    group: 'info-dv'
  })
}

const alertWeb = (type) => {
  alertToast({
    title: 'Notificación de sistema',
    text: 'Este es un mensaje de tipo: ' + type,
    type: type
  })
}

const codeExample = `  // Puedes utilizar la función alertToast en cualquier componente
  const alertToast = inject('alertToast')
  // Para mostrar una notificación, solo debes llamar a la función
  alertToast({
    title: 'Notificación',
    text: 'Esta es una alerta de tipo: success',
    type: 'success'
  })
`

const codeConfig = `  // Tambien puedes importar directamente la función notify de 
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

const codeNotiGroups = `  <notifications position="top center" group="one" />

  <notifications position="bottom left" group="two" />
`

const codeExampleGroup = `  alertToast({
    title: 'Notificación de sistema',
    text: 'Esta es una alerta de tipo: success',
    type: 'success',
    group: 'one'
  })

  alertToast({
    title: 'Error de servidor',
    text: 'Esta es una alerta de tipo: error',
    type: 'error',
    group: 'two'
  })
`

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
    <notifications position="bottom left" group="info-dv" :max="3" />

    <AppBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></AppBreadcrumb>
    <v-row>
      <v-col cols="12">
        <AppBaseCard title="vue3-notification">
          <v-row>
            <v-col cols="12">
              <p>
                Se ha integrado la librería
                <a href="https://github.com/kyvg/vue3-notification" target="_blank"
                  >vue3-notification</a
                >
                para mostrar alertas temporales. Puedes preconfigurar las alertas por defecto, en
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
                  <v-btn elevation="0" color="success" @click="alert('success')">Success</v-btn>
                  <v-btn elevation="0" color="info" @click="alert('info')">Default (info)</v-btn>
                  <v-btn elevation="0" color="warning" @click="alert('warn')">Warning</v-btn>
                  <v-btn elevation="0" color="error" @click="alert('error')">Error</v-btn>
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
                    El tipo de notificación, puede ser: <code>success</code>, <code>warn</code>,
                    <code>error</code> y un ultimo color por default al que se recomienda manejar
                    como <code>info</code>,
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
              <p class="my-2">
                Algunas de estas y otras opciones pueden modificarse como atributos del elemento,
                disponible en <code>App.vue</code>
              </p>
              <highlightjs
                :code="codeNotiComponent"
                language="html"
                :autodetect="false"
              ></highlightjs>
              <p class="my-2">
                Puedes agregar mas elementos de <code>notifications</code> con distintas
                configuraciones, como posición, velocidad o duración, y asignarle un
                <code>group</code> distinto a cada uno. Por ejemplo, si quieres que las alertas del
                sistema se muestren en la posición 'top center', y los errores del servidor en la
                posición 'bottom left':
              </p>
              <highlightjs :code="codeNotiGroups" language="html" :autodetect="false"></highlightjs>
              <p class="my-2">
                Y para definir donde quieres que se muestre una alerta en específico se debe agregar
                la propiedad 'group' al objeto:
              </p>
              <highlightjs
                :code="codeExampleGroup"
                language="javascript"
                :autodetect="false"
              ></highlightjs>
              <v-col cols="12" class="d-flex justify-center flex-wrap ga-2">
                <v-btn elevation="0" color="success" @click="alertWeb('success')">Web</v-btn>
                <v-btn elevation="0" color="error" @click="alertServer('error')">Server</v-btn>
              </v-col>
            </v-col>
          </v-row>
        </AppBaseCard>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
