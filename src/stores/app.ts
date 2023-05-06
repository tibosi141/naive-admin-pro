import { layoutThemeConfig } from '~/config/layout-theme'
import { darkTheme } from '~/config/pro-theme'
import { colors, darkColors } from '~/config/themt'
import type { LayoutTheme, LayoutType } from '~/config/layout-theme'
import type { ThemeType } from '~/config/themt'

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

  const updateTheme = (val: string) => {
    layout.theme = val
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
        title: '亮色风格',
      },
    ]

    if (layout.layout !== 'mix') {
      list.push({
        id: 'inverted',
        key: 'side',
        title: '反转色风格',
        inverted: true,
      })
    }
    else {
      layout.layoutStyle !== 'dark' && updateLayoutStyle('light')
    }

    list.push({
      id: 'dark',
      key: 'side',
      title: '暗色风格',
      dark: true,
    })

    return list
  })

  const layoutTheme = computed(() => {
    if (layout.layoutStyle === 'dark') return darkTheme
    else return undefined
  })

  const overridesTheme = computed(() => {
    if (isDark.value) return darkColors[layout.theme]
    else return colors[layout.theme]
  })

  const themeList = computed<ThemeType[]>(() => {
    const list = []
    const myColors = isDark.value ? darkColors : colors

    for (const key in myColors) {
      const value = myColors[key]

      list.push({
        color: value.common?.primaryColor as string,
        key,
      })
    }

    return list
  })

  watch(
    () => layout.layoutStyle,
    (newVal) => {
      if (newVal === 'dark') toggleDark(true)
      else toggleDark(false)
    },
  )

  return {
    layout,
    visible,
    layoutList,
    layoutStyleList,
    layoutTheme,
    overridesTheme,
    themeList,
    toggleVisible,
    toggleCollapsed,
    updateLayout,
    updateLayoutStyle,
    updateTheme,
  }
})

export { useAppStore }
