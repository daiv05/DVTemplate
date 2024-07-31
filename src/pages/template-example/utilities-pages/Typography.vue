<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'
import { shallowRef } from 'vue'

const page = ref({ title: 'Tipografía' })
const breadcrumbs = ref([
  {
    title: 'Tipografía',
    disabled: true,
    href: '#'
  }
])
const headings = shallowRef([
  {
    title: 'Heading 1',
    class: 'text-h1'
  },
  {
    title: 'Heading 2',
    class: 'text-h2'
  },
  {
    title: 'Heading 3',
    class: 'text-h3'
  },
  {
    title: 'Heading 4',
    class: 'text-h4'
  },
  {
    title: 'Heading 5',
    class: 'text-h5'
  },
  {
    title: 'Heading 6',
    class: 'text-h6'
  },
  {
    title: 'Subtitle 1',
    class: 'text-subtitle-1'
  },
  {
    title: 'Subtitle 2',
    class: 'text-subtitle-2'
  },
  {
    title: 'Body 1',
    class: 'text-body-1'
  },
  {
    title: 'Body 2',
    class: 'text-body-2'
  },
  {
    title: 'Button',
    class: 'text-button'
  },
  {
    title: 'Caption',
    class: 'text-caption'
  },
  {
    title: 'Overline',
    class: 'text-overline'
  }
])
</script>
<template>
  <div>
    <AppBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></AppBreadcrumb>
    <v-row>
      <v-col cols="12">
        <AppBaseCard title="Fuente predeterminada">
          <p class="mb-2">
            Por defecto, la fuente utilizada por Vuetify es <code>Roboto</code>, en esta plantilla
            se ha configurado para que la fuente sea <code>Montserrat</code>.
          </p>
          <p class="mb-2">
            Puedes explorar los cambios realizados en el archivo
            <code>src/styles/_variables.scss</code>.
            <v-list>
              <v-list-item prepend-icon="mdi-variable">
                <v-list-item-title>Variables</v-list-item-title>
                <v-list-item-subtitle
                  >Se han redefinido las variable de tipografía predeterminada de
                  Vuetify</v-list-item-subtitle
                >
              </v-list-item>
              <v-list-item prepend-icon="mdi-toy-brick-outline">
                <v-list-item-title>Instalación</v-list-item-title>
                <v-list-item-subtitle
                  >Utilizando el paquete de <code>unplugin-fonts</code> y
                  <code>@fontsource-variable/montserrat</code> se instaló la fuente en el
                  sistema</v-list-item-subtitle
                >
                <v-list-item-subtitle
                  >Puedes ver más sobre la configuración en
                  <RouterLink :to="{ name: 'unplugin', hash: '#unplugin-fonts' }"
                    >unplugin-fonts</RouterLink
                  >
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </p>
          <v-row class="my-2">
            <v-col cols="12">
              Clases de fuente disponibles:
              <v-card v-for="(head, i) in headings" :key="i" class="my-4 rounded-lg" elevation="0">
                <v-card-title>
                  <span :class="head.class">{{ head.title }}</span>
                </v-card-title>

                <v-card-text class="bg-surface-light pt-4">
                  Class <br />
                  <span class="text-body-2 font-weight-bold">{{ head.class }}</span>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
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
