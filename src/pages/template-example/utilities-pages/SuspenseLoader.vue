<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'
import { useAppStore } from '@/stores/app'
const { setLoading } = useAppStore()
import { shallowRef } from 'vue'

const page = ref({ title: 'Loader' })
const breadcrumbs = ref([
  {
    title: 'Loader',
    disabled: true,
    href: '#'
  }
])

const showLoader = () => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000)
}

const suspenseCode = shallowRef(
  `<RouterView v-slot="{ Component }">
  <template v-if="Component">
    <Transition name="slide-fade" mode="out-in">
      <KeepAlive>
        <div>
          <!-- <v-card v-if="error.length > 0" ... En caso de error  -->
          <Suspense>
            <!-- main content -->
            <component :is="Component"></component>
            <!-- loading state -->
            <template #fallback>
              <AppLoader />
            </template>
          </Suspense>
        </div>
      </KeepAlive>
    </Transition>
  </template>
</RouterView>
`
)

const errorCaptured = shallowRef(
  `
<template>
  <!-- ... <KeepAlive> ... -->
  <div>
    <v-card v-if="error?.length > 0">
      <!-- Contenido que se quiere mostrar
      en caso de un error indesperado -->
    </v-card>
    <Suspense v-else>
      <!-- ... -->
    </Suspense>
  </div>
</template>

<script setup>
import { onErrorCaptured } from 'vue'
const error = ref([])
try {
  onErrorCaptured((error) => {
    errorCaptured.value.push({
      error
    })
    // Tambien se puede devolver false
    // para evitar que el error se siga propagando
    return true
  })
} catch (e) {
  console.error(e, 'error')
}
<\/script>
`
)

const loaderCode = shallowRef(
  `
<script setup>
import { useAppStore } from '@\/stores\/app'
const { setLoading } = useAppStore()
const showLoader = () => {
  setLoading(true)
}
const hideLoader = () => {
  setLoading(false)
}
<\/script>
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
            utilizar para mostrar una pantalla de carga en la aplicación. Es utilizado en conjunto
            con <code>Suspense</code> (nativo de Vue 3) para mostrar un loader mientras se termina
            de cargar todas las dependencias asíncronas anidadas en el árbol de componentes cuando
            se navega entre rutas.
          </p>
          <v-alert
            border="start"
            class="my-4"
            color="secondary"
            variant="tonal"
            type="info"
            text="Si en algún componente hijo se realiza una acción asíncrona y no queremos que se muestre mientras se encuentre cargando, Suspense
            se encargará de mostrar un loader."
            title="En español"
          />
          <p>
            El componente <code>Suspense</code> se utiliza para envolver el contenido al que se le
            está aplicando la lógica de carga, en este caso, el componente que va a renderizar el
            RouterView. <br />
            Se agrega un componente más como fallback: mientras se termina de cargar el contenido
            será esto lo que se visualice.
          </p>
          <highlightjs :code="suspenseCode" language="html" :autodetect="false"></highlightjs>
          <p class="my-4">
            <code>Suspense</code> también nos permite manejar errores, en caso de una promesa
            rechazada sin manejar, una petición, o en general si algo inesperado falla, podemos
            mostrar un mensaje o componente de error y evitar que la aplicación se rompa.
          </p>
          <highlightjs :code="errorCaptured" language="html" :autodetect="false"></highlightjs>
          <p class="my-4">
            Como se observa en el código, se utiliza el hook <code>onErrorCaptured</code> para
            capturar los errores y mostrar una card personalizada con el detalle. Si se retornara
            <code>false</code> evitaría que el error se siga propagando, lo que esencialmente
            significa que «este error ha sido manejado y debe ser ignorado» <br />
            Puedes leer más sobre <code>onErrorCaptured</code> en
            <a
              href="https://vuejs.org/api/composition-api-lifecycle.html#onerrorcaptured"
              target="_blank"
              rel="noopener noreferrer"
              >Lifecycle Hooks</a
            >
          </p>
          <v-alert
            border="start"
            color="secondary"
            variant="tonal"
            class="my-4"
            type="warning"
            text="Toda esta lógica solo se aplica al DashboardLayout de la aplicación (@/layouts/DashboardLayout.vue)"
            title="Layout"
          />
          <p></p>
          <p>
            Por último, <code>AppLoader</code> es un componente simple que muestra una animación de
            carga. Puedes utilizarlo al momento de realizar una petición asíncrona, como guardar un
            registro en una base de datos u obtener un listado de una tabla, o cuando sea que
            necesites mostrar una pantalla de carga. Se controla mediante la AppStore de la
            aplicación:
          </p>
          <highlightjs :code="loaderCode" language="html" :autodetect="false"></highlightjs>
          <v-row justify="center" class="mt-4">
            <v-col cols="12" class="d-flex justify-center">
              <v-btn color="primary" @click="showLoader">
                <icon-mdi-play />
                <span>Mostrar Loader</span>
              </v-btn></v-col
            >
          </v-row>
        </AppBaseCard>
      </v-col>
    </v-row>
  </div>
</template>
