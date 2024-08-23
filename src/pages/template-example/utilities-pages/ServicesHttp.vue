<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'

const page = ref({ title: 'Services' })
const breadcrumbs = ref([
  {
    title: 'Services',
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
        <AppBaseCard title="Services">
          <p>
            Para realizar peticiones se recomienda utilizar la carpeta
            <code>/src/services</code> como repositorio común de endpoints
          </p>
        </AppBaseCard>
      </v-col>
    </v-row>
  </div>
</template>
