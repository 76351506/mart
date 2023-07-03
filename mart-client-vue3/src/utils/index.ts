/*
 * @Author: heinan
 * @Date: 2023-06-29 16:54:53
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-03 10:09:51
 */
import { BASE_URL } from '@/config'

export const resolveUrl = (url: string): string => {
  return BASE_URL + url
}

export const getStorage = (key: string) => {
  return localStorage.getItem(key)
}

export const setStorage = (key: string, value: any) => {
  return localStorage.setItem(key, value)
}
