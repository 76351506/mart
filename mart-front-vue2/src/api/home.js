/*
 * @Author: heinan
 * @Date: 2021-08-02 16:59:18
 * @Last Modified by: heinan
 * @Last Modified time: 2021-08-03 16:52:39
 */
import request from "@/utils/request";
import { resolve } from "@/utils";

// 获得轮播图接口数据
export function _getCarouselList() {
  const url = resolve("/carousel/list");
  return request.get(url);
}

// 获得所有的二级分类
export function _getSortTypeList() {
  const url = resolve("/getSortList");
  return request.get(url);
}
export function _getRankList(s_type = 0, pagesize = 5, pagecount = 1) {
  console.log(s_type);
  const url = resolve("/product/typeList");
  return request.get(url, {
    params: {
      s_type,
      pagesize,
      pagecount,
    },
  });
}
