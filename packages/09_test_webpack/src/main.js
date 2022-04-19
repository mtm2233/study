/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-19 22:12:31
 * @LastEditTime: 2022-04-19 23:23:54
 * @LastEditors: mTm
 */
import { createApp } from 'vue'
import axios from 'axios'

import { foo } from '@/js/foo'
import '@/js/createNode'

import App from './App'

console.log(foo(10, 20));

createApp(App).mount('#app')

axios.get('/api/homepage/search').then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})