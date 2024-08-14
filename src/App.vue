<template>
  <v-theme-provider :theme>
    <notifications position="top center" />
    <AppLoader v-if="isLoading" />
    <RouterView />
  </v-theme-provider>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const { isLoading, darkMode } = storeToRefs(useAppStore())
const theme = ref('')

onMounted(() => {
  toggleTheme()
})

watch(darkMode, () => {
  toggleTheme()
})

const toggleTheme = async () => {
  darkMode.value ? (theme.value = 'DVDarkTheme') : (theme.value = 'DVLightTheme')
}
</script>
