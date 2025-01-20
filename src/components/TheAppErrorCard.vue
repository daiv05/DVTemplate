<template>
  <v-card
    color="error"
    variant="outlined"
    class="mx-auto my-8"
    subtitle="DVTemplate"
    max-width="800"
  >
    <template #prepend>
      <icon-mdi-image-broken-variant style="font-size: 25px" />
    </template>
    <template #title>
      <span class="font-weight-black">Ha ocurrido un error inesperado :(</span>
    </template>
    <v-card-text class="bg-red-darken-2 pt-4">
      <div v-for="(e, i) in errorCaptured" :key="i">
        <div class="text-h6 font-weight-bold">- {{ e.error }}</div>
      </div>
    </v-card-text>
    <template #actions>
      <span class="text-subtitle-2">Por favor recargue la página o intente de nuevo más tarde</span>
    </template>
  </v-card>
</template>

<script setup>
defineProps({
  errorCaptured: {
    type: Array,
    default: () => []
  }
})
</script>
