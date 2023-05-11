export const STORE_AUTHORIZE_KEY = 'Authorization'

export const useAuthorization = createGlobalState(() =>
  useStorage(STORE_AUTHORIZE_KEY, null),
)
