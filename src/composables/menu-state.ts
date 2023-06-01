const menuStateFn = () => {
  const route = useRoute()
  const state = reactive({
    active: '',
  })

  const updateActive = (active: string) => {
    state.active = active
  }

  watch(
    () => route.fullPath,
    () => {
      updateActive(route.path)
    },
  )

  return {
    ...toRefs(state),
    updateActive,
  }
}

const [useProviderMenuState, useMenuStateInject] = createInjectionState(menuStateFn)

export { useProviderMenuState }

export const useMenuState = () => {
  return (
    useMenuStateInject() ?? {
      active: ref(''),
      updateActive: () => {},
    }
  )
}
