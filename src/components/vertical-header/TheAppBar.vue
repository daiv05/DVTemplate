<script setup>
import { useAppStore } from '@/stores/app'
const { toggleDrawer, toggleMiniSidebar } = useAppStore()
</script>

<template>
  <v-app-bar elevation="0" height="80">
    <v-btn
      class="hidden-md-and-down text-secondary"
      color="lightsecondary"
      icon
      rounded="sm"
      variant="flat"
      size="small"
      @click.stop="toggleMiniSidebar"
    >
      <v-icon size="20" stroke-width="1.5">mdi-menu</v-icon>
    </v-btn>
    <v-btn
      class="hidden-lg-and-up text-secondary ms-3"
      color="lightsecondary"
      icon
      rounded="sm"
      variant="flat"
      size="small"
      @click.stop="toggleDrawer"
    >
      <v-icon size="20" stroke-width="1.5">mdi-menu</v-icon>
    </v-btn>

    <v-spacer />
    <v-menu :close-on-content-click="false">
      <template #activator="{ props }">
        <v-btn
          icon
          class="text-secondary mx-3"
          color="lightsecondary"
          rounded="sm"
          size="small"
          variant="flat"
          v-bind="props"
        >
          <v-icon stroke-width="1.5" size="22">mdi-bell-alert</v-icon>
        </v-btn>
      </template>
      <v-sheet rounded="lg" width="330" elevation="12">
        <notification-expand />
      </v-sheet>
    </v-menu>

    <v-menu :close-on-content-click="false">
      <template #activator="{ props }">
        <v-btn
          class="profileBtn text-primary"
          color="lightprimary"
          variant="flat"
          rounded="pill"
          v-bind="props"
        >
          <v-avatar size="30" class="mr-2 py-2">
            <img src="@/assets/maki.svg" alt="Julia" />
          </v-avatar>
          <v-icon size="25" stroke-width="1.5">mdi-cog-outline</v-icon>
        </v-btn>
      </template>
      <v-sheet rounded="lg" width="330" elevation="12">
        <profile-expand />
      </v-sheet>
    </v-menu>
  </v-app-bar>
</template>
