import type { InjectionKey } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'

export interface TabItem {
  // 路由地址
  path: string
  // 显示的名称
  tabTitle?: string
  // 存储路由信息
  route: Omit<RouteLocationNormalized, 'matched'>
}

export interface MultiTabState {
  tabList: TabItem[]
  current: string
}

// 其中接收一个泛型，我们把我们自己定义的类型给他传入进去
export const MULTI_TAB_STATE_KEY: InjectionKey<MultiTabState> = Symbol('multiTabState')
