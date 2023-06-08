<script setup lang="ts">
import { ReloadOutlined } from '@vicons/antd'
import type { TabItem } from './type'

defineProps<{ item: TabItem }>()

const { current, refreshTag } = useMultiTab()

const handleRefresh = () => {
  refreshTag()
}
</script>

<template>
  <span>{{ $t(item.tabTitle!) }}</span>
  <n-icon
    v-if="current === item.path"
    class="ml-2 n-base-close n-tabs-tab__close"
    @click="handleRefresh"
  >
    <ReloadOutlined />
  </n-icon>
</template>
