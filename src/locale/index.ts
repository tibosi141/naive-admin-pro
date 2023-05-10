import { createI18n } from 'vue-i18n'
import zhCN from './lang/zh-CN'

export const defaultLocale = 'zh-CN'

const i18n = createI18n({
  // 是否启用传统模式，默认true，我们这里新项目我们不需要
  legacy: false,
  // 本地化语言获取失败的时候是否输出警告
  missingWarn: 'false',
  // 默认多语言
  locale: defaultLocale,
  // 找不到当前设置的多语言时使用该多语言
  fallbackLocale: defaultLocale,
  messages: {
    'zh-CN': zhCN,
  },
})

export const loadLanguageAsync = async (locale: string = defaultLocale) => {
  const currentLang = i18n.global.locale.value

  try {
    if (currentLang === locale) return nextTick()

    const messages = await import(`./lang/${locale}.ts`)
    messages && i18n.global.setLocaleMessage(locale, messages.default)
  }
  catch (err) {
    console.warn('load language error', err)
  }

  return nextTick()
}

export default i18n
