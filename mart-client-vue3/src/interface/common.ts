/*
 * @Author: heinan
 * @Date: 2023-06-29 11:19:24
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-01 10:13:43
 */

/** 存放项目公共的类型 */

export namespace BasicManageType {
  export interface Data<T> {
    [key: string]: T
  }
  export interface IAxiosResponse {
    code: number
    msg?: string
    result?: any
    data?: any
  }
  export interface PaginationInterface {
    pagesize: number
    pagecount: number
  }
}
