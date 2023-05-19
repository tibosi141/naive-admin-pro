import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import axios from 'axios'
import i18n from '~/locale'
import router from '~/routes'

interface ResponseBody<T> {
  code: number
  data: T
  msg: string
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API ?? '/',
  timeout: 6000,
})

const requestHandler = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const token = useAuthorization()

  /**
   * 判断是否存在token，如果存在的话，则每个http header都加上token
   */
  if (token.value) config.headers[STORE_AUTHORIZE_KEY] = token.value

  return config
}

const responseHandler = (
  response: AxiosResponse,
): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
  return response.data
}

const errorHandler = (error: AxiosError): Promise<any> => {
  const token = useAuthorization()
  const { notification } = useGlobalConfig()

  // 判断是否存在response
  if (error.response) {
    const { data, status, statusText } = error.response as AxiosResponse<any>

    if (status === 401) {
      // 重新登陆
      notification?.error({
        title: i18n.global.t('global.request.error.401'),
        content: data?.msg || statusText,
        duration: 3000,
      })
      router.replace('/login').then(() => {
        /**
         * 这里处理清空用户信息和token的逻辑，后续扩展
         */
        token.value = null
      })
    }
    else if (status === 403) {
      // 资源请求错误
      notification?.error({
        title: i18n.global.t('global.request.error.403'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
    else if (status === 500) {
      // 服务器错误
      notification?.error({
        title: i18n.global.t('global.request.error.500'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
    else {
      // 其他错误
      notification?.error({
        title: i18n.global.t('global.request.error.other'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
  }

  return Promise.reject(error)
}

instance.interceptors.request.use(requestHandler)
instance.interceptors.response.use(responseHandler, errorHandler)

export default instance

export const useGet = <P = any, R = any>(
  url: string,
  params?: P,
  config?: AxiosRequestConfig,
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'GET',
    params,
    ...config,
  })
}

export const usePost = <P = any, R = any>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig,
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'POST',
    data,
    ...config,
  })
}

export const usePut = <P = any, R = any>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig,
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'PUT',
    data,
    ...config,
  })
}

export const useDelete = <P = any, R = any>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig,
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'DELETE',
    data,
    ...config,
  })
}
