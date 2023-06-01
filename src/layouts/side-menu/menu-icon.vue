<script setup lang="ts">
import * as icons from '@vicons/antd'

const props = defineProps<{ icon: string }>()

const icon = computed(() => (icons as any)[props.icon])
</script>

<template>
  <n-icon :component="icon" />
</template>

<style scoped>

</style>
