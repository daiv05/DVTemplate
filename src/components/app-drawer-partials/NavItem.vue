<script setup>
import Icon from './IconSet.vue'

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
  <v-list-item
    :to="item.type === 'external' ? '' : item.to"
    :href="item.type === 'external' ? item.to : ''"
    rounded
    class="mb-1"
    color="secondary"
    :disabled="item.disabled"
    :target="item.type === 'external' ? '_blank' : ''"
  >
    <template #prepend>
      <Icon :item="props.item.icon" :level="props.level" />
    </template>
    <v-list-item-title>{{ item.title }}</v-list-item-title>
    <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
      {{ item.subCaption }}
    </v-list-item-subtitle>
    <template v-if="item.chip" #append>
      <v-chip
        :color="item.chipColor"
        class="sidebarchip hide-menu"
        :size="item.chipIcon ? 'small' : 'default'"
        :variant="item.chipVariant"
      >
        <template v-if="item.chipIcon">
          <component :is="item.chipIcon" class="mr-1"></component>
        </template>
        {{ item.chip }}
      </v-chip>
    </template>
  </v-list-item>
</template>
