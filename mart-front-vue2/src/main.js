/*
 * @Author: heinan
 * @Date: 2021-07-31 11:24:25
 * @Last Modified by: heinan
 * @Last Modified time: 2021-08-03 16:48:04
 */
import { createApp } from "vue";
import App from "@/App";
import router from "@/router";
import store from "@/store";
import plugin from "@/utils/plugin";
import { Lazyload } from "vant";

createApp(App)
  .use(store)
  .use(router)
  .use(plugin)
  .use(Lazyload, {
    lazyComponent: true,
  })
  .mount("#app");
