<template>
  <v-navigation-drawer
    left
    v-model="drawer"
    elevation="0"
    rail-width="75"
    mobile-breakpoint="lg"
    app
    class="leftSidebar no-spacer"
    :rail="miniSidebar"
    expand-on-hover
  >
    <div class="pa-5">
      <Logo />
    </div>
    <OverlayScrollbarsComponent
      element="span"
      :options="{ scrollbars: { autoHide: 'scroll' } }"
      defer
    >
      <div class="scrollnavbar">
        <v-list class="pa-4">
          <template v-for="(item, i) in sidebarMenu" :key="i">
            <NavGroup :item="item" v-if="item.header" :key="item.title" />
            <v-divider class="my-3" v-else-if="item.divider" />
            <NavCollapse class="leftPadding" :item="item" :level="0" v-else-if="item.children" />
            <NavItem :item="item" v-else class="leftPadding" />
          </template>
        </v-list>
      </div>
    </OverlayScrollbarsComponent>
  </v-navigation-drawer>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import sidebarItems from './sidebarItem'
import { onMounted } from 'vue'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

const { drawer, miniSidebar } = storeToRefs(useAppStore())
const sidebarMenu = shallowRef(sidebarItems)

onMounted(() => {
  // const drawerContainer = document.querySelector('#leftDrawer')
  // const ps = new PerfectScrollbar(drawerContainer)
  // ps.update()
})
</script>

<style></style>
