<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  breadcrumbs: {
    type: Array,
    default: () => []
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <v-row class="page-breadcrumb mb-1 mt-1">
    <v-col cols="12" md="12">
      <v-card variant="flat" class="px-4 py-3 rounded-lg">
        <v-row no-gutters class="align-center">
          <v-col md="5">
            <h3 class="text-h3">{{ props.title }}</h3>
          </v-col>

          <v-col md="7" sm="12" cols="12">
            <v-breadcrumbs :items="props.breadcrumbs" class="text-h5 justify-md-end pa-1">
              <template #divider>
                <div class="d-flex align-center">
                  <v-icon size="17" icon="mdi-chevron-right"></v-icon>
                </div>
              </template>
              <template #prepend>
                <v-icon size="small" class="text-secondary mr-2" icon="mdi-home"></v-icon>
                <div class="d-flex align-center">
                  <v-icon size="17" icon="mdi-chevron-right"></v-icon>
                </div>
              </template>
            </v-breadcrumbs>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.page-breadcrumb {
  .v-toolbar {
    background: transparent;
  }
}
</style>
