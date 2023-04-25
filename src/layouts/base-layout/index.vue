<script setup lang="ts">
import MixLayout from '../mix-layout/index.vue'

const appStore = useAppStore()
const { layout } = storeToRefs(appStore)
</script>

<template>
  <div>
    <MixLayout
      v-if="layout.layout === 'mix'"
      :logo="layout.logo"
      :title="layout.title"
      :show-sider-trigger="layout.showSiderTrigger"
      :sider-width="layout.siderWidth"
      :sider-collapsed-width="layout.siderCollapsedWidth"
    >
      <template #headerRight>
        <nav class="flex gap-5">
          <router-link to="/">
            go to home
          </router-link>
          |
          <router-link to="/workspace">
            go to work
          </router-link>
        </nav>
      </template>
      <router-view />
    </MixLayout>
  </div>
</template>

<style scoped></style>
