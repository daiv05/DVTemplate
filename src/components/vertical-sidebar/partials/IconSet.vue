<script setup>
const props = defineProps({ item: String, level: Number })
</script>

<template>
  <template v-if="props.level > 0">
    <v-icon size="5" fill="currentColor" stroke-width="1.5" class="iconClass">{{
      props.item
    }}</v-icon>
  </template>
  <template v-else>
    <v-icon size="20" stroke-width="1.5" class="iconClass">{{ props.item }}</v-icon>
  </template>
</template>
