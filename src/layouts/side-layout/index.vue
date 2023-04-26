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
    inverted?: boolean
    collapsed?: boolean
  }>(),
  {
    headerHeight: 48,
    siderWidth: 240,
    siderCollapsedWidth: 48,
    inverted: true,
  },
)

defineEmits(['update:collapsed'])

const headerHeightVar = computed(() => `${props.headerHeight}px`)
</script>

<template>
  <n-layout has-sider class="h-screen">
    <LayoutSider
      :width="siderWidth"
      :collapsed-width="siderCollapsedWidth"
      :show-trigger="showSiderTrigger"
      :inverted="inverted"
      @update:collapsed="$emit('update:collapsed', $event)"
    >
      <div class="mt-24px flex items-center justify-center">
        <Logo size="30" :src="logo" />
        <Title v-if="!collapsed" size="22" :title="title" />
      </div>
    </LayoutSider>
    <n-layout style="--n-color: var(--pro-admin-layout-content-bg)">
      <n-layout-header
        class="pro-admin-side-layout-header px-4 flex items-center justify-between"
      >
        <slot name="headerLeft" />
        <slot name="headerRight" />
      </n-layout-header>
      <LayoutContent content-style="padding: 24px;">
        <slot />
      </LayoutContent>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.pro-admin-side-layout-header {
  height: v-bind(headerHeightVar);
}
</style>
