/*
 * @Author: heinan
 * @Date: 2021-07-31 10:27:17
 * @Last Modified by: heinan
 * @Last Modified time: 2021-08-04 11:55:05
 */
import { createStore as VueCreateStore } from "vuex";
import { moduleCreator } from "@/utils";

const store = VueCreateStore({
  modules: moduleCreator(),
});

console.log(store)
export default store;
