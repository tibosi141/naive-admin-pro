<script setup lang="ts">
import { LayoutBase, LayoutContent, Logo, Title } from '../common'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    inverted?: boolean
  }>(),
  {
    headerHeight: 48,
    inverted: true,
  },
)

const headerHeightVar = computed(() => `${props.headerHeight}px`)
</script>

<template>
  <LayoutBase class="h-screen">
    <n-layout-header
      :inverted="inverted"
      class="pro-admin-top-layout-header px-4 flex items-center justify-between"
    >
      <div class="flex items-center">
        <Logo :src="logo" />
        <Title :title="title" />
      </div>
      <slot name="headerRight">
        <div>右侧插槽</div>
      </slot>
    </n-layout-header>
    <LayoutContent content-style="padding: 24px;">
      <slot />
    </LayoutContent>
  </LayoutBase>
</template>

<style scoped>
.pro-admin-top-layout-header {
  height: v-bind(headerHeightVar);
}
</style>
