<template>
  <div ref="icon-el" class="base-icon" :class="props.class"></div>
</template>

<script setup>
import { useTemplateRef, onMounted, watchEffect } from 'vue'
import { getSVG } from '@/utils/iconify/icons-mdi'
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  size: {
    type: Number,
    default: 24
  },
  class: {
    type: String,
    default: ''
  }
})

const iconEl = useTemplateRef('icon-el')

const getElementSVG = () => {
  iconEl.value.innerHTML = getSVG({ name: props.icon, size: props.size })
  iconEl.value.style.color = props.color
  return
}

onMounted(() => {
  getElementSVG()
})

watchEffect(() => {
  if (iconEl.value) {
    console.log('watchEffect')
    console.log(iconEl)
    getElementSVG()
  }
})
</script>

<style>
.base-icon {
  display: inline-block;
  vertical-align: middle;
  line-height: 0.5em !important;
}
</style>
