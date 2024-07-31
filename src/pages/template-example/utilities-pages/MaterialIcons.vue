<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'
import { shallowRef } from 'vue'

const page = ref({ title: 'Material Icons' })
const breadcrumbs = ref([
  {
    title: 'Material Icons',
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
        <AppBaseCard title="Iconos">
          aaaa
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
