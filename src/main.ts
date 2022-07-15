
/**
 * 一个商城的项目
 * 后台管理 vue3 + ts + axios + pinia + elementPlus
 * 前台 react18 + ts + axios + redux + react-redux + redux-thunk + antd
 * 后台 JavaSpringBoot
 */

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入pinia
import { createPinia } from 'pinia'

// 引入路由
import router from "./router"

const app = createApp(App);

// 注册路由
app.use(router);

// 注册pinia
app.use(createPinia())

// 注册element-plus
app.use(ElementPlus);

// 挂载
app.mount('#app')
