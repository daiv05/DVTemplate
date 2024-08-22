<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'
import { shallowRef } from 'vue'

const page = ref({ title: 'Loader' })
const breadcrumbs = ref([
  {
    title: 'Loader',
    disabled: true,
    href: '#'
  }
])
const suspenseCode = shallowRef(
  `<RouterView v-slot="{ Component }">
  <template v-if="Component">
    <Transition mode="out-in">
      <KeepAlive>
        <Suspense>
          <!-- main content -->
          <component :is="Component"></component>
          <!-- loading state -->
          <template #fallback>
            <AppLoader />
          </template>
        </Suspense>
      </KeepAlive>
    </Transition>
  </template>
</RouterView>
`
)
</script>
<template>
  <div>
    <AppBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></AppBreadcrumb>
    <v-row>
      <v-col cols="12">
        <AppBaseCard title="Suspense/Loader">
          <p>
            La plantilla incluye un componente llamado <code>AppLoader.vue</code>, que se puede
            utilizar para mostrar una pantalla de carga en la aplicación. Este componente se utiliza
            en conjunto con el nuevo componente llamado <code>Suspense</code> (nativo de Vue 3) para
            mostrar un loader mientras se termina de cargar todas las dependencias asíncronas
            anidadas en el árbol de componentes.
            <br />
            El componente <code>Suspense</code> se utiliza para envolver el contenido que se
            renderizará (en este caso todo el RouterView). Mientras se está cargando el contenido se
            mostrará este loader y al finalizar la carga, el contenido del RouterView se renderizará
            acompañado de una animación.
          </p>
          <highlightjs :code="suspenseCode" language="html" :autodetect="false"></highlightjs>
          <v-alert
            class="my-4"
            type="info"
            variant="tonal"
            text="Esta lógica solo se aplica al DashboardLayout de la aplicación."
            title="Layout"
          ></v-alert>
          <p></p>
        </AppBaseCard>
      </v-col>
    </v-row>
  </div>
</template>
