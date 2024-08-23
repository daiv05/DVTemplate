import { defineStore } from 'pinia'
import router from '../router'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import alertToast from '@/plugins/notification'
import { jwtDecode } from 'jwt-decode'

const baseUrl = `${import.meta.env.VITE_BASE_API_URL}`

export const useAuthStore = defineStore('auth', () => {
  const user = useStorage('user', {})
  const returnUrl = ref(null)
  const token = useStorage('token', null)
  const refreshToken = useStorage('refreshToken', null)

  const { setLoading } = useAppStore()

  function login(username, password) {
    setLoading(true)
    user.value = {
      username: username,
      email: username + '@example.com'
    }
    token.value = 'fakeToken'
    refreshToken.value = 'fakeRefreshToken'
    router.push({ name: 'inicio' })
    setLoading(false)
    alertToast({
      title: 'Bienvenido!',
      message: 'Inicio de sesión exitoso',
      type: 'success'
    })
  }

  function logout() {
    user.value = null
    token.value = null
    refreshToken.value = null
    router.push('/login')
    alertToast({
      title: 'Nos vemos!',
      message: 'Cierre de sesión exitoso',
      type: 'success'
    })
  }

  function setAuthData(jwtToken) {
    const { userData, token, refreshToken } = jwtDecode(jwtToken)
    user.value = userData
    token.value = token
    refreshToken.value = refreshToken
  }

  function setReturnUrl(url) {
    returnUrl.value = url
  }

  return { user, returnUrl, token, refreshToken, login, logout, setReturnUrl, setAuthData }
})
