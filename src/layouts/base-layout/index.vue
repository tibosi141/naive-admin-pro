<script setup lang="ts">
import MixLayout from '../mix-layout/index.vue'
import SideLayout from '../side-layout/index.vue'
import TopLayout from '../top-layout/index.vue'
import MobileLayout from '../mobile-layout/index.vue'
import SettingDrawer from '../setting-drawer/index.vue'

const appStore = useAppStore()
const { layout, visible, layoutList, layoutStyleList } = storeToRefs(appStore)
const { isMobile, isDesktop, isPad } = useQueryBreakpoints()

watchEffect(() => {
  if (isDesktop.value) appStore.toggleCollapsed(false)
  else if (isPad.value) appStore.toggleCollapsed(true)
  else if (isMobile.value) appStore.toggleVisible(false)
})
</script>

<template>
  <MobileLayout
    v-if="isMobile"
    v-model:visible="visible"
    :logo="layout.logo"
    :title="layout.title"
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
  </MobileLayout>
  <template v-else>
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
      :inverted="layout.layoutStyle === 'inverted'"
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
    <TopLayout
      v-if="layout.layout === 'top'"
      :logo="layout.logo"
      :title="layout.title"
      :inverted="layout.layoutStyle === 'inverted'"
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
    </TopLayout>
  </template>
  <SettingDrawer
    v-model:layout="layout.layout"
    v-model:layout-style="layout.layoutStyle"
    :layout-list="layoutList"
    :layout-style-list="layoutStyleList"
  />
</template>

<style scoped></style>
