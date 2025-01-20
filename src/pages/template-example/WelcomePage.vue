<template>
  <v-row>
    <v-col cols="12">
      <AppBaseCard class="my-4 rounded-lg" flat>
        <template #title>
          <h3 class="text-h3 font-weight-bold">
            DV Template
            <v-chip class="mx-2">v1.0</v-chip>
          </h3>
        </template>
        <p></p>
        <p>
          Esta plantilla es un punto de partida para el desarrollo de aplicaciones web con Vue.js y
          Vuetify. <br />
          Incluye un conjunto de componentes, estilos, librerías y utilidades que facilitan el
          desarrollo de aplicaciones web.
        </p>
        <v-card flat>
          <v-card-title>
            <h4 class="mt-2">Versiones</h4>
          </v-card-title>
          <v-card-text>
            <v-list variant="flat" density="compact" lines>
              <v-list-item>
                <icon-mdi-circle style="font-size: 4px" />
                <strong class="ml-2">Vue.js:</strong> 3.4.33
              </v-list-item>
              <v-list-item>
                <icon-mdi-circle style="font-size: 4px" />
                <strong class="ml-2">Vuetify:</strong> 3.6.0
              </v-list-item>
              <v-list-item>
                <icon-mdi-circle style="font-size: 4px" />
                <strong class="ml-2">Vue Router:</strong> 4.4.0
              </v-list-item>
              <v-list-item>
                <icon-mdi-circle style="font-size: 4px" />
                <strong class="ml-2">Vite:</strong> 5.3.4
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </AppBaseCard>
    </v-col>
  </v-row>
</template>

<script setup>
// Prueba del uso de <Suspense> y la pantalla de carga
await new Promise((resolve) => setTimeout(resolve, 1500))
</script>
