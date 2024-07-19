<template>
    <div class="logo">
      <RouterLink to="/">
        <img :src="maki" width="45" alt="logo" />
      </RouterLink>
    </div>
  </template>
  <script setup>
  import { RouterLink } from 'vue-router';
  import maki from '@/assets/maki.svg';
  </script>
  