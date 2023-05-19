import type { IncludeNull } from '~/utils/types'

export interface UserInfo {
  id?: string
  username?: string
  nickname?: string
  avatar?: string
  email?: string
  mobile?: string
  signature?: string
  gender?: string
  realName?: string
  money?: string
  birthday?: string
}

export const userLoginUrl = '/user/login'

export interface UserAccountLoginParams {
  username: IncludeNull<string>
  password: IncludeNull<string>
  captcha?: IncludeNull<string>
  rememberMe?: boolean
}

export interface UserMobileLoginParams {
  mobile: IncludeNull<string>
  captcha: IncludeNull<string>
  type: 'mobile'
  rememberMe?: boolean
}

export interface UserLoginResult {
  token: string
}

export const userLoginApi = (
  params: UserAccountLoginParams | UserMobileLoginParams,
) => {
  return usePost<
    UserAccountLoginParams | UserMobileLoginParams,
    UserLoginResult
  >(userLoginUrl, params)
}
