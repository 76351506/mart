/*
 * @Author: heinan
 * @Date: 2023-06-25 17:17:33
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-04 16:51:00
 */
import { request } from '@/utils/request'
import { API_CAROUSEL } from '@/config/api/carousel'
import { CarouselManageType } from '@/interface/model/carousel'
import { LoadingDecorator } from '@/utils/loading'

interface UseCarouselServiceInterface {
  add(params: CarouselManageType.CarouselForm): Promise<any>
  delete(params: { cid: string }): Promise<any>
  edit(params: CarouselManageType.CarouselForm): Promise<any>
  getCarouselList(): Promise<any>
}

export const useCarouselService = (): UseCarouselServiceInterface => {
  class carouselService {
    @LoadingDecorator(true)
    public async add(params: CarouselManageType.CarouselForm) {
      const url = API_CAROUSEL.add()
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

    // 删除轮播图
    @LoadingDecorator(true)
    public async delete(params: { cid: string }) {
      const url = API_CAROUSEL.del()
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

    // 轮播图编辑
    @LoadingDecorator(true)
    public async edit(params: CarouselManageType.CarouselForm) {
      const url = API_CAROUSEL.edit()
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

    // 轮播图列表

    @LoadingDecorator(true)
    public getCarouselList() {
      const url = API_CAROUSEL.all()
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

  return new carouselService()
}
