/*
 * @Author: heinan
 * @Date: 2023-06-29 16:15:50
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-29 16:18:43
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initVant } from '@/utils/init'

const app = createApp(App)
initVant(app)
app.use(store)
app.use(router)
app.mount('#app')
