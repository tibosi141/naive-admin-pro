import type { RouteRecordRaw } from 'vue-router'

const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('~/pages/index.vue'),
    name: 'Home',
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/workspace',
    component: () => import('~/pages/workspace/index.vue'),
    name: 'WorkSpace',
  },
]

export default staticRoutes
