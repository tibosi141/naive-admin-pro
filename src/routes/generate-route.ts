import type { RouteRecordRaw } from 'vue-router'
import modules from './modules'
import { rootRoute } from './dynamic-routes'
import type { MenuInfo } from '~/apis/user'
import { userGetMenusApi } from '~/apis/user'

const defaultRoutes: Record<string, any> = {
  RouteView: () => import('~/layouts/base-layout/route-view.vue'),
  BlankView: () => import('~/layouts/base-layout/blank-view.vue'),
}

const getComponent = (component?: string) => {
  if (!component) return defaultRoutes.BlankView

  if (component in defaultRoutes) return defaultRoutes[component]

  return (modules as Record<string, any>)[component]
}

const generate = (menus: MenuInfo[], pid?: number): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []
  let currentMenus = []

  if (!pid) currentMenus = menus.filter(item => !item.pid)
  else currentMenus = menus.filter(item => item.pid === pid)

  for (const menuItem of currentMenus) {
    const currentRoute: RouteRecordRaw = {
      path: menuItem.path,
      name: menuItem.name,
      component: getComponent(menuItem.component),
      redirect: menuItem.redirect,
      meta: {
        id: menuItem.id,
        pid: menuItem.pid,
        title: menuItem.title,
        icon: menuItem.icon,
      },
      children: generate(menus, menuItem.id),
    }
    if (!currentRoute.children || currentRoute.children.length === 0)
      delete (currentRoute as RouteRecordRaw).children

    routes.push(currentRoute)
  }

  return routes
}

export const generateRoute = async () => {
  const { data } = await userGetMenusApi()

  if (data) {
    const routes = generate(data)
    return {
      ...rootRoute,
      children: routes,
    }
  }
}
