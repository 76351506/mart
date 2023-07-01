/*
 * @Author: heinan
 * @Date: 2023-06-29 16:54:53
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-29 17:37:00
 */
import { BASE_URL } from '@/config'

export const resolveUrl = (url: string): string => {
  return BASE_URL + url
}
