/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-04 22:45:05
 * @LastEditTime: 2021-03-08 08:21:16
 * @LastEditors: mTm
 */
// import a from './module/foo.js'
// console.log(a);

// if(true) {
//     import a from './module/foo.js'
// }

import a from './module/foo.js'

a.a = 10;
setTimeout(() => {
    console.log('index.js', a.a);
}, 1000)