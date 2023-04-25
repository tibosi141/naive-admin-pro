export interface LayoutTheme {
  title?: string
  layout: 'mix' | 'side' | 'top'
  headerHeight: number
}

export const layoutThemeConfig: LayoutTheme = {
  title: 'Naive Admin Pro',
  layout: 'mix',
  headerHeight: 48,
}
