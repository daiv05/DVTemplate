<script setup>
import { ref } from 'vue'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

const notificationTypes = ref(['Todas', 'Nuevas', 'Sin leer', 'Otras'])
const selectNotify = ref('Todas')
</script>

<template>
  <div>
    <div class="pa-4">
      <div class="d-flex align-center justify-space-between mb-3">
        <h6 class="text-subtitle-1">
          Notificaciones
          <v-chip color="warning" variant="flat" size="small" class="ml-2 text-white">01</v-chip>
        </h6>
        <a href="#" class="text-decoration-underline text-primary text-subtitle-2"
          >Marcar como leído</a
        >
      </div>
      <v-select
        v-model="selectNotify"
        :items="notificationTypes"
        color="primary"
        variant="outlined"
        density="default"
        hide-details
      ></v-select>
    </div>
    <v-divider></v-divider>
    <OverlayScrollbarsComponent
      element="span"
      :options="{ scrollbars: { autoHide: 'scroll' } }"
      defer
    >
      <div style="height: calc(100vh - 300px); max-height: 650px">
        <v-list class="py-0" lines="three">
          <v-list-item value="" color="secondary" class="no-spacer">
            <template #prepend>
              <v-avatar size="40" class="mr-3 py-2">
                <img src="@/assets/maki.svg" width="40" alt="Julia" />
              </v-avatar>
            </template>
            <div class="d-inline-flex align-center justify-space-between w-100">
              <h6 class="text-subtitle-1 font-weight-regular">Maria Salazar</h6>
              <span class="text-subtitle-2 text-medium-emphasis">hace 2 min</span>
            </div>

            <p class="text-subtitle-2 text-medium-emphasis mt-1">
              Es un hecho probado que un lector se distraerá
            </p>
            <div class="mt-3">
              <v-chip size="small" text="Unread" color="error" variant="tonal" class="mr-2" />
              <v-chip size="small" text="New" color="warning" variant="tonal" />
            </div>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item value="" color="secondary" class="no-spacer">
            <template #prepend>
              <v-avatar
                size="40"
                variant="flat"
                color="lightsuccess"
                class="mr-3 py-2 text-success"
              >
                <v-icon size="20" icon="mdi-tag-search-outline"></v-icon>
              </v-avatar>
            </template>
            <div class="d-inline-flex align-center justify-space-between w-100">
              <h6 class="text-subtitle-1">Verificación éxitosa</h6>
              <span class="text-subtitle-2 text-medium-emphasis">hace 1 min</span>
            </div>

            <p class="text-subtitle-2 text-medium-emphasis mt-1">
              Hemos recibido tu solicitud. En breve te enviaremos un correo con los detalles.
            </p>
            <div class="mt-3">
              <v-chip size="small" color="error" text="Unread" variant="tonal" />
            </div>
          </v-list-item>
        </v-list>
      </div>
    </OverlayScrollbarsComponent>
    <v-divider></v-divider>
    <div class="pa-2 text-center">
      <v-btn color="primary" variant="text">Ver todo</v-btn>
    </div>
  </div>
</template>
