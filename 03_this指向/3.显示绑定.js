/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-04 17:23:43
 * @LastEditTime: 2022-04-04 17:25:02
 * @LastEditors: mTm
 */
const obj = {
  age: 18
}

const args = [1,2,3]

function foo() {
  console.log(this.age);
}

foo.bind(obj)(...args)
foo.apply(obj, args)
foo.call(obj, ...args)