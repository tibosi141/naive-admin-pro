import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '~/layouts'

export const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Default Route',
  component: Layout,
  children: [],
}

export const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
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
          title: '工作台',
        },
      },
    ],
  },
]
