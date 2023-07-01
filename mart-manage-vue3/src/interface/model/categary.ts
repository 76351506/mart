/*
 * @Author: heinan
 * @Date: 2023-06-27 09:50:46
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-28 11:38:27
 */

export namespace CategaryManageType {
  export class FirsetCategary {
    tid?: string | undefined
    t_type: number | undefined
    t_text: string | undefined
  }
  export class SecondCategary {
    sid?: number | undefined
    s_text: string | undefined
    s_type: number | undefined
    t_type: number | undefined
  }
  export interface FirsetCategaryInterface {
    t_text: string
    t_type: number
    tid?: string
  }
  export interface SecondCategaryInterface {
    s_text: string
    t_type: number
    s_type: number
  }
}
