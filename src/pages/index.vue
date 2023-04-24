<script setup lang="ts">
const countStore = useCount()

const { count } = storeToRefs(countStore)
</script>

<template>
  <div>
    <h1 class="p-12px text-center border-b">
      Home Page
    </h1>
    <p>值：{{ count }}</p>
    <n-button strong secondary type="error" @click="countStore.decrement">
      减少
    </n-button>
    <n-button strong secondary type="info" @click="countStore.increment">
      增加
    </n-button>
  </div>
</template>

<style scoped></style>
