<script setup lang="ts">
import { CloseOutlined, SettingOutlined } from '@vicons/antd'

const props = withDefaults(
  defineProps<{
    floatTop?: number | string
    drawerWidth?: number | string
  }>(),
  {
    floatTop: 240,
    drawerWidth: 300,
  },
)

const show = ref(false)

const cssVars = computed(() => {
  return {
    '--pro-admin-float-top': `${props.floatTop}px`,
    '--pro-admin-drawer-width': `${props.drawerWidth}px`,
  }
})

const onShow = () => {
  show.value = true
}
const onHide = () => {
  show.value = false
}
</script>

<template>
  <teleport to="body">
    <div
      :style="cssVars"
      class="fixed top-[var(--pro-admin-float-top)] right-0 z-10"
    >
      <n-button
        type="primary"
        size="large"
        class="b-rd-tr-0! b-rd-br-0!"
        @click="onShow"
      >
        <template #icon>
          <n-icon size="24">
            <SettingOutlined />
          </n-icon>
        </template>
      </n-button>
    </div>
  </teleport>
  <n-drawer v-model:show="show" :width="drawerWidth">
    <n-drawer-content title="斯通纳">
      《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
    </n-drawer-content>
    <div
      :style="cssVars"
      class="absolute top-[var(--pro-admin-float-top)] right-[var(--pro-admin-drawer-width)]"
    >
      <n-button
        type="primary"
        size="large"
        class="b-rd-rt-0! b-rd-br-0!"
        @click="onHide"
      >
        <template #icon>
          <CloseOutlined />
        </template>
      </n-button>
    </div>
  </n-drawer>
</template>

<style scoped></style>
