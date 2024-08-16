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
        <TheAppFooter />
      </v-main>
    </v-app>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const { miniSidebar } = storeToRefs(useAppStore())
</script>

