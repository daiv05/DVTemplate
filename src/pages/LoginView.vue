<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <v-card>
            <v-card-title>Login</v-card-title>
            <v-card-text>
              <v-text-field
                v-model="email"
                rounded="md"
                label="Correo Electrónico"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                rounded="md"
                label="Contraseña"
                type="password"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="primary" @click="loginLocal">Iniciar Sesión</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useAuthStore } from '@/stores/auth'

const alertToast = inject('alertToast')
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
</script>
