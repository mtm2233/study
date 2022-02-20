/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-02-14 17:40:20
 * @LastEditTime: 2022-02-14 17:48:43
 * @LastEditors: mTm
 */
const obj = {
  name: 'ma',
  age: 18,
}

const obj1 = Object.create({
  address: '徐州'
}, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'ma'
  }
})

// console.log(Object.getOwnPropertyDescriptors(obj1));
// console.log(obj1.address);

// 自己本身上的属性
// console.log(Object.keys(obj1));

// 包含原型链上的属性
for (const key in obj1) {
  console.log(key, obj1.hasOwnProperty(key));
}