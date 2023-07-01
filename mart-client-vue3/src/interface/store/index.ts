/*
 * @Author: heinan
 * @Date: 2023-06-24 11:36:06
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-27 20:35:59
 */

//	store的commit范型
export interface CommitInterface<T> {
  commit: (type: string, value: any) => void
  state: T
}

// store的IPayload类型
export interface IPayload {
  type: string
  payload?: any
}
