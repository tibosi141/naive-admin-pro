<script setup lang="ts">
import { MultiTabConsumer } from '~/layouts/multi-tab/multi-tab-consumer'
</script>

<template>
  <div>
    Workspace
    <MultiTabConsumer>
      这是组件消费者
    </MultiTabConsumer>
  </div>
  <n-input />
</template>

<style scoped>

</style>
