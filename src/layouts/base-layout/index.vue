<script setup lang="ts">
import MixLayout from '../mix-layout/index.vue'
import SideLayout from '../side-layout/index.vue'
import TopLayout from '../top-layout/index.vue'
import MobileLayout from '../mobile-layout/index.vue'
import SettingDrawer from '../setting-drawer/index.vue'
// import { menuOptions } from '../side-menu/menu-data'
import RightContent from './right-content.vue'
import WrapContent from './wrap-content.vue'

const appStore = useAppStore()
const userStore = useUserStore()
const menuOptions = computed(() => userStore.menusData)
const { layout, visible, layoutList, layoutStyleList, themeList } =
  storeToRefs(appStore)
const { isMobile, isDesktop, isPad } = useQueryBreakpoints()
const { active } = useMenuStateInject()

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
        <RightContent />
      </nav>
    </template>
    <WrapContent />
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
      :active="active"
      :options="menuOptions"
    >
      <template #headerRight>
        <RightContent />
      </template>
      <WrapContent />
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
        <RightContent />
      </template>
      <WrapContent />
    </SideLayout>
    <TopLayout
      v-if="layout.layout === 'top'"
      :logo="layout.logo"
      :title="layout.title"
      :inverted="layout.layoutStyle === 'inverted'"
    >
      <template #headerRight>
        <RightContent />
      </template>
      <WrapContent />
    </TopLayout>
  </template>
  <SettingDrawer
    v-model:layout="layout.layout"
    v-model:layout-style="layout.layoutStyle"
    v-model:theme="layout.theme"
    :layout-list="layoutList"
    :layout-style-list="layoutStyleList"
    :theme-list="themeList"
  />
</template>

<style scoped></style>
