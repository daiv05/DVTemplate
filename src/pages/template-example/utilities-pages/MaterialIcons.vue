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

const codeIcons = ref(
  `<script setup>
	import { mdiPaletteSwatchOutline } from '@mdi/js'
<\/script>

<template>
	<v-icon :icon="mdiPaletteSwatchOutline"></v-icon>
</template>
`
)

const iconExamples = shallowRef([
  // {
  //   icon: mdiPaletteSwatchOutline,
  //   title: '<icon-mdi-palette-swatch-outline />'
  // },
  // {
  //   icon: mdiPaletteSwatch,
  //   title: '<icon-mdi-palette-swatch />'
  // },
  // {
  //   icon: mdiPalette,
  //   title: '<icon-mdi-palette />'
  // },
  // {
  //   icon: mdiPaletteOutline,
  //   title: '<icon-mdi-palette-outline />'
  // },
  // {
  //   icon: mdiPaletteAdvanced,
  //   title: '<icon-mdi-palette-advanced />'
  // }
])
</script>
<template>
  <div>
    <AppBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></AppBreadcrumb>
    <v-row>
      <v-col cols="12">
        <AppBaseCard title="Iconos">
          <v-row>
            <v-col cols="12">
              <p>
                Vuetify incluye Material Design Icons. Puedes encontrar la lista completa de iconos
                en la página oficial de
                <a
                  href="https://pictogrammers.com/library/mdi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pictogrammers</a
                >. En la
                <a
                  href="https://vuetifyjs.com/en/components/icons/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  documentación oficial de Vuetify</a
                >, puedes encontrar la lista de iconos disponibles, más información sobre cómo
                utilizarlos o agregar otras fuentes. <br />
              </p>
              <p>El uso basico de los iconos es el siguiente:</p>
              <highlightjs language="html" :code="codeIcons" :autodetect="false" />
              <v-card variant="text">
                <v-card-title><p>Ejemplos:</p></v-card-title>
                <v-card-text>
                  <v-row class="d-flex justify-center flex-wrap ga-1">
                    <v-col v-for="(icon, i) in iconExamples" :key="i" cols="12" md="3">
                      <v-card
                        class="my-4 mx-auto rounded-lg text-center d-flex align-center"
                        elevation="0"
                        max-width="300"
                        height="100"
                      >
                        <v-card-text class="pt-4">
                          <component :is="icon.icon" style="font-size: 40px" />
                          <p class="text-body-2 font-weight-bold ma-2">{{ icon.title }}</p>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </AppBaseCard>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
