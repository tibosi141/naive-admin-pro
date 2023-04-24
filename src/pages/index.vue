<script setup lang="ts">
const countStore = useCount()

const { count } = storeToRefs(countStore)
</script>

<template>
  <div>
    值：{{ count }}
    <button @click="countStore.increment">
      增加
    </button>
    <button @click="countStore.decrement">
      减少
    </button>
    Home Page
  </div>
</template>

<style scoped></style>
