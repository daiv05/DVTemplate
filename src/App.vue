<template>
  <v-app>
    <v-main>
      <notifications position="top center" />
      <AppLoader v-if="isLoading" />
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
    </v-main>
  </v-app>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
const userStore = useAppStore()
const { isLoading } = storeToRefs(userStore)
</script>
