<script setup lang="ts">
import {
  LayoutBase,
  LayoutContent,
  LayoutHeader,
  LayoutSider,
  Logo,
  Title
} from '../common'

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
    inverted: false,
    collapsed: false
  }
)

defineEmits(['update:collapsed'])

const headerHeightVar = computed(() => `${props.headerHeight}px`)
</script>

<template>
  <n-layout has-sider class="h-screen">
    <LayoutSider
      :width="siderWidth"
      :collapsed="collapsed"
      :collapsed-width="siderCollapsedWidth"
      :show-trigger="showSiderTrigger"
      :inverted="inverted"
      @update:collapsed="$emit('update:collapsed', $event)"
    >
      <div class="mt-24px flex items-center justify-center">
        <Logo :src="logo" size="30" />
        <Title v-if="!collapsed" :title="title" size="22" />
      </div>
    </LayoutSider>
    <LayoutBase>
      <LayoutHeader
        class="pro-admin-side-layout-header px-4 flex items-center justify-between"
      >
        <slot name="headerLeft">
          <div>左侧插槽</div>
        </slot>
        <slot name="headerRight">
          <div>右侧插槽</div>
        </slot>
      </LayoutHeader>
      <LayoutContent>
        <slot />
      </LayoutContent>
    </LayoutBase>
  </n-layout>
</template>

<style scoped>
.pro-admin-side-layout-header {
  height: v-bind(headerHeightVar);
}
</style>
