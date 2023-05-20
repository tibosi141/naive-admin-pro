<script setup lang="ts">
import type { DropdownOption } from 'naive-ui'
import LangIcon from './lang-icon.vue'

defineProps<{ value: string; options: DropdownOption[] }>()
defineEmits(['update:value'])
</script>

<template>
  <n-dropdown
    trigger="hover"
    :value="value"
    :options="options"
    @select="$emit('update:value', $event)"
  >
    <div class="text-18px cursor-pointer">
      <LangIcon />
    </div>
  </n-dropdown>
</template>

<style scoped></style>
