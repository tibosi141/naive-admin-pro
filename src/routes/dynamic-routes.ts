import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '~/layouts'

export const ROOT_ROUTE_REDIRECT_PATH = '/dashboard'

export const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Default Route',
  component: Layout,
  redirect: ROOT_ROUTE_REDIRECT_PATH,
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
