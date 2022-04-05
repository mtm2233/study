/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-04 20:15:07
 * @LastEditTime: 2022-04-05 16:56:06
 * @LastEditors: mTm
 */
const obj = {
  name: 'mtm',
  age: 18
}

// 数据属性描述符
/* [[Configurable]]：表示属性是否可以通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符；
当我们直接在一个对象上定义某个属性时，这个属性的[[Configurable]]为true； 
当我们通过属性描述符定义一个属性时，这个属性的[[Configurable]]默认为false； 

[[Enumerable]]：表示属性是否可以通过for-in或者Object.keys()返回该属性；
当我们直接在一个对象上定义某个属性时，这个属性的[[Enumerable]]为true；
当我们通过属性描述符定义一个属性时，这个属性的[[Enumerable]]默认为false； 

[[Writable]]：表示是否可以修改属性的值；
当我们直接在一个对象上定义某个属性时，这个属性的[[Writable]]为true
当我们通过属性描述符定义一个属性时，这个属性的[[Writable]]默认为false； 

[[value]]：属性的value值，读取属性时会返回该值，修改属性时，会对其进行修改；
默认情况下这个值是undefined； */

// Object.defineProperty(obj, 'sex', {
//   configurable: false,
//   value: '男',
//   writable: false,
//   enumerable: true,
// })

// obj.sex = '女'
// delete obj.sex
// console.log(obj);

// 存取属性描述符
// [[Configurable]]：表示属性是否可以通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符；
// 和数据属性描述符是一致的；

// [[Enumerable]]：表示属性是否可以通过for-in或者Object.keys()返回该属性；
// 和数据属性描述符是一致的；

// [[get]]：获取属性时会执行的函数。默认为undefined
// [[set]]：设置属性时会执行的函数。默认为undefined


Object.defineProperties(obj, {
  info: {
    get() {
      return this
    },
    set(value) {
      console.log(value);
    }
  }
})

obj.info = {}
console.log(obj.info);

console.log(Object.getOwnPropertyDescriptor(obj, 'info'));