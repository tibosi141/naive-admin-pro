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
    component: () => import('../pages/exception/index.vue'),
  },
]

export default staticRoutes
