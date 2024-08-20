<template>
  <v-footer class="footer d-flex flex-column justify-center text-center align-center">
    <div class="my-2">
      <a
        href="https://github.com/daiv05/musycharts-dcdv"
        target="_blank"
        rel="noopener"
        class="mr-4"
      >
        <img src="@/assets/icons/github.svg" alt="GitHub" class="icon-footer" />
      </a>
      <a href="https://twitter.com/daiv_09" target="_blank" rel="noopener" class="mr-4">
        <img src="@/assets/icons/twitter.svg" alt="Twitter" class="icon-footer" />
      </a>
      <a href="mailto:davidderas50@gmail.com" target="_blank" rel="noopener" class="mr-4">
        <img src="@/assets/icons/brand-gmail.svg" alt="Gmail" class="icon-footer" />
      </a>
    </div>
    <div class="text-center mb-2">
      <span class="text-grey-darken-1">&copy; 2024 DVTemplate. Todos los derechos reservados.</span>
    </div>
  </v-footer>
</template>

<script setup></script>

<style scoped>
.footer {
  text-align: center;
  font-size: 10px;
  color: #000000;
}

.icon-footer {
  width: 20px;
  height: 20px;
}
</style>
