<script setup>
import { useAppStore } from '@/stores/app'
const { toggleDrawer, toggleMiniSidebar } = useAppStore()
</script>

<template>
  <v-app-bar elevation="0" height="80" scroll-behavior="hide" style="position: sticky">
    <v-hover>
      <template #default="{ isHovering, props: propsHover }">
        <v-btn
          :class="{
            'hidden-md-and-down text-lightsecondary': isHovering,
            'hidden-md-and-down text-secondary': !isHovering
          }"
          :color="isHovering ? 'secondary' : 'lightsecondary'"
          icon
          v-bind="propsHover"
          rounded="lg"
          variant="flat"
          size="x-small"
          @click.stop="toggleMiniSidebar"
        >
          <v-icon size="18" stroke-width="1.5" icon="mdi-menu"></v-icon>
        </v-btn>
      </template>
    </v-hover>
    <v-hover>
      <template #default="{ isHovering, props: propsHover }">
        <v-btn
          :class="{
            'hidden-lg-and-up text-lightsecondary ms-3': isHovering,
            'hidden-lg-and-up text-secondary ms-3': !isHovering
          }"
          :color="isHovering ? 'secondary' : 'lightsecondary'"
          icon
          v-bind="propsHover"
          rounded="lg"
          variant="flat"
          size="x-small"
          @click.stop="toggleDrawer"
        >
          <v-icon size="18" stroke-width="1.5" icon="mdi-menu"></v-icon>
        </v-btn>
      </template>
    </v-hover>
    <v-spacer />
    <v-menu :close-on-content-click="false">
      <template #activator="{ props }">
        <v-hover>
          <template #default="{ isHovering, props: propsHover }">
            <v-btn
              icon
              :class="{
                'text-lightsecondary mx-3': isHovering,
                'text-secondary mx-3': !isHovering
              }"
              :color="isHovering ? 'secondary' : 'lightsecondary'"
              rounded="lg"
              v-bind="{ ...propsHover, ...props }"
              size="x-small"
              variant="flat"
            >
              <v-icon size="18" icon="mdi-bell-alert-outline"></v-icon>
            </v-btn>
          </template>
        </v-hover>
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
          <v-icon size="25" stroke-width="1.5" icon="mdi-cog-outline"></v-icon>
        </v-btn>
      </template>
      <v-sheet rounded="lg" width="330" elevation="12">
        <profile-expand />
      </v-sheet>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>
.profileBtn {
  height: 50px !important;
  margin: 0 20px 0 10px !important;
}


</style>
