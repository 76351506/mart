/*
 * @Author: heinan
 * @Date: 2021-08-04 11:26:24
 * @Last Modified by: heinan
 * @Last Modified time: 2021-08-04 12:19:55
 */

import { UPDATE_CARTLIST } from "@/store/type/cart";
import { deepClone } from "@/utils";

export default {
  name: "cart",
  namespaced: true,

  state: {
    cartList: [],
  },
  mutations: {
    [UPDATE_CARTLIST](state, { payload }) {
      state.cartList = payload;
      console.log(state.cartList);
    },
  },
  actions: {
    ADD_CARTLIST({ state, commit }, payload) {
      const currentIndex = state.cartList.findIndex(
        (product) => product.pid === payload.pid
      );
      // 购物车中是否存在这件商品
      // 不存在
      // 将当前商品加入购物车列表
      if (currentIndex < 0) {
        // 第一次加入购物车，添加默认数量1
        payload = [...state.cartList, { ...payload, count: 1 }];
      }
      // 存在
      // 购物车列表中找到当前商品,数量+1
      else {
        state.cartList[currentIndex].count += 1;
        payload = state.cartList;
      }
      commit({
        type: UPDATE_CARTLIST,
        payload,
      });
    },
  },
  modules: {},
};
