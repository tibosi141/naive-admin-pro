import { layoutThemeConfig } from '~/config/layout-theme'
import type { LayoutTheme, LayoutType } from '~/config/layout-theme'

const useAppStore = defineStore('app', () => {
  const defaultLayout = import.meta.env.DEV
    ? layoutThemeConfig
    : useLayoutTheme()
  const layout = reactive(unref(defaultLayout))
  const visible = ref(true)

  const toggleVisible = (val: boolean) => {
    visible.value = val
  }

  const toggleCollapsed = (val: boolean) => {
    layout.collapsed = val
  }

  const updateLayout = (val: LayoutType['key']) => {
    layout.layout = val
  }

  const updateLayoutStyle = (val: LayoutTheme['layoutStyle']) => {
    layout.layoutStyle = val
  }

  const layoutList = computed<LayoutType[]>(() => {
    return [
      {
        id: 'side',
        key: 'side',
        title: '侧边布局',
      },
      {
        id: 'top',
        key: 'top',
        title: '顶部布局',
      },
      {
        id: 'mix',
        key: 'mix',
        title: '混合布局',
      },
    ]
  })
  const layoutStyleList = computed<LayoutType[]>(() => {
    const list: LayoutType[] = [
      {
        id: 'light',
        key: 'side',
        title: '亮色布局风格',
      },
    ]

    if (layout.layout !== 'mix') {
      list.push({
        id: 'inverted',
        key: 'side',
        title: '反转色布局风格',
        inverted: true,
      })
    }
    else {
      updateLayoutStyle('light')
    }

    return list
  })

  return {
    layout,
    visible,
    layoutList,
    layoutStyleList,
    toggleVisible,
    toggleCollapsed,
    updateLayout,
    updateLayoutStyle,
  }
})

export { useAppStore }
