/*
 * @Author: heinan
 * @Date: 2021-07-31 10:22:26
 * @Last Modified by: heinan
 * @Last Modified time: 2021-08-02 12:23:03
 */
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
