<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import {
  LayoutContent,
  LayoutHeader,
  LayoutSider,
  Logo,
  Title,
} from '../common'
import SideMenu from '../side-menu/index.vue'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    siderWidth?: number
    siderCollapsedWidth?: number
    showSiderTrigger?: boolean | 'bar' | 'arrow-circle'
    collapsed?: boolean
    active?: string
    options?: MenuOption[]
    collapsedIconSize?: number
    expandedKeys?: string[]
  }>(),
  {
    headerHeight: 48,
    siderWidth: 240,
    siderCollapsedWidth: 48,
    collapsed: false,
    collapsedIconSize: 22,
  },
)

defineEmits(['update:collapsed', 'update:active', 'update:expandedKeys'])

const headerHeightVar = computed(() => `${props.headerHeight}px`)
const contentHeightVar = computed(() => `calc(100vh - ${props.headerHeight}px)`)
</script>

<template>
  <n-layout class="h-screen">
    <LayoutHeader
      inverted
      class="pro-admin-mix-layout-header px-4 flex items-center justify-between"
    >
      <div class="flex items-center">
        <Logo :src="logo" />
        <Title :title="title" />
      </div>
      <slot name="headerRight">
        <div>右侧插槽</div>
      </slot>
    </LayoutHeader>
    <n-layout has-sider class="pro-admin-mix-layout-content">
      <LayoutSider
        :width="siderWidth"
        :collapsed="collapsed"
        :collapsed-width="siderCollapsedWidth"
        :show-trigger="showSiderTrigger"
        @update:collapsed="$emit('update:collapsed', $event)"
      >
        <SideMenu
          :collapsed="collapsed"
          :collapsed-width="siderCollapsedWidth"
          :value="active"
          :options="options"
          :collapsed-icon-size="collapsedIconSize"
          :expanded-keys="expandedKeys"
          @update:value="$emit('update:active', $event)"
          @update-expanded-keys="$emit('update:expandedKeys', $event)"
        />
      </LayoutSider>
      <LayoutContent>
        <slot />
      </LayoutContent>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.pro-admin-mix-layout-header {
  height: v-bind(headerHeightVar);
}
.pro-admin-mix-layout-content {
  height: v-bind(contentHeightVar);
}
</style>
