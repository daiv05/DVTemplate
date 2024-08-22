<script setup>
import { useAuthStore } from '@/stores/auth'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

const authStore = useAuthStore()
</script>

<template>
  <div class="pa-4">
    <h4 class="mb-n1">Good Morning, <span class="font-weight-regular">John Doe</span></h4>
    <span class="text-subtitle-2 text-medium-emphasis">Project admin</span>

    <v-divider></v-divider>

    <OverlayScrollbarsComponent
      element="span"
      :options="{ scrollbars: { autoHide: 'scroll' } }"
      defer
      class="position-relative"
      style="height: calc(100vh - 300px); max-height: 515px"
    >
      <v-divider></v-divider>

      <div class="bg-lightprimary rounded-lg px-5 py-3 my-3">
        <div class="d-flex align-center justify-space-between">
          <h5 class="text-h5">Modo oscuro</h5>
          <AppSwitchTheme />
        </div>
      </div>

      <v-divider></v-divider>

      <v-list class="bottom-0 right-0 position-absolute">
        <v-list-item color="secondary" rounded="md" @click="authStore.logout()">
          <template #prepend>
            <icon-mdi-logout class="ml mr-8" />
          </template>
          <v-list-item-title class="text-subtitle-2"> Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </OverlayScrollbarsComponent>
  </div>
</template>
