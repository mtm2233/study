/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-03-13 20:57:28
 * @LastEditTime: 2022-03-13 21:06:19
 * @LastEditors: mTm
 */
/* 可以帮助对某个数据结构进行遍历的对象 */

// 只支持names的迭代器
// const names = ['ma', 'is', 'dd'];
// let index = 0;
// const iterator = {
//   next() {
//     if (index < names.length) {
//       return {
//         done: false,
//         value: names[index++],
//       };
//     } else {
//       return {
//         done: true,
//         value: undefined,
//       };
//     }
//   },
// };

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());



function creatArrayIterator(arr) {
  let index = 0;
  return {
    next() {
      if (index < arr.length) {
        return {
          done: false,
          value: arr[index++],
        };
      } else {
        return {
          done: true,
          value: undefined,
        };
      }
    },
  };
}

const iterator = creatArrayIterator([18,19,20])

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());