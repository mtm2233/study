/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-02-08 10:43:01
 * @LastEditTime: 2022-02-08 10:44:05
 * @LastEditors: mTm
 */
const obj = {
  name: 'm',
  age: 18
}

// Object.seal(obj)
Object.freeze(obj)
obj.name = 'mm'

// console.log(obj);