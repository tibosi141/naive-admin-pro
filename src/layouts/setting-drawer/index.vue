<script setup lang="ts">
import { CloseOutlined, SettingOutlined } from '@vicons/antd'
import Container from './container.vue'
import CheckboxLayout from './checkbox-layout.vue'

const props = withDefaults(
  defineProps<{
    floatTop?: number | string
    drawerWidth?: number | string
    layout?: 'mix' | 'side' | 'top'
  }>(),
  {
    floatTop: 240,
    drawerWidth: 300,
    layout: 'mix',
  },
)
defineEmits(['update:layout'])

const show = ref(false)
const layouts = ref([
  {
    key: 'mix',
    title: '混合布局',
  },
  {
    key: 'side',
    title: '侧边布局',
  },
  {
    key: 'top',
    title: '顶部布局',
  },
])

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
    <n-drawer-content>
      <Container title="导航模式">
        <n-space size="large">
          <template v-for="item in layouts" :key="item.key">
            <CheckboxLayout
              :title="item.title"
              :layout="item.key"
              :checkout="item.key === layout"
              @click="$emit('update:layout', item.key)"
            />
          </template>
        </n-space>
      </Container>
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
