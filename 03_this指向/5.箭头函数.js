/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-02-16 17:21:04
 * @LastEditTime: 2022-02-16 17:26:31
 * @LastEditors: mTm
 */
// 箭头函数并不绑定this对象，那么this引用就会从上层作用于中找到对应的this
function Person(name) {
  this.name = name
  this.run = () => {
    console.log(`${this.name} run`);
  }
}

const p1 = new Person('p1')
// p1.run()
// const run = p1.run
// run()
const obj = {
  name: 'obj',
  run: p1.run
}

obj.run()