<script setup lang="ts">
import { CloseOutlined, SettingOutlined } from '@vicons/antd'
import Container from './container.vue'
import CheckboxLayout from './checkbox-layout.vue'
import CheckboxTheme from './checkbox-colors.vue'
import type { LayoutType } from '~/config/layout-theme'
import type { ThemeType } from '~/config/themt'

const props = withDefaults(
  defineProps<{
    floatTop?: number | string
    drawerWidth?: number | string
    layout?: 'mix' | 'side' | 'top'
    layoutStyle?: 'dark' | 'light' | 'inverted'
    layoutList?: LayoutType[]
    layoutStyleList?: LayoutType[]
    theme?: string
    themeList?: ThemeType[]
  }>(),
  {
    floatTop: 240,
    drawerWidth: 300,
  },
)
defineEmits(['update:layout', 'update:layoutStyle', 'update:theme'])

const show = ref(false)

const toggleDrawer = (val: boolean) => {
  show.value = val
}

const cssVars = computed(() => {
  return {
    '--pro-admin-float-top': `${props.floatTop}px`,
    '--pro-admin-drawer-width': `${props.drawerWidth}px`,
  }
})
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
        @click="toggleDrawer(true)"
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
      <Container v-if="layoutStyleList" title="布局风格配置">
        <n-space size="large">
          <template v-for="item in layoutStyleList" :key="item.id">
            <CheckboxLayout
              :title="item.title"
              :layout="item.key"
              :inverted="item.inverted"
              :dark="item.dark"
              :checkout="item.id === layoutStyle"
              @click="$emit('update:layoutStyle', item.id)"
            />
          </template>
        </n-space>
      </Container>
      <Container v-if="themeList" title="主题色配置">
        <n-space>
          <CheckboxTheme
            v-for="item in themeList"
            :key="item.key"
            :color="item.color"
            :checked="item.key === theme"
            @click="$emit('update:theme', item.key)"
          />
        </n-space>
      </Container>
      <n-divider />
      <Container v-if="layoutList" title="导航模式">
        <n-space size="large">
          <template v-for="item in layoutList" :key="item.id">
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
        @click="toggleDrawer(false)"
      >
        <template #icon>
          <CloseOutlined />
        </template>
      </n-button>
    </div>
  </n-drawer>
</template>

<style scoped></style>
