/*
 * @Author: heinan
 * @Date: 2023-06-19 22:34:54
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-28 16:48:40
 */

export namespace UserManageType {
  export class LoginFormState {
    username: string = 'zhiqian'
    password: string = '123456'
  }
  export class IdentityState {
    identity_id: string | undefined
    identity_text: string | undefined
    identity_type: number | undefined
  }
  export class UserInfoState {
    uid?: string
    nickname: string | undefined
    graph: string | undefined
    avatar: string | undefined
    email: string | undefined
    mobile: string | undefined
  }
}
