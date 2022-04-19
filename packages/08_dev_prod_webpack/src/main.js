/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-18 09:37:01
 * @LastEditTime: 2022-04-19 15:24:04
 * @LastEditors: mTm
 */
// import { createApp } from 'vue/dist/vue.esm-bundler'
import { createApp } from 'vue'

import { add } from './js/foo';
import './js/createDiv'
import './js/createImg'
import './styles/global.less'

import App from './App'
import axios from 'axios';

console.log('add', add(100, 100));

// 去指定哪些模块发生更新时，进行HMR
if (module.hot) {
  module.hot.accept("./js/createDiv.js", () => {
    console.log('createDiv更新了');
  })
}

// const app = createApp({
//   template: `<h1 style="color: #000000">{{title}}</h1>`,
//   data() {
//     return {
//       title: 'vue: 我是标题'
//     }
//   }
// })
createApp(App).mount('#app')

axios.get('/api/homepage/search').then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

