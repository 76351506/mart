/*
 * @Author: heinan
 * @Date: 2023-06-27 09:50:46
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-28 11:38:27
 */
import { BasicManageType } from '@/interface/common'

export namespace CategaryManageType {
  export interface FirsetCategaryInterface {
    t_text: string
    t_type: number
    tid: string
  }
  export interface SecondCategaryInterface {
    s_text: string
    t_type: number
    s_type: number
  }
  export interface CategaryProductInterface extends BasicManageType.PaginationInterface {
    t_type: number
    s_type: number
  }
}
