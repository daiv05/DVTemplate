<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

const swt1 = ref(true)
const swt2 = ref(false)
const authStore = useAuthStore()
</script>

<template>
  <div class="pa-4">
    <h4 class="mb-n1">Good Morning, <span class="font-weight-regular">John Doe</span></h4>
    <span class="text-subtitle-2 text-medium-emphasis">Project admin</span>

    <v-text-field
      persistent-placeholder
      placeholder="Search"
      class="my-3"
      color="primary"
      variant="outlined"
      hide-details
    >
      <template v-slot:prepend-inner>
        <v-icon stroke-width="1.5" size="20" class="text-lightText">mdi-search-web</v-icon>
      </template>
    </v-text-field>

    <v-divider></v-divider>
    <OverlayScrollbarsComponent
      class="scrollnavbar"
      element="span"
      :options="{ scrollbars: { autoHide: 'scroll' } }"
      defer
      style="height: calc(100vh - 300px); max-height: 515px"
    >
      <v-divider></v-divider>
      <div class="bg-lightprimary rounded-md px-5 py-3 my-3">
        <div class="d-flex align-center justify-space-between">
          <h5 class="text-h5">Start DND Mode</h5>
          <div>
            <v-switch v-model="swt1" color="primary" hide-details></v-switch>
          </div>
        </div>
        <div class="d-flex align-center justify-space-between">
          <h5 class="text-h5">Allow Notifications</h5>
          <div>
            <v-switch v-model="swt2" color="primary" hide-details></v-switch>
          </div>
        </div>
      </div>

      <v-divider></v-divider>

      <v-list class="mt-3">
        <v-list-item color="secondary" rounded="md">
          <template v-slot:prepend>
            <v-icon size="20" class="mr-2">mdi-search-web</v-icon>
          </template>

          <v-list-item-title class="text-subtitle-2"> Account Settings</v-list-item-title>
        </v-list-item>

        <v-list-item color="secondary" rounded="md">
          <template v-slot:prepend>
            <v-icon size="20" class="mr-2">mdi-search-web</v-icon>
          </template>

          <v-list-item-title class="text-subtitle-2"> Social Profile</v-list-item-title>

          <template v-slot:append>
            <v-chip color="warning" class="text-white" text="02" variant="flat" size="small" />
          </template>
        </v-list-item>

        <v-list-item @click="authStore.logout()" color="secondary" rounded="md">
          <template v-slot:prepend>
            <v-icon size="20" class="mr-2">mdi-search-web</v-icon>
          </template>

          <v-list-item-title class="text-subtitle-2"> Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </OverlayScrollbarsComponent>
  </div>
</template>
