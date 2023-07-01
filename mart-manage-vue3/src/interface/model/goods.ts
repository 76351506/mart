/*
 * @Author: heinan
 * @Date: 2023-06-27 09:50:46
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-27 17:15:19
 */

export namespace GoodsManageType {
  export class GoodsForm {
    pid: string | undefined
    pname: string | undefined
    carousel: string | undefined
    sales: string | undefined
    original_price: string | undefined
    sale_price: string | undefined
    mode: string = ''
    s_type: string = ''
    t_type: string = ''
    desc: string | undefined
  }
}
