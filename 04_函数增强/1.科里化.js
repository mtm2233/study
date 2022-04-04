/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-04 18:22:47
 * @LastEditTime: 2022-04-04 18:25:44
 * @LastEditors: mTm
 */
/* 是把接收多个参数的函数，变成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参
数，而且返回结果的新函数的技术； 
柯里化声称 “如果你固定某些参数，你将得到接受余下参数的一个函数”； */

// 未科里化
function add(x, y, z) {
  return x + y + z
}
// 科里化
const addCurry = x => y => z => x + y + z;

// console.log('add', add(1,2,3));
// console.log('addCurry', addCurry(1)(2)(3));

// 作用
// 延迟计算
let adder = addCurry(1)
setTimeout(() => {
  adder = adder(2)
}, 1000);
setTimeout(() => {
  console.log(adder(3));
}, 2000);

// 参数复用/动态生成函数
const add1 = addCurry(1)