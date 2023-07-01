/*
 * @Author: heinan
 * @Date: 2023-06-27 16:53:38
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-28 10:00:18
 */

import { resolveUrl } from '@/utils/common'

export const API_FIRST_CATEGARY = {
  add: () => resolveUrl('/product/type/add'),
  delete: () => resolveUrl('/product/type/del'),
  update: () => resolveUrl('/product/type/edit'),
  list: () => resolveUrl('/getTypeList')
}
export const API_SECOND_CATEGARY = {
  add: () => resolveUrl('/product/sort/add'),
  delete: () => resolveUrl('/product/sort/del'),
  update: () => resolveUrl('/product/sort/edit'),
  list: () => resolveUrl('/getSortList')
}
