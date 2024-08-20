<template>
  <v-app class="bg-surface" :class="[miniSidebar ? 'mini-sidebar' : '']">
    <TheAppDrawer style="position: fixed" />
    <TheAppBar />
    <v-main style="--v-layout-top: 0px">
      <v-container fluid class="page-wrapper">
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <Transition mode="out-in">
              <KeepAlive>
                <div v-if="errorCaptured">
                  Ocurrió un error inesperado, por favor recarga esta página
                </div>
                <Suspense v-else>
                  <!-- main content -->
                  <component :is="Component"></component>
                  <!-- loading state -->
                  <template #fallback>
                    <AppLoader />
                  </template>
                </Suspense>
              </KeepAlive>
            </Transition>
          </template>
        </RouterView>
      </v-container>
      <TheAppFooter />
    </v-main>
  </v-app>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { onErrorCaptured } from 'vue'

const { miniSidebar } = storeToRefs(useAppStore())

const errorCaptured = ref(null)
onErrorCaptured((e) => (error.value = e))
</script>
