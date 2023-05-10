<script setup lang="ts">
const appLocale = useAppLocale()

const onSwitch = (lang: string) => {
  appLocale.value = lang
}
</script>

<template>
  <div>
    <h1 class="mb-24px p-12px text-center border-b">
      Home Page
    </h1>
    <n-space size="large">
      <n-input />
      <n-button type="primary" @click="onSwitch('zh-CN')">
        中文
      </n-button>
      <n-button type="primary" @click="onSwitch('en-US')">
        English
      </n-button>
    </n-space>
  </div>
</template>

<style scoped></style>
