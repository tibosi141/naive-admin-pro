import type { MultiTabState } from '~/layouts/multi-tab/type'
import { MULTI_TAB_STATE_KEY } from '~/layouts/multi-tab/type'

export const useMultiTabProvider = () => {
  const state = reactive<MultiTabState>({
    // tab列表
    tabList: [],
    // 选中的数据
    current: '',
  })

  provide(MULTI_TAB_STATE_KEY, state)
  // 返回选中的状态信息
  return state
}

export const useMultiTabInject = () => {
  // 给他加一个！我们确定是一定有值的
  return inject(MULTI_TAB_STATE_KEY)!
}
