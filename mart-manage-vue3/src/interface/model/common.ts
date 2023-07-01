/*
 * @Author: heinan
 * @Date: 2023-06-27 16:09:51
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-27 20:29:16
 */

export namespace CommonManageType {
  // 分页参数
  export class PaginationParams {
    pagesize?: number = 20
    pagecount?: number = 1
  }
}

//	基础数据接口
export namespace BasicTypeInterface {
  //	纯数据，服务端返回的那种
  export interface Data<T> {
    [key: string]: T
  }
}
