<script setup lang="ts">
import type { DropdownOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import { LoginOutlined, SettingOutlined, UserOutlined } from '@vicons/antd'
import type { Component } from 'vue'
import SelectLang from '../select-lang/index.vue'
import SelectUser from '../select-user/index.vue'
import Notify from '../notify/index.vue'

const { t } = useI18n()
const locale = useAppLocale()
const appStore = useAppStore()
const userStore = useUserStore()
const avatar = computed(() => userStore.userInfo?.avatar)
const nickname = computed(() => userStore.userInfo?.nickname)
const renderIcon = (icon: Component) =>
  h(NIcon, null, { default: () => h(icon) })

const userOptions = ref<DropdownOption[]>([
  {
    key: 'user-center',
    label: () => t('global.layout.header.right.user.center'),
    icon: () => renderIcon(UserOutlined)
  },
  {
    key: 'user-setting',
    label: () => t('global.layout.header.right.user.setting'),
    icon: () => renderIcon(SettingOutlined)
  },
  {
    key: 'header-divider',
    type: 'divider'
  },
  {
    key: 'logout',
    label: () => t('global.layout.header.right.logout'),
    icon: () => renderIcon(LoginOutlined)
  }
])

const handleSelect = (key: string) => {
  if (key === 'logout') userStore.logout()
}
</script>

<template>
  <n-space align="center" size="large">
    <Notify />
    <SelectUser
      :avatar="avatar"
      :nickname="nickname"
      :options="userOptions"
      @select="handleSelect"
    />
    <SelectLang v-model:value="locale" :options="appStore.localeOptions" />
  </n-space>
</template>

<style scoped></style>
