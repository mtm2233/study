/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-07-15 11:11:21
 * @LastEditTime: 2021-12-23 17:00:49
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