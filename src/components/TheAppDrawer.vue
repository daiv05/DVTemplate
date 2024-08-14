<template>
  <v-navigation-drawer
    v-model="drawer"
    elevation="0"
    rail-width="75"
    mobile-breakpoint="lg"
    class="leftSidebar no-spacer"
    :rail="miniSidebar"
    expand-on-hover
  >
    <div class="pa-5">
      <LogoNav />
    </div>
    <OverlayScrollbarsComponent
      element="span"
      :options="{ scrollbars: { autoHide: 'scroll' } }"
      defer
    >
      <div class="scrollnavbar">
        <v-list class="pa-4">
          <template v-for="(item, i) in sidebarMenu" :key="i">
            <NavGroup v-if="item.header" :key="item.title" :item="item" />
            <v-divider v-else-if="item.divider" class="my-3" />
            <NavCollapse v-else-if="item.children" class="leftPadding" :item="item" :level="0" />
            <NavItem v-else :item="item" class="leftPadding" />
          </template>
        </v-list>
      </div>
    </OverlayScrollbarsComponent>
  </v-navigation-drawer>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import sidebarItems from '../navigation/sidebarItem'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

const { drawer, miniSidebar } = storeToRefs(useAppStore())
const sidebarMenu = shallowRef(sidebarItems)
</script>

<style></style>
