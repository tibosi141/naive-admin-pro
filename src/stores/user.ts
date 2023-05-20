import type {
  UserAccountLoginParams,
  UserInfo,
  UserMobileLoginParams,
} from '~/apis/user'
import {
  userGetInfoApi,
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

  const getUserInfo = async () => {
    const { data } = await userGetInfoApi()

    data && setUserInfo(data)
  }

  return {
    token,
    userInfo,
    setUserInfo,
    login,
    getUserInfo,
  }
})