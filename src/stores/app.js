// Utilities
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(false)
  const drawer = ref(true)
  const miniSidebar = ref(false)
  const darkMode = useLocalStorage('darkMode', false)

  function setLoading(loading) {
    isLoading.value = loading
  }

  function toggleDrawer() {
    drawer.value = !drawer.value
  }

  function toggleMiniSidebar() {
    miniSidebar.value = !miniSidebar.value
  }

  return {
    isLoading,
    setLoading,
    drawer,
    toggleDrawer,
    miniSidebar,
    toggleMiniSidebar,
    darkMode
  }
})
