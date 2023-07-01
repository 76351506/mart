/*
 * @Author: heinan
 * @Date: 2023-06-20 11:34:41
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-01 15:58:28
 */
import { resolveUrl } from '@/utils/common'

export const API_USER = {
  list: () => resolveUrl('/user/list'),
  getUserIdByToken: () => resolveUrl('/user/getUserByToken'),
  getUserInfoById: () => resolveUrl('/user/getUserInfo'),
  upload: () => resolveUrl('/user/upload'),
  login: () => resolveUrl('/user/login'),
  identity: () => resolveUrl('/identity/list'),
  updateUser: () => resolveUrl('/user/updataUserInfo')
}
