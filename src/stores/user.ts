import type {
  UserAccountLoginParams,
  UserInfo,
  UserMobileLoginParams,
} from '~/apis/user'
import { userGetInfoApi, userLoginApi } from '~/apis/user'
import i18n from '~/locale'
import router from '~/routes'

export const useUserStore = defineStore('user', () => {
  const token = useAuthorization()
  const userInfo = ref<UserInfo | undefined>(undefined)
  const { message } = useGlobalConfig()
  const setToken = (val: string | null) => {
    token.value = val
  }
  const setUserInfo = (info: UserInfo | undefined) => {
    userInfo.value = info
  }

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
    message?.success(i18n.global.t('global.layout.header.right.logout.success'))
    await router.replace({
      path: '/login',
      query: {
        redirect: router.currentRoute.value.path,
      },
    })
  }

  return {
    token,
    userInfo,
    setUserInfo,
    login,
    getUserInfo,
    logout,
  }
})
