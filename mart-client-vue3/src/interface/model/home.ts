/*
 * @Author: heinan
 * @Date: 2023-07-01 10:41:50
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-01 11:06:48
 */

export namespace HomeManageType {
  export interface CarouselInterface {
    cid: string
    tit: string
    start_time: string
    end_time: string
    img: string
    type: number
  }
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
