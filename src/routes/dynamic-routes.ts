import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '~/layouts'

export const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Default Route',
  component: Layout,
  redirect: '/dashboard',
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
    ],
  },
]
