export const STORE_AUTHORIZE_KEY = 'Authorization'

export const useAuthorization = createGlobalState(() =>
  useStorage<null | string>(STORE_AUTHORIZE_KEY, null),
)
