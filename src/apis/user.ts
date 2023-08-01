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

export interface MenuInfo {
  // 主键
  id: number
  // 父级id
  pid?: number
  // 路由地址
  path: string
  name?: string
  // 重定向地址
  redirect?: string
  // 组件路径
  component?: string
  // 标题
  title: string
  // 图标
  icon?: string
  // 是否保活
  keepAlive?: boolean
}

export const userLoginUrl = '/user/login'
export const userSendCodeUrl = 'user/send-code'
export const userGetInfoUrl = '/user/info'
export const userMenusUrl = '/user/menus1'
// export const userMenusUrl = '/user/menu-lang'

export interface UserAccountLoginParams {
  username: IncludeNull<string>
  password: IncludeNull<string>
  captcha?: IncludeNull<string>
  rememberMe?: boolean
}

export interface UserMobileLoginParams {
  mobile: IncludeNull<string>
  code: IncludeNull<string>
  type: 'mobile'
  rememberMe?: boolean
}

export interface UserLoginResult {
  token: string
}

export type UserSendCodeParams = Pick<UserMobileLoginParams, 'mobile'>

export const userLoginApi = (
  params: UserAccountLoginParams | UserMobileLoginParams
) => {
  return usePost<
    UserAccountLoginParams | UserMobileLoginParams,
    UserLoginResult
  >(userLoginUrl, params)
}

export const userSendCodeApi = (params: UserSendCodeParams) => {
  return usePost<UserSendCodeParams, any>(userSendCodeUrl, params)
}

export const userGetInfoApi = () => {
  return useGet<any, UserInfo>(userGetInfoUrl)
}

export const userGetMenusApi = () => {
  return useGet<any, MenuInfo[]>(userMenusUrl)
}
