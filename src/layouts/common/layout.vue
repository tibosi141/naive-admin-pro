<script setup lang="ts">
const attrs = useAttrs()
</script>

<template>
  <n-layout
    v-bind="attrs"
    style="--n-color: var(--pro-admin-layout-content-bg)"
  >
    <slot />
  </n-layout>
</template>

<style scoped></style>
