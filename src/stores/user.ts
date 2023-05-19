import type {
  UserAccountLoginParams,
  UserInfo,
  UserMobileLoginParams,
} from '~/apis/user'
import {
  userLoginApi,
} from '~/apis/user'

export const useUserStore = defineStore('user', () => {
  const token = useAuthorization()

  const userInfo = ref<UserInfo>({})

  const setToken = (val: string) => {
    token.value = val
  }

  const setUserInfo = (info: UserInfo) => {
    userInfo.value = info
  }

  const login = async (
    params: UserAccountLoginParams | UserMobileLoginParams,
  ) => {
    const { data } = await userLoginApi(params)

    data?.token && setToken(data.token)
  }

  return {
    token,
    userInfo,
    setUserInfo,
    login,
  }
})
