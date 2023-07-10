/*
 * @Author: heinan
 * @Date: 2023-06-27 16:09:51
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-10 11:34:45
 */

export namespace CommonManageType {
  // 分页参数
  export class PaginationParams {
    pagesize?: number = 20
    pagecount?: number = 1
  }
  export interface FileItem {
    uid: string
    name?: string
    status?: string
    response?: string
    url?: string
    type?: string
    size: number
    originFileObj: any
  }

  export interface FileInfo {
    file: FileItem | undefined
    fileList: FileItem[] | undefined
  }
}

//	基础数据接口
export namespace BasicTypeInterface {
  //	纯数据，服务端返回的那种
  export interface Data<T> {
    [key: string]: T
  }
}
