import { AxiosError } from 'axios'
import router from './index'

export const allowRoutes = ['/404', '/401', '/500', '/403', '/error']

export const loginRoute = '/login'

export const hasLoginAllowRoutes = [...allowRoutes, loginRoute]

router.beforeEach(async (to, _, next) => {
  const token = useAuthorization()
  const userStore = useUserStore()
  const { loadingBar } = useGlobalConfig()
  loadingBar?.start()

  // 1. 判断项目中是否存在token
  if (!token.value) {
    // 2. 如果不存在，就判断我们的路由是否在白名单里面
    if (!hasLoginAllowRoutes.includes(to.path)) {
      // 3. 如果不在白名单里面，就跳转到登录页面
      next({
        path: loginRoute,
        query: {
          redirect: to.path,
        },
      })

      return
    }
  }
  else {
    // 4. 如果存在，那么我们需要判断用户信息是否存在，如果不存在，就去获取用户信息
    if (!userStore.userInfo && !allowRoutes.includes(to.path)) {
      try {
        // 5. 如果用户信息不存在，就去获取用户信息
        await userStore.getUserInfo()
        // 判断当前页面是不是登录页面，如果是登录页面，就跳转到首页
        if (to.path === loginRoute) {
          // 跳转至首页
          next('/')

          return
        }
      }
      catch (err) {
        // 判断当前如果是401的错误让给请求拦截处理
        if (err instanceof AxiosError && err.response?.status === 401) {
          return
        }
        else {
          // 如果获取用户信息失败，那么我们直接阻止用户跳转即可
          next({
            path: '/error',
            query: {
              redirect: to.path,
            },
          })

          return
        }
      }
    }
  }

  next()
})

router.afterEach((to) => {
  const { loadingBar } = useGlobalConfig()
  loadingBar?.finish()
  const appStore = useAppStore()
  const title = to.meta.title
  if (title) document.title = `${title} - ${appStore.layout.title}`
  else if (appStore.layout.title) document.title = appStore.layout.title
})
