<script setup lang="ts">
import { CheckOutlined } from '@vicons/antd'

defineProps<{
  color: string
  checked?: boolean
}>()
</script>

<template>
  <div
    :style="{ backgroundColor: color }"
    class="w-20px h-20px flex items-center justify-center cursor-pointer"
  >
    <n-icon v-if="checked" size="16">
      <CheckOutlined />
    </n-icon>
  </div>
</template>

<style scoped></style>
