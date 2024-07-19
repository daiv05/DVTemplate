<script setup>
import { ref } from 'vue'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

const notificationTypes = ref(['All Notifications', 'New', 'Unread', 'Other'])
const selectNotify = ref('All Notifications')
</script>

<template>
<div style="font-family: 'Montserrat', 'sans-serif';">
  <div class="pa-4">
    <div class="d-flex align-center justify-space-between mb-3">
      <h6 class="text-subtitle-1">
        All Notifications
        <v-chip color="warning" variant="flat" size="small" class="ml-2 text-white">01</v-chip>
      </h6>
      <a href="#" class="text-decoration-underline text-primary text-subtitle-2"
        >Mark as all read</a
      >
    </div>
    <v-select
      :items="notificationTypes"
      v-model="selectNotify"
      color="primary"
      variant="outlined"
      density="default"
      hide-details
    ></v-select>
  </div>
  <v-divider></v-divider>
  <OverlayScrollbarsComponent
    element="span"
    :options="{ scrollbars: { autoHide: 'scroll' } }"
    defer
  >
    <div style="height: calc(100vh - 300px); max-height: 650px">
      <v-list class="py-0" lines="three">
        <v-list-item value="" color="secondary" class="no-spacer">
          <template v-slot:prepend>
            <v-avatar size="40" class="mr-3 py-2">
              <img src="@/assets/maki.svg" width="40" alt="Julia" />
            </v-avatar>
          </template>
          <div class="d-inline-flex align-center justify-space-between w-100">
            <h6 class="text-subtitle-1 font-weight-regular">John Deo</h6>
            <span class="text-subtitle-2 text-medium-emphasis">2 mins ago</span>
          </div>

          <p class="text-subtitle-2 text-medium-emphasis mt-1">
            It is a long established fact that a reader will be distracted
          </p>
          <div class="mt-3">
            <v-chip size="small" text="Unread" color="error" variant="tonal" class="mr-2" />
            <v-chip size="small" text="New" color="warning" variant="tonal" />
          </div>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item value="" color="secondary" class="no-spacer">
          <template v-slot:prepend>
            <v-avatar size="40" variant="flat" color="lightsuccess" class="mr-3 py-2 text-success">
              <v-icon size="20">mdi-tag-search-outline</v-icon>
            </v-avatar>
          </template>
          <div class="d-inline-flex align-center justify-space-between w-100">
            <h6 class="text-subtitle-1">Store Verification Done</h6>
            <span class="text-subtitle-2 text-medium-emphasis">2 mins ago</span>
          </div>

          <p class="text-subtitle-2 text-medium-emphasis mt-1">
            We have successfully received your request.
          </p>
          <div class="mt-3">
            <v-chip size="small" color="error" text="Unread" variant="tonal" />
          </div>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item value="" color="secondary" class="no-spacer">
          <template v-slot:prepend>
            <v-avatar size="40" variant="flat" color="lightprimary" class="mr-3 py-2 text-primary">
              <v-icon size="20">mdi-tag-search-outline</v-icon>
            </v-avatar>
          </template>
          <div class="d-inline-flex align-center justify-space-between w-100">
            <h6 class="text-subtitle-1">Check your Mail.</h6>
            <span class="text-subtitle-2 text-medium-emphasis">2 mins ago</span>
          </div>

          <p class="text-subtitle-2 text-medium-emphasis mt-1">
            All done! Now check your inbox as you're in for a sweet treat!
          </p>
          <div class="mt-3">
            <v-btn color="primary" variant="flat">
              <template v-slot:append>
                <v-icon size="20">mdi-tag-search-outline</v-icon>
              </template>
              Mail
            </v-btn>
          </div>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item value="" color="secondary" class="no-spacer">
          <template v-slot:prepend>
            <v-avatar size="40" class="mr-3 py-2">
              <img src="@/assets/maki.svg" width="40" alt="Julia" />
            </v-avatar>
          </template>
          <div class="d-inline-flex align-center justify-space-between w-100">
            <h6 class="text-subtitle-1">John Deo</h6>
            <span class="text-subtitle-2 text-medium-emphasis">2 mins ago</span>
          </div>

          <p class="text-subtitle-2 mt-1">
            <span class="text-medium-emphasis">Uploaded two file on </span>
            <span class="font-weight-medium">21 Jan 2020</span>
          </p>
          <div class="mt-3 bg-lightsecondary rounded pa-5 d-flex align-center">
            <v-icon size="20" stroke-width="1.5">mdi-tag-search-outline</v-icon>
            <span class="ml-2 text-subtitle-1">demo.jpg</span>
          </div>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item value="" color="secondary" class="no-spacer">
          <template v-slot:prepend>
            <v-avatar size="40" class="mr-3 py-2">
              <img src="@/assets/maki.svg" width="40" alt="Julia" />
            </v-avatar>
          </template>
          <div class="d-inline-flex align-center justify-space-between w-100">
            <h6 class="text-subtitle-1">John Deo</h6>
            <span class="text-subtitle-2 text-medium-emphasis">2 mins ago</span>
          </div>

          <p class="text-subtitle-2 mt-1 text-medium-emphasis mb-3">
            It is a long established fact that a reader will be distracted
          </p>
          <v-chip size="small" color="success" text="Confirmation of Account." />
        </v-list-item>
      </v-list>
    </div>
  </OverlayScrollbarsComponent>
  <v-divider></v-divider>
  <div class="pa-2 text-center">
    <v-btn color="primary" variant="text">View All</v-btn>
  </div>
</div>
</template>
