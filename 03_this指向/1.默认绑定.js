/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-04 17:09:06
 * @LastEditTime: 2022-04-04 17:21:42
 * @LastEditors: mTm
 */

// 浏览器
// 默认绑定 this => window 
var age = 15;
console.log(this.age);

const obj = {
  age: 30,
  foo() {
    console.log(this.age);
  }
}

const foo = obj.foo;
// 函数独立调用，this => window
foo()