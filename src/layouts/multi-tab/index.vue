<script setup lang="ts">
import TabItemVue from './tab-item.vue'
import type { TabItem } from './type'
import { useMultiTab } from '~/composables/multi-tab-state'

const { tabList, current } = useMultiTab()

const renderTab = (item: TabItem) => {
  return h(TabItemVue, { item })
}
</script>

<template>
  <n-tabs
    :value="current"
    type="card"
    tab-style="min-width: 80px;"
    class="pt-8px bg-white dark:bg-transparent"
  >
    <template #prefix>
      <div class="ml-8px" />
    </template>
    <template #suffix>
      <div class="ml-8px" />
    </template>
    <n-tab-pane
      v-for="panel in tabList"
      :key="panel.path"
      closable
      :tab="renderTab(panel)"
      :name="panel.path"
    />
  </n-tabs>
</template>
