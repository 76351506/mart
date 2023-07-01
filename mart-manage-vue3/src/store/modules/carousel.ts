/*
 * @Author: heinan
 * @Date: 2023-06-24 16:19:28
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-27 14:32:09
 */
import { IPayload } from '@/interface/store'
import { CarouselManageType } from '@/interface/model/carousel'

interface ICarouselState {
  type: string
  data: CarouselManageType.CarouselForm | undefined
}
export default {
  namespaced: true,
  state: {
    type: 'add',
    data: new CarouselManageType.CarouselForm()
  },
  mutations: {
    UPDATE: (state: ICarouselState, { payload }: IPayload): void => {
      state.type = payload.type
      state.data = payload.data
      console.log(state)
    }
  }
}
