<script setup lang="ts">
import { MultiTabConsumer } from '../multi-tab/multi-tab-consumer'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <MultiTabConsumer>
      <component :is="Component" :key="route.fullPath" />
    </MultiTabConsumer>
  </router-view>
</template>

<style scoped></style>
