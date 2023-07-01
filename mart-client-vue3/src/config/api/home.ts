/*
 * @Author: heinan
 * @Date: 2023-06-30 16:21:07
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-30 16:23:54
 */

import { resolveUrl } from '@/utils'

export const API_HOME_CONFIG = {
  getCarouselList: () => resolveUrl('/carousel/list'),
  getGoodsList: () => resolveUrl('/product/list')
}
