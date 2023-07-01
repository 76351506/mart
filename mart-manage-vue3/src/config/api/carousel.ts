/*
 * @Author: heinan
 * @Date: 2023-06-20 11:34:41
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-25 17:20:08
 */
import { resolveUrl } from '@/utils/common'

export const API_CAROUSEL = {
  all: () => resolveUrl('/carousel/all'),
  list: () => resolveUrl('/carousel/all'),
  add: () => resolveUrl('/carousel/add'),
  del: () => resolveUrl('/carousel/del'),
  edit: () => resolveUrl('/carousel/edit')
}
