/*
 * @Author: heinan
 * @Date: 2023-07-03 09:59:59
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-03 17:18:00
 */

import { request } from '@/utils/request'
import { API_MINE_CONFIG } from '@/config/api/mine'
interface MineSeriviceInterface {
  getUserIdByToken(params: { token: string }): Promise<any>
  getUserInfoById(params: { uid: string }): Promise<any>
}

export const useMineSerivice = (): MineSeriviceInterface => {
  class MineSerivice {
    // 获取uid
    public async getUserIdByToken(params: { token: string }) {
      const url = API_MINE_CONFIG.getUserIdByToken()
      return request
        .get(url, {
          params
        })
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          return Promise.reject(err)
        })
    }
    // 根据uid获得用户信息
    public async getUserInfoById(params: { uid: string }) {
      const url = API_MINE_CONFIG.getUserInfoById()
      return request
        .get(url, { params })
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          return Promise.reject(err)
        })
    }
  }
  return new MineSerivice()
}
