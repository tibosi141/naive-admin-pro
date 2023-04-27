import { layoutThemeConfig } from '~/config/layout-theme'

const useAppStore = defineStore('app', () => {
  const defaultLayout = import.meta.env.DEV
    ? layoutThemeConfig
    : useLayoutTheme()
  const layout = reactive(unref(defaultLayout))
  const visible = ref(true)

  const updateVisible = (val: boolean) => {
    visible.value = val
  }

  const updateCollapsed = (val: boolean) => {
    layout.collapsed = val
  }

  return {
    layout,
    visible,
    updateVisible,
    updateCollapsed,
  }
})

export { useAppStore }
