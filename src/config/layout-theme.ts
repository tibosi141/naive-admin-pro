import logo from '~/assets/vue.svg'

export interface LayoutType {
  id: string
  key: 'mix' | 'side' | 'top'
  title: string
  inverted?: boolean
}

export interface LayoutTheme {
  title?: string
  layout: 'mix' | 'side' | 'top'
  layoutStyle: 'dark' | 'light' | 'inverted'
  headerHeight: number
  logo?: string
  siderWidth: number
  siderCollapsedWidth: number
  showSiderTrigger: boolean | 'bar' | 'arrow-circle'
  collapsed: boolean
}

export const layoutThemeConfig: LayoutTheme = {
  title: 'Naive Admin Pro',
  layout: 'mix',
  layoutStyle: 'light',
  headerHeight: 48,
  logo,
  siderWidth: 240,
  siderCollapsedWidth: 48,
  showSiderTrigger: 'bar',
  collapsed: false,
}
