/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-04 17:05:21
 * @LastEditTime: 2022-04-04 17:06:25
 * @LastEditors: mTm
 */
function makeAdder(num1) {
  return function (num2) {
    return num1 + num2
  }
}

const add15 = makeAdder(15)
console.log(add15(5));