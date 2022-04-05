/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-05 17:03:05
 * @LastEditTime: 2022-04-05 17:28:20
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

console.log(object(Person.prototype));