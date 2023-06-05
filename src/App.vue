<script setup lang="ts">
import { useMultiTabProvider } from './composables/multi-tab-state'

const appStore = useAppStore()
const { layoutTheme, overridesTheme } = storeToRefs(appStore)
useAutoDark()
const { naiveLocale } = useAutoLocale()
useMenuStateProvider()
useMultiTabProvider()
</script>

<template>
  <n-config-provider
    :theme="layoutTheme"
    :theme-overrides="overridesTheme"
    :locale="naiveLocale.locale"
    :date-locale="naiveLocale.dateLocale"
  >
    <n-global-style />
    <app-provider>
      <router-view />
    </app-provider>
  </n-config-provider>
</template>

<style scoped></style>
