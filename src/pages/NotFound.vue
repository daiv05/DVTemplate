<template>
  <v-container class="h-screen">
    <v-row class="h-100 d-flex align-center">
      <v-col cols="12">
        <v-card elevation="3" rounded="md" class="mx-auto">
          <v-card-title class="text-center">
            <h3 class="my-8">404 Not Found</h3>
            <v-icon class="mb-8" size="100">mdi-image-broken</v-icon>
          </v-card-title>
          <v-card-text class="d-flex flex-column justify-center">
            <p class="text-subtitle-2">
              Es posible que la página que busca haya sido eliminada, haya cambiado de nombre o no
              esté disponible temporalmente. Por favor, intente lo siguiente:
            </p>
            <v-list lines="two pa-0">
              <v-list-item>
                <v-list-item-subtitle>
                  - Si ha escrito la dirección de la página en la barra de direcciones, asegúrese de
                  que está escrita correctamente.</v-list-item-subtitle
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-subtitle>
                  - Presione el botón <b>hacia atrás</b> o intente con otro link.
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-subtitle>
                  - Regrese a la <a href="/">página de inicio</a>, y luego busque enlaces a la
                  información que desee.
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
