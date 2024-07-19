<script setup>
const props = defineProps({
  closesearch: {
    type: Function,
    required: false
  }
})
</script>

<template>
  <v-text-field
    persistent-placeholder
    placeholder="Search"
    color="primary"
    variant="outlined"
    hide-details
  >
    <template v-slot:prepend-inner>
      <v-icon stroke-width="1.5" size="17" class="text-lightText SearchIcon">mdi-search-web</v-icon>
    </template>
    <template v-slot:append-inner>
      <v-btn
        color="lightsecondary"
        icon
        rounded="sm"
        variant="flat"
        size="small"
        class="text-secondary SearchSetting"
      >
        <v-icon stroke-width="1.5" size="20">mdi-tune</v-icon>
      </v-btn>
      <v-btn
        color="lighterror"
        icon
        rounded="sm"
        variant="flat"
        size="small"
        class="text-error SearchSetting ml-3 d-block d-lg-none"
        @click="props.closesearch"
      >
        <v-icon stroke-width="1.5" size="20">mdi-search-web</v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>
