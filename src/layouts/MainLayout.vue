<template>
  <v-app>
    <v-main>
      <Suspense>
        <RouterView />
        <template #fallback>
          <AppLoader />
        </template>
      </Suspense>
    </v-main>
  </v-app>
</template>

<script setup></script>
