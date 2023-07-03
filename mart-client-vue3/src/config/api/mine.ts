/*
 * @Author: heinan
 * @Date: 2023-07-03 10:03:25
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-03 10:03:46
 */
import { resolveUrl } from '@/utils'

export const API_MINE_CONFIG = {
  getUserIdByToken: () => resolveUrl('/user/getUserByToken'),
  getUserInfoById: () => resolveUrl('/user/getUserInfo')
}
