<script setup>
import NavItem from './NavItem.vue'
import IconSet from './IconSet.vue'

const propsNavCollapse = defineProps({
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
  <v-list-group no-action>
    <template #activator="{ props }">
      <v-list-item v-bind="props" :value="item.title" rounded class="mb-1" color="secondary">
        <template #prepend>
          <IconSet :item="item.icon" :level="level" />
        </template>
        <v-list-item-title class="mr-auto">{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
          {{ item.subCaption }}
        </v-list-item-subtitle>
      </v-list-item>
    </template>
    <template v-for="(subitem, i) in item.children" :key="i">
      <NavCollapse v-if="subitem.children" :item="subitem" :level="propsNavCollapse.level + 1" />
      <NavItem v-else :item="subitem" :level="propsNavCollapse.level + 1"></NavItem>
    </template>
  </v-list-group>
</template>
