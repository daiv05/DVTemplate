import _axios from '@/plugins/axios'

export default async function axiosClient(config) {
  const configAxios = {
    method: config.method,
    url: config.url,
    headers: config.headers,
    responseType: config.responseType,
    baseURL: config.baseURL,
    params: config.params,
    data: config.data
  }

  let response = null
  let error = null
  let status = null

  await _axios(configAxios)
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
  }
}
