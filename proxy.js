/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-02-19 21:25:37
 * @LastEditTime: 2022-02-19 21:29:04
 * @LastEditors: mTm
 */

const obj = {
  name: 'ma',
  age: 18
}

Object.defineProperty(obj, 'sex', {
  enumerable: false
})

console.log(Object.getOwnPropertyNames(obj));

function foo(params) {
  
}
const fooProxy = new Proxy(foo, {
  apply() {
    console.log('apply');
  },
  construct() {
    console.log('construct');
    return {}
  }
})

new fooProxy()