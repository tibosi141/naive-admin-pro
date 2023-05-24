import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '~/layouts'

export const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root Route',
  redirect: '/home',
  component: Layout,
  children: [],
}

export const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
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
