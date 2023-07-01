/*
 * @Author: heinan
 * @Date: 2023-06-27 15:33:44
 * @Last Modified by:   heinan
 * @Last Modified time: 2023-06-27 15:33:44
 */

import { resolveUrl } from '@/utils/common'

export const API_GOODS = {
  add: () => resolveUrl('/product/add'),
  del: () => resolveUrl('/product/del'),
  edit: () => resolveUrl('/product/edit'),
  list: () => resolveUrl('/product/list')
}
