import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    id?: number
    pid?: number
    title?: string
    icon?: string
    target?: '_blank' | '_self' | '_parent' | '_top'
  }
}
