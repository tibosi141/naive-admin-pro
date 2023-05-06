<script setup lang="ts">
const appStore = useAppStore()

const { themeList } = storeToRefs(appStore)

const onSwitch = (theme: string) => {
  appStore.updateTheme(theme)
}
</script>

<template>
  <div>
    <h1 class="mb-24px p-12px text-center border-b">
      Home Page
    </h1>
    <n-space size="large">
      <n-button
        v-for="item in themeList"
        :key="item.key"
        type="primary"
        @click="onSwitch(item.key)"
      >
        {{ item.key }}
      </n-button>
    </n-space>
  </div>
</template>

<style scoped></style>
