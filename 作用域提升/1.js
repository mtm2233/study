/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-02-23 11:50:08
 * @LastEditTime: 2022-02-23 11:50:09
 * @LastEditors: mTm
 */
// var a = 100;
// function foo() {
//   console.log(a);
//   return;
//   var a = 100;
// }
// foo();

function foo() {
  var a = (b = 100);
}
foo();
console.log(b);
console.log(a);

