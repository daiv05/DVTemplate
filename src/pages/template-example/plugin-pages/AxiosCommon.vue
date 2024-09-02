<script setup>
import AppBaseCard from '@/components/AppBaseCard.vue'
import { shallowRef } from 'vue'

const page = ref({ title: 'Axios' })
const breadcrumbs = ref([
  {
    title: 'Axios',
    disabled: true,
    href: '#'
  }
])
const axiosHttp = shallowRef(
  `  // src/utils/http/axios-common.js
  await _axios(config)
    .then((res) => {
      response = res.data
      status = res.status
      return res
    })
    .catch((error) => {
      if (error.response) {
        error = error.response.data
      } else if (error.request) {
        error = error.request
      } else {
        error = error.message
      }
    })

  return {
    data: response,
    error: error,
    status: status
  }`
)

const statusCodes = shallowRef([
  {
    code: '400',
    title: 'Bad Request',
    description: 'El servidor no puede devolver una respuesta debido a un error del cliente',
    color: 'red'
  },
  {
    code: '401',
    title: 'Unauthenticated',
    description: 'No estás autenticado o no posees credenciales válidas',
    color: 'red-accent-4'
  },
  {
    code: '403',
    title: 'Unauthorized',
    description: 'No tienes permitido acceder a ese recurso',
    color: 'red-darken-4'
  },
  {
    code: '404',
    title: 'Not found',
    description: 'No se encontró el recurso',
    color: 'blue-grey'
  },
  {
    code: '418',
    title: "I'm a teapot",
    description: 'El servidor se rehúsa a preparar café porque es una tetera',
    color: 'yellow-darken-1'
  },
  {
    code: '429',
    title: 'To Many Request',
    description: 'Demasiadas peticiones',
    color: 'grey-darken-1'
  },
  {
    code: '>= 500',
    title: 'Internal Server Error',
    description: 'Hubo un error en el servidor y la solicitud no pudo ser completada',
    color: 'amber-accent-4'
  }
])
</script>
<template>
  <div>
    <AppBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></AppBreadcrumb>
    <v-row>
      <v-col cols="12">
        <AppBaseCard title="Axios">
          <p>
            Axios es un cliente HTTP basado en promesas para el navegador y Node.js. En
            <code>src/plugins/axios.js</code>, se ha definido una lógica común para todas las
            solicitudes. La configuración incluye:
          </p>
          <v-list lines>
            <v-list-item>
              <v-list-item-title>Creación de la instancia</v-list-item-title>
              <v-list-item-subtitle
                >URL base, headers y timeout por defecto (Axios Docs:
                <a href="https://axios-http.com/docs/instance" target="_blank"
                  >The Axios Instance</a
                >
                y
                <a href="https://axios-http.com/docs/req_config" target="_blank">Request Config)</a>
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Request interceptor</v-list-item-title>
              <v-list-item-subtitle>
                Adición del token de autenticación a todas las solicitudes salientes (Axios Docs:
                <a href="https://axios-http.com/docs/interceptors" target="_blank">Interceptors)</a>
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Response interceptor</v-list-item-title>
              <v-list-item-subtitle>
                Manejo de errores y alertas en todas las respuestas con error, incluyendo lógica
                para el refresh token <br />
                (Axios Docs:
                <a href="https://axios-http.com/docs/interceptors" target="_blank">Interceptors</a>
                y
                <a href="https://axios-http.com/docs/handling_errors" target="_blank"
                  >Handling Errors)</a
                >
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
          <p class="mb-0 mt-1">Los errores se manejan en 3 categorías:</p>
          <v-list lines>
            <v-list-item>
              <v-list-item-title>Response Errors</v-list-item-title>
              <v-list-item-subtitle
                >Se ha realizado la solicitud y el servidor ha respondido con un código de estado
                que está fuera del rango de 2xx.</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Request Errors</v-list-item-title>
              <v-list-item-subtitle
                >La petición se realizó pero no se recibió respuesta.</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Unexpected Errors</v-list-item-title>
              <v-list-item-subtitle
                >Ha ocurrido algo al configurar la solicitud que ha provocado un
                error.</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>
          <p>
            Para las respuestas con error, se muestra una alerta temporal con un mensaje. Por
            defecto se espera que la petición devuelva:
            <code>error.response.data.message</code>, pero puedes customizar o agregar más casos
            según la estructura del mensaje de error que esperas recibir.
            <br />
            Por defecto son manejados los siguientes códigos de estado:
          </p>
          <v-timeline align="start" side="end">
            <v-timeline-item
              v-for="(scode, i) in statusCodes"
              :key="i"
              :dot-color="scode.color"
              size="small"
            >
              <div class="d-flex">
                <strong class="me-4">{{ scode.code }}</strong>
                <div>
                  <strong>{{ scode.title }}</strong>
                  <div class="text-caption">{{ scode.description }}</div>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <p>Cualquier otro código de estado no listado, mostrará un mensaje de error genérico.</p>
          <v-alert
            border="start"
            color="secondary"
            variant="tonal"
            class="my-4"
            type="info"
            text="El flujo para el refresh token se maneja en el response interceptor, si el servidor
            responde con un código de estado 401, se intenta refrescar el token y se reenvía la
            solicitud original. En caso de que el refresh token haya expirado, u ocurra un error en el
            proceso, se redirige al usuario a la página de login."
            title="Refresh Token"
          />
          <p>
            Como estándar para esta plantilla, se recomienda utilizar AxiosCommon
            (<code>src/utils/http/axios-common.js</code>) como encargado de llamar a está instancia
            de Axios y manejar las respuestas y errores. Utiliza AxiosCommon en los services de tu
            aplicación. Puedes ver más sobre como realizar peticiones HTTP en la sección
            <router-link :to="{ name: 'services-http' }">Services</router-link>.
          </p>
          <highlightjs :code="axiosHttp" language="javascript" :autodetect="false"></highlightjs>
          <p class="my-4">
            De cualquier forma, si lo necesitas puedes importar <code>_axios</code> desde
            <code>src/plugins/axios.js</code> o <code>axios</code> directamente desde la librería y
            utilizarlo como prefieras.
          </p>
        </AppBaseCard>
      </v-col>
    </v-row>
  </div>
</template>
