/*
 * @Author: heinan
 * @Date: 2023-06-29 17:00:00
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-29 17:00:55
 */
import { resolveUrl } from '@/utils'

export const API_USER_CONFIG = {
  login: () => resolveUrl('/user/login'),
  registry: () => resolveUrl('/user/registry')
}
