export const isDark = useDark()

export const toggleDark = useToggle(isDark)

export const useAutoDark = () => {
  const isPrefersDark = usePreferredDark()
  const appStore = useAppStore()

  watch(isPrefersDark, (newVal) => {
    if (newVal)
      appStore.updateLayoutStyle('dark')
    else
      appStore.updateLayoutStyle('light')

    toggleDark(newVal)
  }, {
    immediate: true,
  })
}
