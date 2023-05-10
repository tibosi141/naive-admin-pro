<script setup lang="ts">
import { CheckOutlined } from '@vicons/antd'

defineProps<{
  color: string
  checked?: boolean
  title?: string
}>()
</script>

<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <div
        :style="{ backgroundColor: color }"
        class="w-20px h-20px flex items-center justify-center cursor-pointer"
      >
        <n-icon v-if="checked" size="16">
          <CheckOutlined />
        </n-icon>
      </div>
    </template>
    <span>{{ title }}</span>
  </n-tooltip>
</template>

<style scoped></style>
