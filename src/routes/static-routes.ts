import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '~/layouts'

const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('~/pages/index.vue'),
        meta: {
          title: 'Home',
        },
      },
      {
        path: '/workspace',
        name: 'Workspace',
        component: () => import('~/pages/workspace/index.vue'),
        meta: {
          title: 'Workspace',
        },
      },
    ],
  },
]

export default staticRoutes
