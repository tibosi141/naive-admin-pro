import { merge } from 'lodash-es'
import type { NotificationApiInjection } from 'naive-ui/es/notification/src/NotificationProvider'

interface GlobalConfigType {
  dialog?: ReturnType<typeof useDialog>
  message?: ReturnType<typeof useMessage>
  notification?: NotificationApiInjection
  loadingBar?: ReturnType<typeof useLoadingBar>
}

const globalConfig: GlobalConfigType = {}

export const useGlobalConfig = () => globalConfig

export const useGlobalConfigProvider = (config: GlobalConfigType) => {
  merge(globalConfig, config)
}
