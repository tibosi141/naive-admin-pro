<script setup lang="ts">
import { LayoutContent, LayoutSider, Logo, Title } from '../common'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    siderWidth?: number
    siderCollapsedWidth?: number
    showSiderTrigger?: boolean | 'bar' | 'arrow-circle'
    collapsed?: boolean
  }>(),
  {
    headerHeight: 48,
    siderWidth: 240,
    siderCollapsedWidth: 48,
  },
)

defineEmits(['update:collapsed'])

const headerHeightVar = computed(() => `${props.headerHeight}px`)
const contentHeightVar = computed(() => `calc(100vh - ${props.headerHeight}px)`)
</script>

<template>
  <n-layout class="h-screen">
    <n-layout-header
      inverted
      class="pro-admin-mix-layout-header px-4 flex items-center justify-between"
    >
      <div>
        <Logo :src="logo" />
        <Title :title="title" />
      </div>
      <div>
        <slot name="headerRight" />
      </div>
    </n-layout-header>
    <n-layout has-sider class="pro-admin-mix-layout-content">
      <LayoutSider
        :width="siderWidth"
        :collapsed-width="siderCollapsedWidth"
        :show-trigger="showSiderTrigger"
        @update:collapsed="$emit('update:collapsed', $event)"
      >
        sider
      </LayoutSider>
      <LayoutContent content-style="padding: 24px;">
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
