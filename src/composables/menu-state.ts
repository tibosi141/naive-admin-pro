import type { Ref } from 'vue'
import { loginRoute } from '~/routes/router-guard'

export interface MenuState {
  active: string
}

export interface MenuStateFn {
  active: Ref<string>
  updateActive: (active: string) => void
}

// 1.因为createInjectionState要求我们传入的是一个方法，所以我们先在上边定义一个方法，
// 写法我们使用类似setup的写法即可
const menuStateFn = (): MenuStateFn => {
  const route = useRoute()
  // 先定义类型
  const state = reactive<MenuState>({
    active: ''
  })

  // 创建更新方法
  const updateActive = (active: string) => {
    state.active = active
  }

  // 当组件渲染完成后我们再进行执行watch监听
  tryOnMounted(() => {
    // 监听路由地址的变化
    watch(
      () => route.path,
      () => {
        // 我们排除路由为登录的时候的路由
        if (route.path !== loginRoute) updateActive(route.path)
      }
    )
  })

  // 最后我们解构抛出
  return {
    ...toRefs(state),
    updateActive
  }
}

// 创建依赖注入，这个方法返回的是一个数组，一个是注入函数，第二个是获取注入数据的函数，
const [useMenuStateProvider, useMenuState] = createInjectionState(menuStateFn)

// 抛出注入
export { useMenuStateProvider }

// 由于第二个注入函数可能是一个undefined，所以我们再进行一次封装保证百分百能拿到值。
export const useMenuStateInject = () => {
  return (
    useMenuState() ?? {
      active: ref(''),
      updateActive: () => {}
    }
  )
}
