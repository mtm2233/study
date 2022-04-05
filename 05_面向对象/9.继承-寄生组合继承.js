/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-05 17:04:52
 * @LastEditTime: 2022-04-05 17:30:04
 * @LastEditors: mTm
 */
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
// 寄生式核心代码
function inheritPrototype(subType, superType) {
  subType.prototype = object(superType.prototype)
  Object.defineProperty(subType.prototype, 'constructor', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: Student,
  })
}

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

inheritPrototype(Student, Person)
Student.prototype.studying = function studying() {
  console.log(this.name + '-studying');
}

const s1 = new Student('mtm', 18);
console.log(s1);

s1.running()
s1.studying()