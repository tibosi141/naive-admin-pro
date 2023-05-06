<script setup lang="ts">
import type { LayoutTheme } from '~/config/layout-theme'

const appStore = useAppStore()

const onSwitch = (theme: LayoutTheme['layoutStyle']) => {
  if (theme === 'dark')
    document.documentElement.classList.add('dark')
  else
    document.documentElement.classList.remove('dark')

  appStore.updateLayoutStyle(theme)
}
</script>

<template>
  <div>
    <h1 class="mb-24px p-12px text-center border-b">
      Home Page
    </h1>
    <n-space size="large">
      <n-button @click="onSwitch('light')">
        亮色
      </n-button>
      <n-button @click="onSwitch('dark')">
        暗色
      </n-button>
    </n-space>
  </div>
</template>

<style scoped></style>
