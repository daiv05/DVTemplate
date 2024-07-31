<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'

const page = ref({ title: 'unplugin' })
const breadcrumbs = ref([
  {
    title: 'unplugin',
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
        <AppBaseCard title="Manejo de importaciones">
          <p class="mb-2">
            Unplugin es una herramienta que permite importar archivos de diferentes formatos en tu proyecto.
          </p>
          <p class="mb-2">
            Con unplugin puedes importar archivos de diferentes formatos como CSS, SCSS, SVG, JSON, entre otros.
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