<script setup lang="ts">
import { MoreOutlined } from '@vicons/antd'
import type { DropdownOption } from 'naive-ui'
import TabItemVue from './tab-item.vue'
import type { TabItem } from './type'

const router = useRouter()
const { t } = useI18n()
const { tabList, current, closeTab, refreshTag } = useMultiTab()

const dropdownOptions = computed<DropdownOption[]>(() => [
  {
    label: t('tabs.menu.close'),
    key: 'closeCurrent',
    // 如果当前只剩下一页的话，我们是不允许关闭的，所以我们就通过计算属性的方式来处理
    disabled: tabList.value.length <= 1,
  },
  {
    label: t('tabs.menu.refresh'),
    key: 'refreshCurrent',
  },
])

const renderTab = (item: TabItem) => {
  return h(TabItemVue, { item })
}

function handleClose(path: string) {
  closeTab(path)
}

const handleChange = (path: string) => {
  router.push(path)
}

const handleMenuChange = (key: string) => {
  key === 'closeCurrent' && closeTab()
  key === 'refreshCurrent' && refreshTag()
}
</script>

<template>
  <n-tabs
    :value="current"
    type="card"
    tab-style="min-width: 80px;"
    class="pt-8px bg-white dark:bg-transparent"
    @update-value="handleChange"
    @close="handleClose"
  >
    <template #prefix>
      <div class="ml-8px" />
    </template>
    <template #suffix>
      <div class="mr-13px">
        <n-dropdown
          trigger="click"
          :options="dropdownOptions"
          @select="handleMenuChange"
        >
          <n-icon size="24" class="cursor-pointer">
            <MoreOutlined />
          </n-icon>
        </n-dropdown>
      </div>
    </template>
    <n-tab-pane
      v-for="item in tabList"
      :key="item.path"
      closable
      :tab="renderTab(item)"
      :name="item.path"
    />
  </n-tabs>
</template>
