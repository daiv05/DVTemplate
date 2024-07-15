// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {

  const isLoading = ref(false)

  function setLoading(loading) {
    isLoading.value = loading
  }

  return { isLoading, setLoading }
  
})