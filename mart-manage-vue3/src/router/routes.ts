/*
 * @Author: heinan
 * @Date: 2023-06-25 16:31:12
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-28 09:13:35
 */
import { RouteRecordRaw } from 'vue-router'
import { UserManage, UserLogin, UserRegistry, UserIdentity, UserInfo, UserList } from './routes/user'

const DefaultRoute = {
  path: '/',
  redirect: '/home'
}
const NotFound = {
  path: '/404',
  name: 'NotFound',
  component: () => import(/* webpackChunkName: "NotFound" */ '@/views/NotFound.vue')
}
const NotFoundRedirect = {
  path: '/:pathMatch(.*)*',
  redirect: '/404'
}
export default [
  DefaultRoute,
  NotFound,
  NotFoundRedirect,

  UserInfo,
  UserList,
  UserManage,
  UserLogin,
  UserRegistry,
  UserIdentity,
  {
    path: '/carousel',
    redirect: '/carousel/list'
  },
  {
    path: '/carousel/list',
    name: 'CarouselManage',
    component: () => import(/* webpackChunkName: "CarouselManage" */ '@/views/carousel/index.vue')
  },
  {
    path: '/categary',
    name: 'CategaryManage',
    component: () => import(/* webpackChunkName: "CategaryManage" */ '@/views/categary/index.vue'),
    children: [
      // 一级品类
      {
        path: '/categary/type',
        name: 'TypeCategaryManage',
        component: () => import(/* webpackChunkName: "TypeCategaryManage" */ '@/views/categary/type/index.vue')
      },
      // 二级品类
      {
        path: '/categary/sort',
        name: 'SortCategaryManage',
        component: () => import(/* webpackChunkName: "SortCategaryManage" */ '@/views/categary/sort/index.vue')
      }
    ]
  },
  {
    path: '/goods',
    name: 'GoodsManage',
    component: () => import(/* webpackChunkName: "GoodsManage" */ '@/views/goods/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home/index.vue')
  }
] as Array<RouteRecordRaw>
