/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-04 17:27:52
 * @LastEditTime: 2022-04-04 17:31:30
 * @LastEditors: mTm
 */
// 1.创建一个全新的对象；
// 2.这个新对象会被执行prototype连接；
// 3.这个新对象会绑定到函数调用的this上

const Person = function (name, age) {
  console.log(this.name, this.age); // undefined undefined
  this.name = name
  this.age = age
  this.foo = function () {
    console.log(this.name, this.age);
  }
}.bind({ name: 'mtm', age: 20 })

const p1 = new Person('mt', 18)
p1.foo()