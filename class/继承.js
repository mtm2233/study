/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-02-11 14:29:45
 * @LastEditTime: 2022-02-12 21:32:22
 * @LastEditors: mTm
 */
// const obj = {
//   name: 'mm'
// }

// obj.__proto__.age = 18
// const info = Object.create(obj)
// // for (const key in obj) {
// //   console.log(key, obj.hasOwnProperty(key));
  
// // }

// // console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// console.log(obj instanceof Object);
// console.log(obj.isPrototypeOf(info));


class MArray extends Array {
  firstItem() {
    console.log('firstItem');
    return this[0]
  }
}

const arr = new MArray(1,2,3,4)
console.log(arr.firstItem());