/*
 * @Author: heinan
 * @Date: 2023-06-29 16:55:47
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-01 10:12:18
 */

// 根据当前项目启动的mode配置,动态获取BASE_URL的参数
// development
// production
export const BASE_URL = process.env.VUE_APP_API
export const LayoutWhiteList = ['/user/login', '/user/registry']
