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

      <v-list class="mt-3">
        <v-list-item color="secondary" rounded="md" @click="authStore.logout()">
          <template #prepend>
            <v-icon size="20" class="mr-2">mdi-logout</v-icon>
          </template>
          <v-list-item-title class="text-subtitle-2"> Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </OverlayScrollbarsComponent>
  </div>
</template>
