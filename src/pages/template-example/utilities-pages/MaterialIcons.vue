<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'
import { shallowRef } from 'vue'

const page = ref({ title: 'Material Design Icons' })
const breadcrumbs = ref([
  {
    title: 'Iconos',
    disabled: true,
    href: '#'
  },
  {
    title: 'MDI',
    disabled: true,
    href: '#'
  }
])

const codeIcons = ref(
  `<script setup>
  // Gracias a las librerías de unplugin-auto-import y 
  // unplugin-components NO es necesario realizar la importación
  import IconMdiAlertCircle from '~icons/mdi/alert-circle'
<\/script>

<template>
  <!-- El tamaño y color de los iconos se pueden modificar
  con el atributo style -->
	<IconMdiAlertCircle style="font-size: 20px; color: black" />
  <!-- Con la clase text-[color] tambien puedes modificar el color,
  es heredado si el componente padre lo posee -->
  <div class="text-black">
    <IconMdiAlertCircle style="font-size: 20px" />
  </div>
  <!-- Puedes escribir también las etiquetas como: -->
	<icon-mdi-alert-circle style="font-size: 20px; color: black" />
</template>
`
)

const codeIconsComponent = ref(
  `<script setup>
  const iconObjectExample = reactive({
    nombre: 'IconMdiAlertCircle',
    icon: IconMdiAlertCircle
  })
<\/script>

<template>
  <component :is="iconObjectExample.icon" style="font-size: 18px" />
</template>
`
)

const iconExamples = shallowRef([
  {
    icon: IconMdiPaletteSwatchOutline,
    title: '<icon-mdi-palette-swatch-outline />',
    color: '#1A237E'
  },
  {
    icon: IconMdiPaletteSwatch,
    title: '<icon-mdi-palette-swatch />',
    color: '#FFC107'
  },
  {
    icon: IconMdiPalette,
    title: '<icon-mdi-palette />',
    color: '#FF5722'
  },
  {
    icon: IconMdiPaletteOutline,
    title: '<icon-mdi-palette-outline />',
    color: '#4CAF50'
  },
  {
    icon: IconMdiPaletteAdvanced,
    title: '<icon-mdi-palette-advanced />',
    color: '#00BFA5'
  }
])
</script>
<template>
  <div>
    <AppBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></AppBreadcrumb>
    <v-row>
      <v-col cols="12">
        <AppBaseCard title="Iconos">
          <v-row>
            <v-col cols="12">
              <p>
                Vuetify incluye por defecto la WebFont de Material Design Icons, sin embargo, en
                esta plantilla se ha eliminado y en su lugar se ha integrado la librería
                <code>unplugin-icons</code> con la finalidad de reducir problemas de optimización y
                carga de iconos. Puedes encontrar más información sobre esta decisión y sobre como
                añadir mas fuentes en la sección de
                <router-link :to="{ name: 'unplugin', hash: '#icons' }">unplugin-icons</router-link>
              </p>

              <p>El uso básico de los iconos es el siguiente:</p>
              <highlightjs language="html" :code="codeIcons" :autodetect="false" />
              <p class="my-2">
                El formato para utilizarlos es: <br />
                <code>IconMdi[NombreIcono]</code>
                <v-list lines>
                  <v-list-item>
                    <v-list-item-title>Icon</v-list-item-title>
                    <v-list-item-subtitle
                      >Es el prefijo que se utiliza para todos los iconos, definido en los resolver
                      (ver <code>vite.config.mjs</code>)</v-list-item-subtitle
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Mdi</v-list-item-title>
                    <v-list-item-subtitle
                      >Prefijo de los iconos de Material Design Icons</v-list-item-subtitle
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>NombreIcono</v-list-item-title>
                    <v-list-item-subtitle
                      >Nombre del icono que se va a utilizar, puedes consultar la lista completa en
                      <a
                        href="https://pictogrammers.com/library/mdi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Pictogrammers MDI</a
                      ></v-list-item-subtitle
                    >
                  </v-list-item>
                </v-list>
                Los iconos también pueden asignarse a una variable, para luego, si se necesita,
                utilizar el valor en un template con
                <code>&lt;component&gt;</code>
              </p>

              <highlightjs language="html" :code="codeIconsComponent" :autodetect="false" />

              <v-alert
                border="start"
                class="mt-4"
                color="secondary"
                variant="tonal"
                type="info"
                text="De esta forma se manejan los iconos para la barra de navegación
                de este layout, puedes hechar un vistazo en '@/navigation/sidebarItem.js' y en '@/components/app-drawer-partials/IconSet.vue'"
                title="Sidebar"
              />

              <v-card elevation="0" rounded="lg" class="mt-4">
                <v-card-title><p>Ejemplos:</p></v-card-title>
                <v-card-text class="pt-4 rounded-lg">
                  <v-row class="d-flex justify-center flex-wrap ga-1">
                    <v-col v-for="(icon, i) in iconExamples" :key="i" cols="12" md="3">
                      <v-card
                        class="my-4 mx-auto rounded-lg text-center d-flex align-center"
                        elevation="0"
                        max-width="300"
                        height="100"
                      >
                        <v-card-text class="pt-4">
                          <component
                            :is="icon.icon"
                            :style="{ fontSize: '40px', color: icon.color }"
                          />
                          <p class="text-body-2 font-weight-bold ma-2">{{ icon.title }}</p>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </AppBaseCard>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
