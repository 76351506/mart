/*
 * @Author: heinan
 * @Date: 2023-06-29 10:59:04
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-03 18:20:13
 */

import { IPayload } from '@/interface/store'
import { AppStateManageType } from '@/interface/store/app'
import { setStorage, getStorage } from '@/utils'

export default {
  name: 'app',
  namespaced: true,
  state: {
    loading: false
  },
  mutations: {
    UPDATE_LOAD(state: AppStateManageType.IAppState, { payload }: IPayload) {
      state.loading = payload
    }
  }
}
