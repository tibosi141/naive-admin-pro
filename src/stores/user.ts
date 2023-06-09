import type { RouteRecordRaw } from 'vue-router'
import type {
  UserAccountLoginParams,
  UserInfo,
  UserMobileLoginParams,
} from '~/apis/user'
import { userGetInfoApi, userLoginApi } from '~/apis/user'
import i18n from '~/locale'
import router from '~/routes'
import { dynamicRoutes, rootRoute } from '~/routes/dynamic-routes'
import { generateMenu } from '~/routes/generate-menu'
import { flatRoutes, generateRoute } from '~/routes/generate-route'

export const useUserStore = defineStore('user', () => {
  const token = useAuthorization()
  const userInfo = ref<UserInfo>()
  const { message } = useGlobalConfig()
  const t = i18n.global.t
  const routerRecords = ref<RouteRecordRaw[]>()
  const setToken = (val: string | null) => {
    token.value = val
  }
  const setUserInfo = (info: UserInfo | undefined) => {
    userInfo.value = info
  }

  const menusData = computed(() => generateMenu(routerRecords.value ?? []))

  const login = async (
    params: UserAccountLoginParams | UserMobileLoginParams,
  ) => {
    const { data } = await userLoginApi(params)

    data?.token && setToken(data.token)
  }

  const getUserInfo = async () => {
    const { data } = await userGetInfoApi()

    data && setUserInfo(data)
  }

  const logout = async () => {
    setToken(null)
    setUserInfo(undefined)
    message?.success(t('global.layout.header.right.logout.success'))
    await router.replace({
      path: '/login',
      query: {
        redirect: router.currentRoute.value.path,
      },
    })
  }

  const generateRoutes = async () => {
    const flatRouteDate = flatRoutes(dynamicRoutes)
    const currentRoute = {
      ...rootRoute,
      children: [flatRouteDate],
    }
    routerRecords.value = dynamicRoutes

    return currentRoute
  }

  const generateDynamicRoutes = async () => {
    const routeData = await generateRoute()
    if (routeData) {
      routerRecords.value = routeData.children
      const flatRouteDate = flatRoutes(routeData.children)
      routeData.children = [flatRouteDate]
    }

    return routeData
  }

  return {
    token,
    userInfo,
    menusData,
    setUserInfo,
    login,
    getUserInfo,
    logout,
    generateRoutes,
    generateDynamicRoutes,
  }
})
