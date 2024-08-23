<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <v-card variant="flat" class="rounded-lg max-wch pb-4">
    <v-card-item class="d-flex justify-center">
      <div class="d-sm-flex align-center max-wch-base-card">
        <slot name="title">
          <v-card-title class="text-h5 font-weight-bold">{{ title }}</v-card-title>
        </slot>
      </div>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-text>
      <div class="max-wch-base-card mx-auto">
        <slot />
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
.v-card-item {
  padding: 16px 48px;
}

.v-card-title {
  font-size: 18px;
}

.v-card-text {
  padding: 24px;
}
</style>
