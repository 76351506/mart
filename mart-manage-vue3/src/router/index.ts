/*
 * @Author: heinan
 * @Date: 2023-06-19 16:36:26
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-28 16:21:02
 */
import routes from './routes'
import MenuConfig from '@/config/common/menu'
import { createRouter, createWebHistory, NavigationGuardNext } from 'vue-router'
import { AppManageType } from '@/interface/model/app'
import { BasicTypeInterface } from '@/interface/model/common'
import { isLogin, createBreadcrumbMap } from '@/utils/common'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由守卫
router.beforeEach((to, form, next: NavigationGuardNext) => {
  // 判断访问的路由页面是否需要登录
  if (to.meta !== undefined && to.meta.requireAuth) {
    // 需要登录才能够访问的页面判断登录态
    // true 继续访问
    // false 重新定向到登录页
    if (isLogin()) {
      next()
    } else {
      next({
        name: 'Login',
        query: {
          redirect: encodeURIComponent(to.path)
        },
        replace: true
      })
      return false
    }
  } else {
    // 根据路由动态创建breadcrumbMap
    const breadcrumbMap = createBreadcrumbMap(MenuConfig as Array<AppManageType.MenuItemForSider>)
    store.commit({ type: 'app/SET_BREADCRUMB_MAP', payload: breadcrumbMap })
    next()
  }
})
export default router
