<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <v-card>
            <v-card-title>Login</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="loginLocal">
                <v-text-field
                  v-model="email"
                  label="Correo Electrónico"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Contraseña"
                  type="password"
                  required
                ></v-text-field>
                <v-btn type="submit" color="primary">Iniciar sesión</v-btn>
              </v-form>
              <v-btn @click="tryLoader" type="submit" color="primary">Ver loader</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { ref, inject } from 'vue'
import { useAuthStore } from '@/stores/auth'

const alertToast = inject('alertToast')
const { setLoading: loader } = useAppStore()
const { login } = useAuthStore()

const email = ref('')
const password = ref('')

const loginLocal = () => {
  if (!email.value || !password.value) {
    alertToast({
      title: 'Error',
      text: 'Por favor, ingrese su correo electrónico y contraseña',
      type: 'error'
    })
    return
  }
  login(email.value, password.value)
}

const tryLoader = () => {
  loader(true)
  setTimeout(() => {
    loader(false)
  }, 2000)
}
</script>
