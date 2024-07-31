<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <v-list-subheader color="darkText" class="smallCap font-weight-bold">{{
    props.item.header
  }}</v-list-subheader>
</template>
