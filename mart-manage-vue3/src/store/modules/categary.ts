/*
 * @Author: heinan
 * @Date: 2023-06-28 10:14:25
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-28 10:16:46
 */

import { IPayload } from '@/interface/store'
import { CategaryManageType } from '@/interface/model/categary'

interface ICarouselState {
  type: 'add' | 'edit'
  firstCategary: CategaryManageType.FirsetCategary
  secondCategary: CategaryManageType.SecondCategary
}
export default {
  namespaced: true,
  state: {
    type: 'add',
    firstCategary: new CategaryManageType.FirsetCategary(),
    secondCategary: new CategaryManageType.SecondCategary()
  },
  mutations: {
    FIRST_CATEGARY_UPDATE: (state: ICarouselState, { payload }: IPayload): void => {
      state.type = payload.type
      state.firstCategary = payload.data
    },
    SECOND_CATEGARY_UPDATE: (state: ICarouselState, { payload }: IPayload): void => {
      state.type = payload.type
      state.secondCategary = payload.data
    }
  }
}
