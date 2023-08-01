<script setup lang="ts">
withDefaults(
  defineProps<{
    src?: string
    size?: number | string
  }>(),
  {
    size: 24
  }
)
</script>

<template>
  <n-image
    v-if="src"
    alt="logo"
    :width="size"
    :height="size"
    :src="src"
    preview-disabled
  />
</template>

<style scoped></style>
