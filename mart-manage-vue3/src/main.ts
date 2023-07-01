/*
 * @Author: heinan
 * @Date: 2023-06-24 17:04:42
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-27 15:14:59
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router)
app.mount('#app')

export { store }

console.log(process.env.VUE_APP_API_URL)
