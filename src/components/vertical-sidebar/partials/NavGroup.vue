<script setup>
const props = defineProps({ item: Object });
</script>

<template>
  <v-list-subheader color="darkText" class="smallCap font-weight-bold pl-0">{{ props.item.header }}</v-list-subheader>
</template>
