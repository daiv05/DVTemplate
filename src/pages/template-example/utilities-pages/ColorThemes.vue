<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'
import { computed, inject, shallowRef } from 'vue'
import { DVLightTheme, DVDarkTheme } from '@/themes/dv.theme'

const alertToast = inject('alertToast')

const tab = ref(1)
const page = ref({ title: 'Colores' })
const breadcrumbs = ref([
  {
    title: 'Colores',
    disabled: true,
    href: '#'
  }
])
const colorNotification = ref('#187fe7')
const lightColorsArrays = shallowRef(DVLightTheme.colors)
const darkColorsArrays = shallowRef(DVDarkTheme.colors)

const isLongPress = ref(false)

const copyColor = (colorHex, i) => {
  if (isLongPress.value) {
    isLongPress.value = false
    return
  }
  navigator.clipboard.writeText(i)
  colorNotification.value = colorHex
  alertToast({
    title: 'COLOR copiado!',
    text: i,
    group: 'colors-copy'
  })
}

const longCopyColor = (colorHex) => {
  isLongPress.value = true
  navigator.clipboard.writeText(colorHex)
  colorNotification.value = colorHex
  alertToast({
    title: 'VALOR copiado!',
    text: colorHex,
    group: 'colors-copy'
  })
}

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
      <notifications
        classes="color-themes-notification"
        position="top center"
        group="colors-copy"
        :max="1"
        :duration="2000"
      />
    </div>
    <AppBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></AppBreadcrumb>
    <v-row>
      <v-col cols="12">
        <AppBaseCard title="Paletas de colores">
          <p class="mt-2">
            Los componentes suelen tener un atributo 'color' donde puedes utilizar estos colores, o
            bien, como una clase: bg-[nombre-color], pero también puedes utilizarlos como una
            variable css: --v-theme-[nombre-color]. <br />
            Ejemplo: background: var(--v-theme-primary)"
          </p>
          <v-alert
            color="secondary"
            border="start"
            class="mt-4"
            type="info"
            variant="tonal"
            title="TIP"
          >
            <template #text>
              Toca una tarjeta para copiar el nombre del color al portapapeles. <br />
              Mantén presionado para copiar su valor (hex, rgb, rgba, etc).
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
                    v-longpress="{ fn: longCopyColor, data: [color] }"
                    class="my-4 mx-auto rounded-lg text-center d-flex align-center"
                    elevation="0"
                    :color
                    theme="DVLightTheme"
                    max-width="300"
                    height="100"
                    @click.prevent="copyColor(color, i)"
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
                    v-longpress="{ fn: longCopyColor, data: [color] }"
                    class="my-4 mx-auto rounded-lg text-center d-flex align-center"
                    elevation="0"
                    :color
                    theme="DVDarkTheme"
                    max-width="300"
                    height="100"
                    @click="copyColor(color, i)"
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
:deep(.color-themes-notification) {
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
