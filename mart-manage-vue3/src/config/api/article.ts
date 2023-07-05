/*
 * @Author: heinan
 * @Date: 2023-06-20 11:34:41
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-05 15:32:10
 */
import { resolveUrl } from '@/utils/common'

export const API_ARTICLE = {
  list: () => resolveUrl('/article'),
  add: () => resolveUrl('/article'),
  del: () => resolveUrl('/article'),
  edit: () => resolveUrl('/article')
}
