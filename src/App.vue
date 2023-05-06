<script setup lang="ts">
const appStore = useAppStore()
const { layoutTheme } = storeToRefs(appStore)

useAutoDark()
</script>

<template>
  <n-config-provider :theme="layoutTheme">
    <app-provider>
      <router-view />
    </app-provider>
  </n-config-provider>
</template>

<style scoped></style>
