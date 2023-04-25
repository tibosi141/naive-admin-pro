import { layoutThemeConfig } from '~/config/layout-theme'

const useAppStore = defineStore('app', () => {
  const defaultLayout = import.meta.env.DEV
    ? layoutThemeConfig
    : useLayoutTheme()
  const layout = reactive(unref(defaultLayout))

  return {
    layout,
  }
})

export { useAppStore }
