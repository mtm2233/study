/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-25 13:06:17
 * @LastEditTime: 2022-04-09 21:42:48
 * @LastEditors: mTm
 */
import { obj } from './foo.mjs'
console.log(obj.name);

setTimeout(() => {
  console.log(obj.name);
}, 1000);