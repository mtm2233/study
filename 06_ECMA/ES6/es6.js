/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-02-12 22:45:51
 * @LastEditTime: 2022-02-14 16:31:34
 * @LastEditors: mTm
 */
// const obj = {
//   age: 18
// }


// const {age: newAge} = obj
// console.log(newAge);

// let age = 18
// var message = 'message'
// console.log(window, window.age, window.message);


function foo({name = 'm', age = 18} = {}) {
  console.log(name, age);
}

foo()