/*
 * @Author: heinan
 * @Date: 2023-06-24 16:19:28
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-05 17:05:40
 */
import { IPayload } from '@/interface/store'
import { ArticleManageType } from '@/interface/model/article'

interface IAritleState {
  type: string
  data: ArticleManageType.ArticleForm | undefined
}
export default {
  namespaced: true,
  state: {
    type: 'add',
    data: new ArticleManageType.ArticleForm()
  },
  mutations: {
    UPDATE: (state: IAritleState, { payload }: IPayload): void => {
      state.type = payload.type
      state.data = payload.data
      console.log(state)
    }
  }
}
