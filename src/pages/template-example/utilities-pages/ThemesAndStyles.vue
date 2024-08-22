<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'

const page = ref({ title: 'Temas y estilos' })
const breadcrumbs = ref([
  {
    title: 'Temas',
    disabled: true,
    href: '#'
  }
])
const tab = ref(1)
const dvthemelightCode = `
  const DVLightTheme = {
    name: 'DVLightTheme',
    dark: false,
    variables: {
      'border-color': '#1e88e5',
      'carousel-control-size': 10
    },
    colors: {
      primary: '#1e88e5',
      secondary: '#353DB1',
      info: '#03c9d7',
      success: '#00c853',
      accent: '#FFAB91',
      warning: '#ffc107',
      error: '#f44336',
      lightprimary: '#eef2f6',
      lightsecondary: '#ede7f6',
      lightsuccess: '#b9f6ca',
      lighterror: '#f9d8d8',
      lightwarning: '#fff8e1',
      lightText: '#616161',
      borderLight: '#d0d0d0',
      inputBorder: '#787878',
      containerBg: '#eef2f6',
      surface: '#fff',
      'on-surface-variant': '#fff',
      gray100: '#fafafa',
      primary200: '#90caf9',
      secondary200: '#b39ddb',
      darkText: '#212121',
      darkprimary: '#1565c0',
      darksecondary: '#4527a0'
    }
  }`
const dvthemedarkCode = `
  const DVDarkTheme = {
    name: 'DVDarkTheme',
    dark: true,
    variables: {
      'border-color': '#1e88e5',
      'carousel-control-size': 10
    },
    colors: {
      primary: '#3E7EB7',
      secondary: '#C7CCD1',
      info: '#30B2BB',
      success: '#00c853',
      accent: '#FFAB91',
      warning: '#ffc107',
      error: '#f44336',
      lightprimary: '#BAADCC',
      lightsecondary: '#52456A',
      lightsuccess: '#57B07E',
      lighterror: '#A64949',
      lightwarning: '#E5B663',
      lightText: '#616161',
      borderLight: '#d0d0d0',
      inputBorder: '#787878',
      containerBg: '#3C3D3E',
      surface: '#0D0D0D',
      'on-surface-variant': '#0D0D0D',
      gray100: '#fafafa',
      primary200: '#90caf9',
      secondary200: '#b39ddb',
      darkText: '#d0d0d0',
      darkprimary: '#1565c0',
      darksecondary: '#4527a0'
    }
  }`
</script>
<template>
  <div>
    <AppBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></AppBreadcrumb>
    <v-row>
      <v-col cols="12">
        <AppBaseCard title="DVTheme y estilos predefinidos">
          <p>
            La plantilla incluye dos temas, uno claro y uno oscuro. Puedes cambiar los temas
            disponibles dentro de la aplicación en <code>src/plugins/vuetify.js</code>.
          </p>
          <p>
            Los temas son definidos en la carpeta <code>src/themes</code> y puedes personalizarlos a
            tu gusto o agregar más. Puedes ver los colores disponibles en:
            <RouterLink :to="{ name: 'colores' }">Colores</RouterLink>.
          </p>

          <v-tabs v-model="tab" align-tabs="center" class="my-4" color="secondary">
            <v-tab :value="1">DVTheme Light</v-tab>
            <v-tab :value="2">DVTheme Dark</v-tab>
          </v-tabs>

          <v-tabs-window v-model="tab">
            <v-tabs-window-item :value="1" class="pa-0">
              <highlightjs language="javascript" :code="dvthemelightCode" :autodetect="false" />
            </v-tabs-window-item>
            <v-tabs-window-item :value="2" class="pa-0">
              <highlightjs language="javascript" :code="dvthemedarkCode" :autodetect="false" />
            </v-tabs-window-item>
          </v-tabs-window>
          <p class="my-4">
            Los estilos predefinidos puedes consultarlos en <code>src/styles</code>
          </p>
          <div id="hierarchy">
            <div class="foldercontainer text-lightText">
              <span class="folder"><icon-mdi-palette-swatch-outline /> styles</span>
              <span class="file"
                >_container.scss <span class="mx-4">-------</span>
                <span>Estilos aplicados a los contenedores de la aplicacion</span></span
              >
              <span class="file"
                >_override.scss <span class="mx-4">---------</span>
                <span>Cambios en estilos de componentes predefinidos de Vuetify</span></span
              >
              <span class="file"
                >_sidebar.scss <span class="mx-4">----------</span>
                <span>Estilos aplicados al componente TheAppDrawer (sidebar)</span></span
              >
              <span class="file"
                >_variables.scss <span class="mx-4">--------</span>
                <span>Definición de variables y cambios en la fuente del proyecto</span></span
              >
              <span class="file"
                >settings.scss <span class="mx-4">----------</span>
                <span>Archivo principal</span></span
              >
            </div>
          </div>
        </AppBaseCard>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
#hierarchy {
  font-size: 12px;
  line-height: 1.5;
  overflow: auto;
  color: #333;
}

.foldercontainer {
  width: 700px;
  span span {
    color: rgb(var(--v-theme-lightText));
  }
}

.foldercontainer,
.file {
  display: block;
  padding: 5px 5px 5px 50px;
}

@media (max-width: 768px) {
  .foldercontainer,
  .file {
    display: block;
    padding: 5px 5px 5px 30px;
  }
}

.folder:before,
.file:before {
  padding-right: 10px;
}

:deep(pre) {
  border-radius: 30px 30px 30px 30px !important;
}

// :deep(code.hljs.go) {
//   background: rgb(33, 33, 33)
// }
</style>
