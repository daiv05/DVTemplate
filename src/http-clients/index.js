import HttpRequestMethods from '@/utils/http/const/HttpRequestMethods'
import HttpResponseTypes from '@/utils/http/const/HttpResponseTypes'
import HttpContentTypes from '@/utils/http/const/HttpContentTypes'
import AxiosClient from '@/http-clients/AxiosClient'

/**
 * @description Función global para realizar peticiones HTTP con el cliente seleccionado
 * @param {string} requestMethod - Método de la petición (GET, POST, PUT, DELETE, PATCH)
 * @param {string} endpoint - URL de la petición
 * @param {object} params - Parámetros de la petición
 * @param {object} data - Datos de la petición
 * @param {object} headers - Cabeceras de la petición
 * @param {string} responseType - Tipo de respuesta
 * @param {string} baseURL - URL base de la petición (opcional)
 * @param {string} client - Cliente de la petición (opcional) (default: axios)
 * @returns {Promise} - Promesa con la respuesta de la petición
 */
export default async function httpClient(
  requestMethod = HttpRequestMethods.GET,
  endpoint = '',
  params = {},
  data = {},
  headers = {},
  responseType = HttpResponseTypes.JSON,
  baseURL = '',
  client = 'axios'
) {
  if (!Object.values(HttpRequestMethods).includes(requestMethod)) {
    console.error('Request-Method no válido (httpClient)')
    return
  }

  if (!Object.values(HttpResponseTypes).includes(responseType)) {
    console.error('Response-Type no válido (httpClient)')
    return
  }

  if (headers['Content-Type']) {
    if (!Object.values(HttpContentTypes).includes(headers['Content-Type'])) {
      console.error('Content-Type no válido (httpClient)')
      return
    }
  } else {
    headers['Content-Type'] = HttpContentTypes.APPLICATION_JSON
  }

  if (typeof endpoint !== 'string') {
    console.error('Endpoint inválido (httpClient)')
    return
  }

  const config = {
    method: requestMethod,
    url: endpoint,
    headers: headers,
    responseType: responseType,
    baseURL: baseURL ?? import.meta.env.VITE_BASE_API_URL,
    params: params,
    data: data
  }

  switch (client) {
    case 'axios':
      return await AxiosClient(config)
    default:
      console.error('Cliente no válido (httpClient)')
      return
  }
}
