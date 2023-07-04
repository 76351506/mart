/*
 * @Author: heinan
 * @Date: 2023-06-24 17:04:42
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-04 16:21:51
 */
// @ts-nocheck
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

const app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router)
app.mount('#app')

export { store }

console.log(process.env.VUE_APP_API_URL)
