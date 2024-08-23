<template>
  <v-app class="bg-surface" :class="[miniSidebar ? 'mini-sidebar' : '']">
    <TheAppDrawer style="position: fixed" />
    <TheAppBar />
    <v-main style="--v-layout-top: 0px">
      <v-container fluid class="page-wrapper">
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <Transition name="slide-fade" mode="out-in">
              <KeepAlive>
                <div>
                  <v-card
                    v-if="errorCaptured.length > 0"
                    color="red-darken-2"
                    variant="outlined"
                    class="mx-auto my-8"
                    subtitle="DVTemplate"
                    max-width="500"
                  >
                    <template #prepend>
                      <icon-mdi-image-broken-variant style="font-size: 25" />
                    </template>
                    <template #title>
                      <span class="font-weight-black">Ha ocurrido un error</span>
                    </template>
                    <v-card-text class="bg-red-darken-2 pt-4">
                      <div v-for="(e, i) in errorCaptured" :key="i">
                        <div class="text-h6 font-weight-bold">- {{ e.error }}</div>
                      </div>
                    </v-card-text>
                    <template #actions>
                      <span class="text-subtitle-2"
                        >Por favor recargue la página o intente de nuevo más tarde</span
                      >
                    </template>
                  </v-card>
                  <Suspense v-else>
                    <!-- main content -->
                    <component :is="Component"></component>
                    <!-- loading state -->
                    <template #fallback>
                      <AppLoader />
                    </template>
                  </Suspense>
                </div>
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

const errorCaptured = ref([])

try {
  onErrorCaptured((error, ins, info) => {
    errorCaptured.value.push({
      error
    })
    return true
  })
} catch (e) {
  console.error(e, 'error')
}
</script>

<style scoped lang="scss">
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.1s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

:deep(.v-card-actions) {
  min-height: 0;
  display: flex;
  justify-content: center;
}
</style>
