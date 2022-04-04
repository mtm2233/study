/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-04 16:47:59
 * @LastEditTime: 2022-04-04 16:51:15
 * @LastEditors: mTm
 */
var n = 100

function foo1() {
  console.log(n);
}

function foo2() {
  var n = 200
  console.log(n);
  foo1()
}

foo2()
console.log(n);