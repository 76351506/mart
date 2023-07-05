/*
 * @Author: heinan
 * @Date: 2023-06-24 17:04:42
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-05 08:18:26
 */
// @ts-nocheck
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antd from '@/utils/antd'

const app: App = createApp(App)
app.use(antd)
app.use(store)
app.use(router)
app.mount('#app')

export { store }

console.log(process.env.VUE_APP_API_URL)
