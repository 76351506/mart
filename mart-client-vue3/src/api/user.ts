/*
 * @Author: heinan
 * @Date: 2023-06-29 16:28:56
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-29 17:13:34
 */
import { request } from '@/utils/request'
import { API_USER_CONFIG } from '@/config/api/user'
import { UserManageType } from '@/interface/model/user'
import { BasicManageType } from '@/interface/common'
import { AxiosError } from 'axios'

interface UserSeriviceInterface {
  login: (params: UserManageType.UserLoginFormState) => Promise<any>
  registry: (params: UserManageType.UserRegistryFormState) => Promise<any>
}

export const useUserSerivice = (): UserSeriviceInterface => {
  class UserService {
    login(params: UserManageType.UserLoginFormState) {
      const url = API_USER_CONFIG.login()
      return request
        .post(url, params)
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
    registry(params: UserManageType.UserRegistryFormState) {
      const url = API_USER_CONFIG.registry()
      return request
        .post(url, params)
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
  }
  return new UserService()
}
