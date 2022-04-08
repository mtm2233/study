/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-07 17:52:28
 * @LastEditTime: 2022-04-07 21:57:35
 * @LastEditors: mTm
 */
// Reflect.construct
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.running = function () {
  console.log('running');
}

function Student() {
  
}

Student.prototype.studing = function () {
  console.log('studing');
}

// const p1 = new Person('mtm', 18)
const p1 = Reflect.construct(Person, ['mtm', 18], Student)
p1.studing()