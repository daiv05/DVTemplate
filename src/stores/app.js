// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {

  const isLoading = ref(false)
  const drawer = ref(true)
  const miniSidebar = ref(false)

  function setLoading(loading) {
    isLoading.value = loading
  }

  function toggleDrawer() {
    drawer.value = !drawer.value
  }

  function toggleMiniSidebar() {
    miniSidebar.value = !miniSidebar.value
  }

  return { isLoading, setLoading, drawer, toggleDrawer, miniSidebar, toggleMiniSidebar }
  
})