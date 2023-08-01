<script setup lang="ts">
import { MoreOutlined } from '@vicons/antd'
import type { DropdownOption } from 'naive-ui'
import TabItemVue from './tab-item.vue'
import type { TabItem } from './type'

const router = useRouter()
const { t } = useI18n()
const { tabList, current, closeTab, refreshTag } = useMultiTab()
const menuDropdown = reactive({
  x: 0,
  y: 0,
  show: false
})

const dropdownOptions = computed<DropdownOption[]>(() => [
  {
    label: t('tabs.menu.close'),
    key: 'closeCurrent',
    // 如果当前只剩下一页的话，我们是不允许关闭的，所以我们就通过计算属性的方式来处理
    disabled: tabList.value.length <= 1
  },
  {
    label: t('tabs.menu.refresh'),
    key: 'refreshCurrent'
  }
])

const handleContextMenu = (e: MouseEvent) => {
  e.preventDefault()
  menuDropdown.show = false
  nextTick(() => {
    menuDropdown.x = e.clientX
    menuDropdown.y = e.clientY
    menuDropdown.show = true
  })
}

const renderTab = (item: TabItem) => {
  return h(TabItemVue, { item, onContextMenu: handleContextMenu })
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

  menuDropdown.show = false
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
      <div class="mr-17px">
        <n-dropdown
          trigger="click"
          :options="dropdownOptions"
          @select="handleMenuChange"
        >
          <n-icon size="16" class="cursor-pointer">
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
  <n-dropdown
    placement="bottom-start"
    trigger="manual"
    :options="dropdownOptions"
    :x="menuDropdown.x"
    :y="menuDropdown.y"
    :show="menuDropdown.show"
    @select="handleMenuChange"
    @clickoutside="menuDropdown.show = false"
  />
</template>
