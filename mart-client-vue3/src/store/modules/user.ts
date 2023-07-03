/*
 * @Author: heinan
 * @Date: 2023-06-29 10:59:04
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-03 17:16:24
 */
import { getStorage, setStorage } from '@/utils'
import { IPayload, CommitInterface } from '@/interface/store'
import { UPDATE_TOEKN, UPDATE_UID } from '@/store/types'
import { UserStoreManageType } from '@/interface/store/user'

export default {
  name: 'user',
  namespaced: true,
  state: {
    token: getStorage('TOKEN') || '',
    uid: getStorage('UID') || ''
  },
  getters: {},
  mutations: {
    [UPDATE_TOEKN](state: UserStoreManageType.IUserState, { payload }: IPayload) {
      state.token = payload
    },
    [UPDATE_UID](state: UserStoreManageType.IUserState, { payload }: IPayload) {
      state.token = payload
    }
  },
  actions: {
    SAVE_TOEKN({ commit }: CommitInterface<UserStoreManageType.IUserState>, { payload }: IPayload) {
      commit(UPDATE_TOEKN, payload)
      setStorage('TOKEN', payload)
    },
    SAVE_UID({ commit }: CommitInterface<UserStoreManageType.IUserState>, { payload }: IPayload) {
      commit('UPDATE_UID', payload)
      setStorage('UID', payload)
    }
  }
}
