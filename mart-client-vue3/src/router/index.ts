/*
 * @Author: heinan
 * @Date: 2023-06-29 11:30:15
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-01 09:41:13
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routes } from '@/router/routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
