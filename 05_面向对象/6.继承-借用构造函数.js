/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-05 17:02:42
 * @LastEditTime: 2022-04-05 17:11:28
 * @LastEditors: mTm
 */
function Person(name) {
  this.name = name
}

Person.prototype.running = function () {
  console.log('running');
}

function Student(name, age) {
  Person.call(this, name)
  this.age = age;
}

const p1 = new Person()
Object.defineProperty(p1, 'constructor', {
  configurable: true,
  enumerable: false,
  writable: true,
  value: Student,
})
p1.studying = function studying() {
  console.log(this.name + '-studying');
}

Student.prototype = p1

const s1 = new Student('mtm', 18);

s1.running()
s1.studying()