/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-04 20:18:04
 * @LastEditTime: 2022-04-05 17:01:11
 * @LastEditors: mTm
 */

class Person {
  constructor(name) {
    this.name = name
  }

  running() {
    console.log('running');
  }
}


class Student extends Person {
  constructor(name) {
    super(name)
  }
}

const s1 = new Student('m')
console.log(s1);