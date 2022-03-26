/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-07-15 11:11:21
 * @LastEditTime: 2022-03-22 14:15:03
 * @LastEditors: mTm
 */
// const obj = {
//     a: 5,
//     c: 6,
//     fu: function() {
//         console.log(1);
//     }
// }

// class A {
//     a = 5
//     c = 6
//     fu() {
//         console.log(1);
//     }
//     [Symbol.iterator]() {
//         const keys = Object.keys(obj)
//         let index = 0
//         return {
//             next: () =>{
//                 if (index < keys.length) {
//                     return {
//                         value: obj[keys[index++]],
//                         done: false
//                     }
//                 } else {
//                     return {
//                         value: undefined,
//                         done: true
//                     }
//                 }
//             }
//         }
//     }
// }

// class B extends A {
//     d = 15
// }

// const obj = new B()
// obj.__proto__.e = 'e'

// const map = new Map()

// const arr = [1,5,6,9]
// arr.__proto__[5] = 555

// map.set('m1', 55)

// // for (const v in obj) {
// //     console.log(v, obj.hasOwnProperty(v));
// // }

// for (const v of obj) {
//     console.log(v);
// }

// // for (const key in object) {
// //     if (Object.hasOwnProperty.call(object, key)) {
// //         const element = object[key];

// //     }
// // }

// function* a() {
//     console.log(1111);
//     yield console.log(15);
//     yield console.log(20);
// }

// const a1 = a()
// a1.next()
// a1.next()

// let text = '****e123456bcd--c--'

// text = '****e123456bcd--c--'.split("")
// console.log(text);
// text.splice(11, 12)
// console.log(text);

// console.log(aaa);

// var aaa = 5

// function a(b) {
//   console.log(b);
// }

// a()

// const obj1 = {
//   website: "http://"
// }

// const age = 18
// const obj = {
//   eating() {
//     console.log(age);
//   }
// }

// obj.eating()

// const obj = {
//   name: 'obj',
//   eating() {
//     setTimeout(() => {
//       console.log(this);
//     }, 100);
//   }
// }

// obj.eating.call('abc')

// function Person(name) {
//   this.name = name;
//   console.log(this);
//   return {
//     name: 'preson'
//   }
// }

// const person1 = new Person('person1')
// console.log(person1);

// Function.prototype.mcall = function (thisArg) {
//   thisArg.fn = this
//   // console.log(this, this.this);
//   thisArg.fn()
// }

// function foo(params) {
//   console.log('foo', this);
// }

// foo.mcall({name: 'bar'})

// const numObj = new Number(5);
// numObj.fn = function(name = 'fn', a, b, c) {
//   console.log(name, arguments);
// };
// numObj.fn(undefined, 'a', 'b', 'c');

// function foo(name) {
//   console.log(name);
// }

// foo.apply({}, ['a'])

// const age = 'windows';
// function foo() {
//   const age = 'foo';
//   console.log(arguments);
// }

// foo.bind(123, 'a')('c', 'd')

// function Bar() {
//   var fNOP = function() {}
//   console.log(this, fNOP, this instanceof fNOP);
// }

// new Bar()



// function foo(params) {
//   var a = b = 100
// }
// foo()
// // console.log(a);
// console.log(b);