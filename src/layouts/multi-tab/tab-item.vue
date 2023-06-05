<script setup lang="ts">
import type { TabItem } from './type'

defineProps<{ item: TabItem }>()
</script>

<template>
  <span>{{ $t(item.tabTitle!) }}</span>
</template>

<style scoped>

</style>
