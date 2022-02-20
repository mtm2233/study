/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-02-14 17:35:24
 * @LastEditTime: 2022-02-14 17:39:19
 * @LastEditors: mTm
 */
const s1 = Symbol('name')
const s2 = Symbol('name')
console.log(s1 === s2); // false


const s3 = Symbol.for('name')
const s4 = Symbol.for('name')
console.log(s3 === s4); //true


// undefined name name
console.log(Symbol.keyFor(s2), Symbol.keyFor(s3), s3.description);