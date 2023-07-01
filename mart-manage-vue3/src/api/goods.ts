/*
 * @Author: heinan
 * @Date: 2023-06-25 17:17:33
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-28 15:56:17
 */
import { request } from '@/utils/request'
import { API_GOODS } from '@/config/api/goods'
import { GoodsManageType } from '@/interface/model/goods'
import { LoadingDecorator } from '@/utils/loading'

interface UseGoodsServiceInterface {
  add(params: GoodsManageType.GoodsForm): Promise<any>
  delete(params: { pid: string }): Promise<any>
  edit(params: GoodsManageType.GoodsForm): Promise<any>
  list(): Promise<any>
}

export const UseGoodsService = (): UseGoodsServiceInterface => {
  class goodsService {
    @LoadingDecorator(true)
    public async add(params: GoodsManageType.GoodsForm) {
      const url = API_GOODS.add()
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
    public async delete(params: { pid: string }) {
      const url = API_GOODS.del()
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
    public async edit(params: GoodsManageType.GoodsForm) {
      const url = API_GOODS.edit()
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
    public list() {
      const url = API_GOODS.list()
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

  return new goodsService()
}
