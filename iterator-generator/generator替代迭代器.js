/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-13 22:17:57
 * @LastEditTime: 2022-03-13 22:24:02
 * @LastEditors: mTm
 */

// function *creatArrayIterator(arr) {
//   // for (const item of arr) {
//   //   yield item
//   // }
//   yield* arr
// }

// const iterator = creatArrayIterator([18,19,20])

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

/* 可迭代对象 */

// const obj = {
//   names: ['ma', 'is', 'mtm'],
//   *[Symbol.iterator]() {
//     // for (const item of this.names) {
//     //   yield item
//     // }
//     yield* this.names
//   },
// };

// for (const name of obj) {
//   console.log(name);
// }


/* 实例支持迭代的类 */
class ClassRoom {
  constructor(name) {
    this.name = name;
    this.stus = []
  }

  push(name) {
    this.stus.push(name)
  }

  *[Symbol.iterator]() {
    // for (const item of this.stus) {
    //   yield item
    // }
    yield* this.stus
  }
}

const room1 = new ClassRoom('test')
room1.push('ma')
room1.push('is')

for (const stu of room1) {
  console.log(stu);
}