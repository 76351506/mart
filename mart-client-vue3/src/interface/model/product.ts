/*
 * @Author: heinan
 * @Date: 2023-07-03 16:03:30
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-03 16:04:07
 */

export namespace ProductManage {
  export interface ProductInterface {
    pid: string
    pname: string
    imgUrl: string
    sales: string
    original_price: string
    sale_price: string
    mode: string
    carousel: string
    desc: string
    s_text: string
    s_type: number
    t_type: number
    cid: string | null
  }
}
