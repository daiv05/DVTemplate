<template>
  <v-app :class="[miniSidebar ? 'mini-sidebar' : '']">
    <the-app-drawer />
    <the-app-bar />
    <v-main class="containerBg">
      <v-container fluid class="page-wrapper">
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <Transition mode="out-in">
              <KeepAlive>
                <Suspense>
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
      <the-app-footer />
    </v-main>
  </v-app>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const { miniSidebar } = storeToRefs(useAppStore())
</script>

<style></style>
