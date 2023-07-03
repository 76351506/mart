/*
 * @Author: heinan
 * @Date: 2023-06-25 17:17:33
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-03 14:00:12
 */
import { request } from '@/utils/request'
import { API_CATEGARY_CONFIG } from '@/config/api/categary'
import { CategaryManageType } from '@/interface/model/categary'

interface UseCategaryServiceInterface {
  firstCategaryList(): Promise<any>
  secondCategaryList(params: { t_type: number }): Promise<any>
  getProductList(params: CategaryManageType.CategaryProductInterface): Promise<any>
}

export const UseCategaryService = (): UseCategaryServiceInterface => {
  class CategaryService {
    public firstCategaryList() {
      const url = API_CATEGARY_CONFIG.firstCategaryList()
      return request
        .get(url)
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          console.error(err)
          return Promise.reject(err)
        })
    }
    public secondCategaryList(params: { t_type: number }) {
      const url = API_CATEGARY_CONFIG.secondCategaryList()
      return request
        .get(url, { params })
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          console.error(err)
          return Promise.reject(err)
        })
    }
    public getProductList(params: CategaryManageType.CategaryProductInterface) {
      const url = API_CATEGARY_CONFIG.getProductList()
      return request
        .get(url, { params })
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          console.error(err)
          return Promise.reject(err)
        })
    }
  }

  return new CategaryService()
}
