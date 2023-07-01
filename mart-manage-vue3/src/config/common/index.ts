/*
 * @Author: heinan
 * @Date: 2023-06-20 11:36:19
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-01 11:42:02
 */

// 接口请求公共的前端
export const BASE_URL = process.env.VUE_APP_API_URL

// 入口页面Layou模板排除登录、注册
export const LAYOUT_EXCEPT = ['/user/login', '/user/registry']
