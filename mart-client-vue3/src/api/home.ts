/*
 * @Author: heinan
 * @Date: 2023-06-29 16:28:56
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-01 11:08:40
 */
import { request } from '@/utils/request'
import { API_HOME_CONFIG } from '@/config/api/home'
import { UserManageType } from '@/interface/model/user'
import { BasicManageType } from '@/interface/common'
import { AxiosError } from 'axios'

interface HomeSeriviceInterface {
  getCarouselList: (params: { type?: number; pagesize?: number; pagecount?: number }) => Promise<any>
  getGoodsList: (params: { pagesize?: number; pagecount?: number }) => Promise<any>
}

export const useHomeSerivice = (): HomeSeriviceInterface => {
  class HomeSerivice {
    public getCarouselList(params: { type?: number; pagesize?: number; pagecount?: number }) {
      const url = API_HOME_CONFIG.getCarouselList()
      return request
        .get(url, { params })
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
    public getGoodsList(params: { pagesize?: number; pagecount?: number }) {
      const url = API_HOME_CONFIG.getGoodsList()
      return request
        .get(url, { params })
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
  }
  return new HomeSerivice()
}
