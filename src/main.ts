// 创建对应的应用
import { createApp } from 'vue'
// 引入 App组件(所有组件的父级组件)
import App from './App.vue'
import router from './router'
// 创建App应用返回对应的实例对象，调用mount 方法进行挂载
createApp(App)
.use(router)
.mount('#app')
