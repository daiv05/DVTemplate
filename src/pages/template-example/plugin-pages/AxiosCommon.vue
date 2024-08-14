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
            AxiosCommon es un archivo que contiene la configuración de axios para realizar
            peticiones a un servidor.
          </p>
          <p>
            En este archivo se configura el baseURL, el timeout y los headers que se enviarán en
            cada petición.
          </p>
          <p>
            Para utilizarlo, simplemente importa el archivo y realiza las peticiones necesarias.
          </p>
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
