<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'

const page = ref({ title: 'date-fns' })
const breadcrumbs = ref([
  {
    title: 'date-fns',
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
        <AppBaseCard title="Manejo de fechas">
          <p>
            date-fns es una librería que permite trabajar con fechas de una manera sencilla y
            eficiente.
          </p>
          <p>
            Con date-fns puedes realizar operaciones como sumar o restar días, meses o años a una
            fecha, formatear fechas, obtener la diferencia entre dos fechas, entre otras cosas.
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
