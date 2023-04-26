<script setup lang="ts">
import MixLayout from '../mix-layout/index.vue'
import SideLayout from '../side-layout/index.vue'

const appStore = useAppStore()
const { layout } = storeToRefs(appStore)
</script>

<template>
  <div>
    <MixLayout
      v-if="layout.layout === 'mix'"
      v-model:collapsed="layout.collapsed"
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
    <SideLayout
      v-if="layout.layout === 'side'"
      v-model:collapsed="layout.collapsed"
      :logo="layout.logo"
      :title="layout.title"
      :show-sider-trigger="layout.showSiderTrigger"
      :sider-width="layout.siderWidth"
      :sider-collapsed-width="layout.siderCollapsedWidth"
    >
      <template #headerLeft>
        <span>左侧插槽</span>
      </template>
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
    </SideLayout>
  </div>
</template>

<style scoped></style>
