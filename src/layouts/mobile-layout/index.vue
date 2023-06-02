<script setup lang="ts">
import { MenuUnfoldOutlined } from '@vicons/antd'
import { LayoutBase, LayoutContent, LayoutHeader, Logo, Title } from '../common'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    headerInverted?: boolean
    drawerInverted?: boolean
    visible?: boolean
    logoVisible?: boolean
  }>(),
  {
    headerHeight: 48,
    headerInverted: false,
    drawerInverted: true,
    visible: false,
    logoVisible: true,
  },
)

const emit = defineEmits(['update:visible'])

const headerHeightVar = computed(() => `${props.headerHeight}px`)

const onShow = () => {
  emit('update:visible', true)
}
</script>

<template>
  <LayoutBase class="h-screen">
    <LayoutHeader
      :inverted="headerInverted"
      class="pro-admin-top-layout-header px-4 flex items-center justify-between"
    >
      <div class="flex items-center">
        <Logo :src="logo" size="26" />
        <n-icon class="ml-12px" size="24" @click="onShow">
          <MenuUnfoldOutlined />
        </n-icon>
      </div>
      <slot name="headerRight">
        <div>右侧插槽</div>
      </slot>
    </LayoutHeader>
    <LayoutContent>
      <slot />
    </LayoutContent>
  </LayoutBase>
  <n-drawer
    :show="visible"
    width="240"
    placement="left"
    @update:show="$emit('update:visible', $event)"
  >
    <n-drawer-content body-content-style="padding: 0">
      <n-layout class="h-100%">
        <n-layout-header class="h-100%" :inverted="drawerInverted">
          <div
            v-if="logoVisible"
            class="flex items-center justify-center py-12px"
          >
            <Logo :src="logo" size="26" />
            <Title :title="title" size="22" />
          </div>
          《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
        </n-layout-header>
      </n-layout>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.pro-admin-top-layout-header {
  height: v-bind(headerHeightVar);
}
</style>
