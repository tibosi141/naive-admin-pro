<script setup lang="ts">
import SelectLang from '../select-lang/index.vue'

const locale = useAppLocale()
const appStore = useAppStore()
</script>

<template>
  <div>
    <SelectLang v-model:value="locale" :options="appStore.localeOptions" />
  </div>
</template>

<style scoped></style>
