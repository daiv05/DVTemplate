import axios from 'axios'
import { useAuthStore } from '@/stores/auth.js'
import router from '../router'
import { notify } from '@kyvg/vue3-notification'

const _axios = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 10000
})

_axios.interceptors.request.use(
  function (config) {
    const auth = useAuthStore()
    const token = auth.token ? auth.token : localStorage.getItem('token')

    if (token) config.headers.Authorization = 'Bearer ' + token

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const auth = useAuthStore()
    if (error?.response?.status >= 500) {
      notify({
        type: 'error',
        text: 'Error en el servidor, por favor intenta más tarde'
      })
    }
    if (error?.response?.status === 400) {
      notify({
        type: 'error',
        text: 'Error en la petición, por favor revisa los datos'
      })
    }
    if (error?.response?.status === 401) {
      try {
        const refreshToken = auth.refreshToken
          ? auth.refreshToken
          : localStorage.getItem('refreshToken')

        const token = auth.token ? auth.token : localStorage.getItem('token')

        const response = await axios.post(
          process.env.BASE_API_URL + '/refresh',
          {
            refreshToken: refreshToken
          },
          {
            headers: {
              Authorization: 'Bearer ' + token
            }
          }
        )
        if (response.status === 200) {
          const token_1 = response.data.token
          const refreshToken_1 = response.data.refresh_token
          localStorage.setItem('token', token_1)
          localStorage.setItem('refreshToken', refreshToken_1)
          auth.login(token_1, refreshToken_1)
          error.response.config.headers['Authorization'] = 'Bearer ' + token_1
          return axios(error.response.config)
        }
      } catch (error) {
        notify({
          type: 'error',
          text: 'Sesión expirada, por favor inicie sesión nuevamente'
        })
        router.push('/login')
      }
    }
    if (error?.response?.status === 403) {
      notify({
        type: 'error',
        text: 'No tienes permisos para realizar esta acción'
      })
      router.push('/')
    }

    return Promise.reject(error)
  }
)

export default _axios
