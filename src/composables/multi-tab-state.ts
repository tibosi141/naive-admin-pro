import { omit } from 'lodash-es'
import type { RouteLocationNormalized } from 'vue-router'
import type { MultiTabState, TabItem } from '~/layouts/multi-tab/type'
import { MULTI_TAB_STATE_KEY } from '~/layouts/multi-tab/type'
import { hasLoginAllowRoutes } from '~/routes/router-guard'

export const useMultiTabProvider = () => {
  let g = 0
  const guid = () => `CacheTab_${++g}`
  const state = reactive<MultiTabState>({
    // tab列表
    tabList: [],
    // 选中的数据
    current: '',
    guid,
    componentCache: {},
  })

  provide(MULTI_TAB_STATE_KEY, state)
  // 返回选中的状态信息
  return state
}

export const useMultiTabInject = () => {
  // 给他加一个！我们确定是一定有值的
  return inject(MULTI_TAB_STATE_KEY)!
}

export const useMultiTab = () => {
  // 获取数据状态信息
  const state = useMultiTabInject()
  const tabList = computed(() => state.tabList)
  const current = computed(() => state.current)
  const componentCache = toRaw(state.componentCache)
  const route = useRoute()
  const router = useRouter()
  const { t } = useI18n()
  const { message } = useGlobalConfig()

  const addTab = (route: RouteLocationNormalized) => {
    // 首先需要区分一下路由信息,如果当前传进来的路由信息是白名单的路由，那么我们不需要进行处理
    const item: TabItem = {
      path: route.path,
      tabTitle: route.meta.title,
      route: omit(route, ['matched']),
    }
    // 需要对不需要的路由进行过滤
    if (hasLoginAllowRoutes.includes(route.path)) return item

    // 判断当前路由是否已经在菜单中存在
    // const tabIndex = state.tabList.findIndex(tab => tab.path === route.path)
    // if (tabIndex !== -1) {
    //   message?.info('当前页面已经打开')
    //   return state.tabList[tabIndex]
    // }

    // 如果不存在，就添加到菜单中
    state.tabList.push(item)
    return item
  }

  const closeTab = (path?: string) => {
    // 判断path是否存在，如果不存在就关闭当前页
    if (!path) path = current.value
    // 如果当前页面是最后一个页面，就不能进行关闭
    if (tabList.value.length <= 1) {
      message?.info(t('tabs.menu.close.failed'))
      return
    }
    // 获取当前页面的索引地址
    const currentIndex = tabList.value.findIndex(item => item.path === path)
    const currentItem = tabList.value[currentIndex]
    // 判断当前页面是否不是当前选中的页面，如果不是就直接删除
    if (path !== current.value) {
      state.tabList.splice(currentIndex, 1)
      componentCache[currentItem.key!] && delete componentCache[currentItem.key!]
      return
    }
    // 如果删除的是当前页面，那么我们就需要处理一下，
    // 如果删除的是当前页面的话，我们需要跳转到指定的目标页面
    // 我们需要判断当前是不是在第一页，如果不是正常跳转到上一个页签。
    const targetIndex = currentIndex === 0 ? currentIndex + 1 : currentIndex - 1
    router
      .replace(state.tabList[targetIndex].route)
      .then(() => {
        state.tabList.splice(currentIndex, 1)
        componentCache[currentItem.key!] && delete componentCache[currentItem.key!]
      })
      .catch(() => {})
  }

  const refreshTag = (path?: string) => {
    if (!path) path = current.value
    const currentIndex = tabList.value.findIndex(item => item.path === path)
    const currentItem = tabList.value[currentIndex]
    state.tabList[currentIndex] = { ...toRaw(currentItem), key: state.guid() }
    componentCache[currentItem.key!] && delete componentCache[currentItem.key!]

    router
      .replace(currentItem.route)
      .then(() => {})
      .catch(() => {})
  }

  watch(
    () => route.fullPath,
    () => {
      if (current.value !== route.path) state.current = route.path

      const index = state.tabList.findIndex(item => item.path === route.path)
      // 为了防止路由信息发生变化，我们再重新存储一下路由信息
      if (state.tabList[index]) {
        state.tabList[index].route = omit(route, 'matched')
      }
      else {
        // 如果tab不存在的情况，我们就需要添加tab
        // addTab(route)
      }
    },
    {
      immediate: true,
    },
  )

  return {
    tabList,
    current,
    addTab,
    closeTab,
    refreshTag,
  }
}
