import { defineStore } from 'pinia'
import router from '../router'

const baseUrl = `${import.meta.env.BASE_API_URL}`

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null,
    token: JSON.parse(localStorage.getItem('token')),
    refreshToken: JSON.parse(localStorage.getItem('refreshToken'))
  }),
  actions: {
    async login(username, password) {
      const user = 'admin'
      const token = 'fakeToken'
      const refreshToken = 'fakeRefreshToken'
      this.user = user
      this.token = token
      this.refreshToken = refreshToken
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', JSON.stringify(token))
      localStorage.setItem('refreshToken', JSON.stringify(refreshToken))
      router.push(this.returnUrl || '/')
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      router.push('/login')
    },
    setReturnUrl(url) {
      this.returnUrl = url
    },
    setRefreshToken(token) {
      this.token = token
      localStorage.setItem('token', JSON.stringify(token))
    }
  }
})
