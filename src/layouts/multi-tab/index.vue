<script setup lang="ts">
const name = ref(1)
const panels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
</script>

<template>
  <n-tabs
    v-model:value="name"
    type="card"
    closable
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
      v-for="panel in panels"
      :key="panel"
      :tab="panel.toString()"
      :name="panel"
    />
  </n-tabs>
</template>
