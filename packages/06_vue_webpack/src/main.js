/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-18 09:37:01
 * @LastEditTime: 2022-04-19 13:51:19
 * @LastEditors: mTm
 */
// import { createApp } from 'vue/dist/vue.esm-bundler'
import { createApp } from 'vue'

import { add } from './js/foo';
import './js/createDiv'
import './js/createImg'
import './styles/global.less'

import App from './App.vue'

console.log('add', add(10, 20));


// const app = createApp({
//   template: `<h1 style="color: #000000">{{title}}</h1>`,
//   data() {
//     return {
//       title: 'vue: 我是标题'
//     }
//   }
// })
createApp(App).mount('#app')


