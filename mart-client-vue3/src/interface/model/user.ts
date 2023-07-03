/*
 * @Author: heinan
 * @Date: 2023-06-29 16:22:19
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-03 17:22:54
 */

export namespace UserManageType {
  export class UserLoginFormState {
    username: string = 'zhiqian'
    password: string = '123456'
  }
  export class UserRegistryFormState {
    username: string = 'zhiqian'
    password: string = '123456'
    mobile: string = '123456'
  }
  export interface UserInfoInterface {
    avatar: string
    email: string
    graph: string
    mobile: string
    nickname: string
    uid: string
  }
}
