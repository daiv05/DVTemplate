<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'

const page = ref({ title: 'axios' })
const breadcrumbs = ref([
  {
    title: 'Axios',
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
        <AppBaseCard title="AxiosCommon">
          <p>
            Axios es un cliente HTTP basado en promesas para el navegador y Node.js. Axios hace que
            sea fácil enviar solicitudes HTTP desde el navegador.
          </p>
          <p>
            Como parte de la configuración de Axios, se ha definido un archivo de configuración en
            <code>src/AxiosCommon.js</code> que se importa en el archivo
            <code>src/plugins/axios.js</code> y se utiliza en la configuración de Axios.
          </p>
          <p>La configuración incluye:</p>
          <v-list>
            <v-list-item>
              <v-list-item-title>Base URL</v-list-item-title>
              <v-list-item-subtitle>URL base para todas las solicitudes</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Timeout</v-list-item-title>
              <v-list-item-subtitle>
                Tiempo de espera antes de que la solicitud se cancele
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Headers</v-list-item-title>
              <v-list-item-subtitle
                >Encabezados predeterminados para todas las solicitudes</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Auth</v-list-item-title>
              <v-list-item-subtitle
                >Información de autenticación predeterminada</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>
        </AppBaseCard>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
// :deep(code.hljs.go) {
//   background: rgb(var(--v-theme-lightsecondary));
// }
</style>
