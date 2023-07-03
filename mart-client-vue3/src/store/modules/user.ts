/*
 * @Author: heinan
 * @Date: 2023-06-29 10:59:04
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-03 13:57:55
 */
import { getStorage, setStorage } from '@/utils'
import { IPayload, CommitInterface } from '@/interface/store'

interface IState {
  token: string
}
export default {
  name: 'user',
  namespaced: true,
  state: {
    token: getStorage('TOKEN') || ''
  },
  getters: {},
  mutations: {
    UPDATE_TOEKN(state: IState, { payload }: IPayload) {
      state.token = payload
    }
  },
  actions: {
    SAVE_TOEKN({ commit }: CommitInterface<IState>, { payload }: IPayload) {
      commit('UPDATE_TOEKN', payload)
      setStorage('TOKEN', payload)
    }
  }
}
