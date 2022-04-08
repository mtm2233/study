/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-13 21:12:41
 * @LastEditTime: 2022-03-13 21:17:09
 * @LastEditors: mTm
 */

class ClassRoom {
  constructor(name) {
    this.name = name;
    this.stus = []
  }

  push(name) {
    this.stus.push(name)
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.stus.length) {
          return {
            done: false,
            value: this.stus[index++]
          }
        } else {
          return {
            done: true,
            value: undefined
          }
        }
      }
    }
  }
}

const room1 = new ClassRoom('test')
room1.push('ma')
room1.push('is')

for (const stu of room1) {
  console.log(stu);
}