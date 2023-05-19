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
  username: string
  password: string
  captcha?: string
}

export interface UserMobileLoginParams {
  mobile: number | string
  captcha: string
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
