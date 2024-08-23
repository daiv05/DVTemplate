<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'
import { computed, inject, shallowRef } from 'vue'
import { DVLightTheme, DVDarkTheme } from '@/themes/dv.theme'

const tab = ref(1)
const page = ref({ title: 'Colores' })
const breadcrumbs = ref([
  {
    title: 'Colores',
    disabled: true,
    href: '#'
  }
])

const lightColorsArrays = shallowRef(DVLightTheme.colors)
const darkColorsArrays = shallowRef(DVDarkTheme.colors)

const alertToast = inject('alertToast')

const copyColor = (color) => {
  navigator.clipboard.writeText(color)
  colorNotification.value = color
  alertToast({
    title: 'Color copiado!',
    text: color,
    group: 'colors-copy'
  })
}

// Color de notificación
const colorNotification = ref('#187fe7')
const cssProps = computed(() => {
  return {
    // '--background-notification': `rgba(${colorNotification.value}, 0.8)`,
    '--border-left-notification': `20px solid ${colorNotification.value}`
  }
})
</script>
<template>
  <div>
    <div :style="cssProps">
      <notifications classes="dv-notification" position="top center" group="colors-copy" :max="1" />
    </div>
    <AppBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></AppBreadcrumb>
    <v-row>
      <v-col cols="12">
        <AppBaseCard title="Paletas de colores">
          <v-alert
            color="secondary"
            border="start"
            class="mt-4"
            type="info"
            variant="tonal"
            title="TIP"
          >
            <template #text>
              Los componentes suelen tener un atributo 'color' donde puedes utilizar estos colores,
              o bien, como una clase: bg-[nombre-color], pero también puedes utilizarlos como una
              variable css: --v-theme-[nombre-color]. <br />
              Ejemplo: background: var(--v-theme-primary)"
            </template>
          </v-alert>

          <v-tabs v-model="tab" align-tabs="center" class="my-4" color="secondary">
            <v-tab :value="1">DVTheme Light</v-tab>
            <v-tab :value="2">DVTheme Dark</v-tab>
          </v-tabs>

          <v-tabs-window v-model="tab">
            <v-tabs-window-item :value="1" class="pa-0">
              <v-row class="d-flex justify-center flex-wrap ga-1">
                <v-col v-for="(color, i) in lightColorsArrays" :key="i" cols="12" md="3">
                  <v-card
                    class="my-4 mx-auto rounded-lg text-center d-flex align-center"
                    elevation="0"
                    :color
                    theme="DVLightTheme"
                    max-width="300"
                    height="100"
                    @click="copyColor(color)"
                  >
                    <v-card-text class="pt-4">
                      <span class="text-body-2 font-weight-bold">{{ i }}</span>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-tabs-window-item>
            <v-tabs-window-item :value="2" class="pa-0">
              <v-row class="d-flex justify-center flex-wrap ga-1">
                <v-col v-for="(color, i) in darkColorsArrays" :key="i" cols="12" md="3">
                  <v-card
                    class="my-4 mx-auto rounded-lg text-center d-flex align-center"
                    elevation="0"
                    :color
                    theme="DVDarkTheme"
                    max-width="300"
                    height="100"
                    @click="copyColor(color)"
                  >
                    <v-card-text class="pt-4">
                      <span class="text-body-2 font-weight-bold">{{ i }}</span>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-tabs-window-item>
          </v-tabs-window>
        </AppBaseCard>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
:deep(.dv-notification) {
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  // Para mostrar colores dinámicos
  background: #ffffff;
  border-left: var(--border-left-notification);
}
</style>
