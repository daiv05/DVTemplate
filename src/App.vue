<template>
  <v-theme-provider :theme>
    <v-app>
      <notifications position="bottom right" :max="3" pause-on-hover />
      <AppLoader v-if="isLoading" />
      <RouterView />
    </v-app>
  </v-theme-provider>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const { isLoading, darkMode } = storeToRefs(useAppStore())
const theme = ref('')

const toggleTheme = async () => {
  darkMode.value ? (theme.value = 'DVDarkTheme') : (theme.value = 'DVLightTheme')
}

watch(
  darkMode,
  () => {
    toggleTheme()
  },
  { immediate: true }
)
</script>
