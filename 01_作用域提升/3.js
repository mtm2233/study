/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-04 16:47:52
 * @LastEditTime: 2022-04-04 16:49:39
 * @LastEditors: mTm
 */
var a = 100
function foo() {
  console.log(a);
  return;
  var a = 200
}

foo()