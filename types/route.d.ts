import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string // 先仅扩展一个title后续再补充
  }
}
