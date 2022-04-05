/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-05 17:03:24
 * @LastEditTime: 2022-04-05 17:28:32
 * @LastEditors: mTm
 */
function Person(name) {
  this.name = name
}

Person.prototype.running = function () {
  console.log('running');
}

// 核心
function object(obj) {
  function Func() {}
  Func.prototype = obj
  return new Func()
}

// 原型式继承 + 工厂
// 核心
function createStudent() {
  const obj = object(Person.prototype)
  // 增强对象
  obj.studying = function studying() {
    console.log(this.name + '-studying');
  }
  return obj;
}

console.log(createStudent());