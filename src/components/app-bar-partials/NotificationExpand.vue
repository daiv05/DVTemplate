<script setup>
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'
const notificationList = ref([
  {
    id: 1,
    name: 'Maria Salazar',
    avatar: {
      icon: false,
      iconName: '',
      iconColor: '',
      iconBgColor: '',
      imageSrc: 'maki.jpg'
    },
    message: 'Es un hecho probado que un lector se distraerá',
    time: 'hace 2 min',
    unread: true,
    new: true
  },
  {
    id: 2,
    name: 'Verificación éxitosa',
    avatar: {
      icon: true,
      iconName: IconMdiTagSearchOutline,
      iconColorHex: '#ffffff',
      iconBgColor: 'success',
      imageSrc: ''
    },
    message: 'Hemos recibido tu solicitud. En breve te enviaremos un correo con los detalles.',
    time: 'hace 1 min',
    unread: true,
    new: false
  }
])
</script>

<template>
  <div>
    <div class="pa-4">
      <div class="d-flex align-center justify-space-between">
        <h6 class="text-h4">
          Notificaciones
          <v-chip color="warning" variant="flat" size="small" class="ml-2 text-white">01</v-chip>
        </h6>
        <a href="#" class="text-decoration-underline text-primary text-subtitle-2">
          <icon-mdi-checkbox-marked-circle-plus-outline style="font-size: 20px; color: #1e1e1e" />
        </a>
      </div>
    </div>
    <v-divider></v-divider>
    <OverlayScrollbarsComponent
      element="span"
      :options="{ scrollbars: { autoHide: 'scroll' } }"
      defer
    >
      <div style="height: calc(100vh - 300px); max-height: 650px">
        <v-list class="py-0" lines="three">
          <v-list-item
            v-for="noti in notificationList"
            :key="noti.id"
            :value="noti.id"
            color="secondary"
            class="no-spacer"
          >
            <template #prepend>
              <v-avatar
                v-if="noti.avatar.icon"
                size="40"
                variant="flat"
                :color="noti.avatar.iconBgColor"
                class="mr-3"
              >
                <component :is="noti.avatar.iconName" size="24" color="white" />
              </v-avatar>
              <v-avatar v-else size="40" class="mr-3">
                <img :src="`/example-img/${noti.avatar.imageSrc}`" width="40" alt="Maki" />
              </v-avatar>
            </template>
            <div class="d-inline-flex align-center justify-space-between w-100">
              <h6 class="text-subtitle-1 font-weight-regular">{{ noti.name }}</h6>
              <span class="text-subtitle-2 text-medium-emphasis">{{ noti.time }}</span>
            </div>

            <p class="text-subtitle-2 text-medium-emphasis mt-1">
              {{ noti.message }}
            </p>
            <div class="my-3">
              <v-chip
                v-if="noti.unread"
                size="small"
                text="Unread"
                color="error"
                variant="tonal"
                class="mr-2"
              />
              <v-chip v-if="noti.new" size="small" text="New" color="warning" variant="tonal" />
            </div>
            <v-divider></v-divider>
          </v-list-item>
        </v-list>
      </div>
    </OverlayScrollbarsComponent>
    <v-divider></v-divider>
    <div class="pa-2 text-center">
      <v-btn color="primary" variant="text">Ver más</v-btn>
    </div>
  </div>
</template>
