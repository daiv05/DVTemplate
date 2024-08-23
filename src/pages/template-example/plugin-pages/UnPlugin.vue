<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'

const page = ref({ title: 'unplugin' })
const breadcrumbs = ref([
  {
    title: 'unplugin',
    disabled: true,
    href: '#'
  }
])
</script>
<template>
  <div>
    <AppBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></AppBreadcrumb>
    <v-row>
      <v-col cols="12">
        <AppBaseCard title="Manejo de importaciones">
          <p>
            Unplugin es una herramienta que permite importar archivos de diferentes formatos en tu
            proyecto.
          </p>
          <p>
            Con unplugin puedes importar archivos de diferentes formatos como CSS, SCSS, SVG, JSON,
            entre otros.
          </p>
          <p>
            Sin embargo, al utilizar esta opción nos encontraremos con problemas de optimización, ya
            que Vuetify importa todos los iconos, se utilicen o no en la aplicación. <br />
            <br />
            En por esto que en esta plantilla se ha integrado la librería
            <a href="https://github.com/unplugin/unplugin-icons"><code>unplugin-icons</code></a>
            que en conjunto con
            <a href="https://iconify.design/" target="_blank" rel="noopener noreferrer"
              ><code>iconify</code></a
            >
            facilitan el uso de más de 100 fuentes de iconos, con la funcionalidad de que sólo los
            iconos utilizados para los componentes Vuetify internamente se importarán en el bundle
            de la aplicación<br />
            <v-alert
              border="start"
              color="secondary"
              variant="tonal"
              class="my-4"
              type="info"
              text="Por defecto, utiliza API's como fuentes de iconos, lo que significa que no servirá si no tienes conexión a internet, sumado a
            ese comportamiento típico de flash de iconos faltantes, sobre todo en la carga inicial de la aplicación, esto se arregla con el uso de
            unplugin-icons por debajo."
              title="Iconify"
            />
          </p>
        </AppBaseCard>
      </v-col>
    </v-row>
  </div>
</template>
