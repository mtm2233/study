/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-04 13:48:07
 * @LastEditTime: 2021-03-04 20:55:08
 * @LastEditors: mTm
 */
let a = 15;
a = 30;
function sayHellow() {
    console.log('sayHellow--123');
}
exports.a = a;
exports.sayHellow = sayHellow;
module.exports = 123;
