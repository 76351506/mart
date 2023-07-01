/*
 * @Author: heinan
 * @Date: 2023-06-25 17:17:33
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-28 15:56:17
 */
import { request } from '@/utils/request'
import { API_FIRST_CATEGARY } from '@/config/api/categary'
import { CategaryManageType } from '@/interface/model/categary'
import { LoadingDecorator } from '@/utils/loading'

interface UseFirstCategaryServiceInterface {
  add(params: CategaryManageType.FirsetCategaryInterface): Promise<any>
  delete(params: { tid: string }): Promise<any>
  update(params: CategaryManageType.FirsetCategaryInterface): Promise<any>
  list(): Promise<any>
}

export const useFirstCategaryService = (): UseFirstCategaryServiceInterface => {
  class FirstCategaryService {
    // 一级品类
    @LoadingDecorator(true)
    public add(params: CategaryManageType.FirsetCategaryInterface) {
      const url = API_FIRST_CATEGARY.add()
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
    public delete(params: { tid: string }) {
      const url = API_FIRST_CATEGARY.delete()
      return request
        .delete(url, { params })
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          console.error(err)
          return Promise.reject(err)
        })
    }
    @LoadingDecorator(true)
    public update(params: CategaryManageType.FirsetCategaryInterface) {
      const url = API_FIRST_CATEGARY.update()
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
    public list() {
      const url = API_FIRST_CATEGARY.list()
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
  }

  return new FirstCategaryService()
}
