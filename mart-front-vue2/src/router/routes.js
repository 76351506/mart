/*
 * @Author: heinan
 * @Date: 2021-07-31 10:22:04
 * @Last Modified by: heinan
 * @Last Modified time: 2021-08-04 11:05:22
 */

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home"),
  },
  {
    path: "/type",
    name: "Type",
    component: () => import(/* webpackChunkName: "type" */ "@/views/type"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "@/views/cart"),
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import(/* webpackChunkName: "mine" */ "@/views/mine"),
  },
  {
    path: "/map",
    name: "map",
    component: () => import(/* webpackChunkName: "home" */ "@/views/map"),
  },
  {
    path: "/404",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "@/components/404"),
  },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];
export default routes;
