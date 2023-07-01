/*
 * @Author: heinan
 * @Date: 2023-06-29 11:30:18
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-01 10:26:28
 */
import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/user/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home/index.vue')
  },
  {
    path: '/categary',
    name: 'Categary',
    component: () => import(/* webpackChunkName: "Categary" */ '@/views/categary/index.vue')
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: () => import(/* webpackChunkName: "Shopcart" */ '@/views/shopcart/index.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "Mine" */ '@/views/mine/index.vue')
  },
  {
    path: '/user/login',
    name: 'UserLogin',
    component: () => import(/* webpackChunkName: "UserLogin" */ '@/views/user/login.vue')
  },
  {
    path: '/user/registry',
    name: 'UserRegistry',
    component: () => import(/* webpackChunkName: "UserRegistry" */ '@/views/user/registry.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '@/views/common/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]
