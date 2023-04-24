<script setup lang="ts">
const countStore = useCount()

const { double } = storeToRefs(countStore)
</script>

<template>
  <div>
    值：{{ double }}
    Work Page
  </div>
</template>

<style scoped></style>
