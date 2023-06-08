import type { RouteRecordRaw } from 'vue-router'

const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/login/index.vue'),
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../pages/exception/error.vue'),
  },
  {
    path: '/redirect/:path(.*)',
    name: 'Redirect',
    component: () => import('~/pages/redirect/index.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('~/pages/exception/error.vue'),
  },
]

export default staticRoutes
