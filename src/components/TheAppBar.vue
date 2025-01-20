<script setup>
import { useAppStore } from '@/stores/app'
const { toggleDrawer, toggleMiniSidebar } = useAppStore()
</script>

<template>
  <v-app-bar
    elevation="0"
    height="80"
    scroll-behavior="hide"
    style="position: sticky"
    class="blured-bar"
  >
    <v-hover>
      <template #default="{ props: propsHover }">
        <v-btn
          title="Toggle Mini Sidebar"
          class="hidden-md-and-down text-secondary"
          icon
          v-bind="propsHover"
          rounded="lg"
          variant="flat"
          size="small"
          @click.stop="toggleMiniSidebar"
        >
          <icon-mdi-menu style="font-size: 19px" />
        </v-btn>
      </template>
    </v-hover>
    <v-hover>
      <template #default="{ props: propsHover }">
        <v-btn
          title="Toggle Sidebar"
          class="hidden-lg-and-up text-secondary ms-3"
          icon
          v-bind="propsHover"
          rounded="lg"
          variant="flat"
          size="small"
          @click.stop="toggleDrawer"
        >
          <icon-mdi-menu style="font-size: 19px" />
        </v-btn>
      </template>
    </v-hover>
    <v-spacer />
    <v-menu :close-on-content-click="false">
      <template #activator="{ props }">
        <v-hover>
          <template #default="{ props: propsHover }">
            <v-btn
              icon
              class="text-secondary ml-3"
              rounded="lg"
              v-bind="{ ...propsHover, ...props }"
              size="small"
              variant="flat"
            >
              <icon-mdi-bell-alert-outline style="font-size: 19px" />
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
          class="profileBtn text-secondary text-none"
          variant="flat"
          rounded="pill"
          v-bind="props"
          height="300"
        >
          <v-avatar image size="35" border="md" color="secondary" class="mr-2" variant="flat">
            <v-img src="@/assets/icons/maki.svg" alt="Makima" color="#ffffff" height="200" />
          </v-avatar>
          <span class="text-h6 mr-2 text-secondary font-weight-bold"
            >Daiv <span class="font-weight-light">DV</span></span
          >
          <icon-mdi-chevron-down style="font-size: 19px" />
        </v-btn>
      </template>
      <v-sheet rounded="lg" width="330" elevation="12">
        <profile-expand />
      </v-sheet>
    </v-menu>
  </v-app-bar>
</template>

<style scoped lang="scss">
.profileBtn {
  height: 50px !important;
  margin: 0 20px 0 5px !important;
}

.blured-bar {
  backdrop-filter: blur(10px) !important;
  background: rgb(255, 255, 255) !important;
  background: linear-gradient(
    90deg,
    rgb(var(--v-theme-surface), 1) 0%,
    rgb(var(--v-theme-surface), 0.7) 33%,
    rgb(var(--v-theme-surface), 0.7) 66%,
    rgb(var(--v-theme-surface), 1) 100%
  ) !important;
}
</style>
