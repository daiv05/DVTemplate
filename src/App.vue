<template>
  <v-app>
    <v-main>
      <notifications position="top center" />
      <AppLoader v-if="isLoading" />
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const { isLoading } = storeToRefs(useAppStore())
</script>
