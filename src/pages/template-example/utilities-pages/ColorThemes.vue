<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'
import { shallowRef } from 'vue'
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
const lightColorsArrays = shallowRef(Object.keys(DVLightTheme.colors))
const darkColorsArrays = shallowRef(Object.keys(DVDarkTheme.colors))
</script>
<template>
  <div>
    <AppBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></AppBreadcrumb>
    <v-row>
      <v-col cols="12">
        <AppBaseCard title="Paletas de colores">
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
                  >
                    <v-card-text class="pt-4">
                      <span class="text-body-2 font-weight-bold">{{ color }}</span>
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
                  >
                    <v-card-text class="pt-4">
                      <span class="text-body-2 font-weight-bold">{{ color }}</span>
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

<style scoped lang="scss"></style>
