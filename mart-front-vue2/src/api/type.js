/*
 * @Author: heinan
 * @Date: 2021-08-03 17:34:03
 * @Last Modified by: heinan
 * @Last Modified time: 2021-08-03 17:52:25
 */

import request from "@/utils/request";
import { resolve } from "@/utils";

// 获得所有的一级分类
export function _getTypeList() {
  const url = resolve("/getTypeList");
  return request.get(url);
}

// 根据一级分类 t_type获得二级分类
export function _getSortList(t_type) {
  const url = resolve("/getSortList");
  return request.get(url, {
    params: { t_type },
  });
}

export function _getProduction(s_type = 0, pagesize = 5, pagecount = 1) {
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
