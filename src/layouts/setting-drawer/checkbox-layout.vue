<script setup lang="ts">
import { CheckOutlined } from '@vicons/antd'
import type { VNodeChild } from 'vue'

const props = withDefaults(
  defineProps<{
    layout?: 'mix' | 'side' | 'top'
    inverted?: boolean
    checkout?: boolean
    title?: string | (() => VNodeChild)
    dark?: boolean
  }>(),
  {
    inverted: false,
  },
)
defineEmits(['click'])

const headerClass = computed(() => {
  const list: string[] = []

  if (props.layout === 'mix' || props.layout === 'top' || props.dark)
    list.push('bg-[var(--inverted-color)]')
  if (props.layout === 'side') list.push('bg-[var(--base-color)]')

  return list
})

const siderClass = computed(() => {
  const list: string[] = []

  if (props.layout === 'mix')
    list.push('h-75%', 'bottom-0', 'bg-[var(--base-color)]')

  if (props.layout === 'side') {
    list.push(
      'h-100%',
      `bg-[var(--${(props.inverted || props.dark) ? 'inverted' : 'base'}-color)]`,
    )
  }

  return list
})
</script>

<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-el
        tag="div"
        class="cursor-pointer relative w-44px h-36px b-rd-4px overflow-hidden bg-[var(--pro-admin-layout-content-bg)] shadow-[var(--pro-admin-layout-box-shadow)]"
        @click="$emit('click')"
      >
        <div :class="headerClass" class="absolute top-0 w-100% h-25%" />
        <div
          v-if="layout !== 'top'"
          :class="siderClass"
          class="absolute left-0 w-30%"
        />
        <div v-if="checkout" class="absolute bottom--3px right-3px">
          <n-icon size="16">
            <CheckOutlined />
          </n-icon>
        </div>
      </n-el>
    </template>
    <span>{{ typeof title === 'function' ? title() : title }}</span>
  </n-tooltip>
</template>

<style scoped></style>
