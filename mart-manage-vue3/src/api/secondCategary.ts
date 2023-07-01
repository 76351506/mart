/*
 * @Author: heinan
 * @Date: 2023-06-25 17:17:33
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-28 11:47:43
 */
import { request } from '@/utils/request'
import { API_SECOND_CATEGARY } from '@/config/api/categary'
import { CategaryManageType } from '@/interface/model/categary'
import { LoadingDecorator } from '@/utils/loading'

interface useSecondCategaryServiceInterface {
  add(params: CategaryManageType.SecondCategaryInterface): Promise<any>
  delete(params: { sid: string }): Promise<any>
  update(params: CategaryManageType.SecondCategaryInterface): Promise<any>
  list(params: { t_type: number }): Promise<any>
}

export const useSecondCategaryService = (): useSecondCategaryServiceInterface => {
  class SecondCategaryService {
    // 一级品类
    @LoadingDecorator(true)
    public add(params: CategaryManageType.SecondCategaryInterface) {
      const url = API_SECOND_CATEGARY.add()
      return request
        .post(url, params)
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          console.error(err)
          return Promise.reject(err)
        })
    }

    @LoadingDecorator(true)
    public delete(params: { sid: string }) {
      const url = API_SECOND_CATEGARY.delete()
      return request
        .delete(url, {
          params
        })
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          console.error(err)
          return Promise.reject(err)
        })
    }
    @LoadingDecorator(true)
    public update(params: CategaryManageType.SecondCategaryInterface) {
      const url = API_SECOND_CATEGARY.update()
      return request
        .put(url, params)
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          console.error(err)
          return Promise.reject(err)
        })
    }
    @LoadingDecorator(true)
    public list(params: { t_type: number }) {
      const url = API_SECOND_CATEGARY.list()
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

  return new SecondCategaryService()
}
