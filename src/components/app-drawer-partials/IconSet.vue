<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  level: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <template v-if="props.level > 0">
    <component :is="props.item" style="font-size: 4px"></component>
  </template>
  <template v-else>
    <component :is="props.item" style="font-size: 18px"></component>
  </template>
</template>
