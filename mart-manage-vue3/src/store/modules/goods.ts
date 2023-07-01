/*
 * @Author: heinan
 * @Date: 2023-06-24 16:19:28
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-27 14:32:09
 */
import { IPayload } from '@/interface/store'
import { GoodsManageType } from '@/interface/model/goods'

interface IGoodsState {
  type: string
  data: GoodsManageType.GoodsForm | undefined
}
export default {
  namespaced: true,
  state: {
    type: 'add',
    data: new GoodsManageType.GoodsForm()
  },
  mutations: {
    UPDATE: (state: IGoodsState, { payload }: IPayload): void => {
      state.type = payload.type
      state.data = payload.data
    }
  }
}
