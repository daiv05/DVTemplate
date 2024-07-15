import _axios from '@/plugins/axios'

/**
 * @description Axios client to make requests to the server
 *
 * @method Method to use in the request
 * @url URL to make the request
 * @data Data to send in the request (params or body)
 */
export default async function axiosCommon(method = 'get', url = '', data = {}, headers = {}) {
  const config = {
    method,
    url,
    headers
  }

  if (method === 'get') {
    config.params = data
  } else {
    config.data = data
  }

  let response = null
  let error = null
  let status = null

  await _axios(config)
    .then((res) => {
      response = res.data
      status = res.status
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
