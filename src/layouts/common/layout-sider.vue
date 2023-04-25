<script setup lang="ts">
const attrs = useAttrs()
</script>

<template>
  <n-layout-sider
    v-bind="attrs"
  >
    <slot />
  </n-layout-sider>
</template>

<style scoped></style>
