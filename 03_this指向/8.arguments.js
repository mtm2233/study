/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-04 17:49:37
 * @LastEditTime: 2022-04-04 18:17:25
 * @LastEditors: mTm
 */
function add(x, y, z) {
  // arguments是一个类数组，可以使用下标访问元素，有length属性，但是没有forEach
  console.log(arguments);
  // arguments => Array
  // 1
  const arr1 = []
  for (let i = 0; i < arguments.length; i++) {
    arr1.push(arguments[i])
  }
  console.log('arr1', arr1);
  // 2
  const arr2 = [].slice.call(arguments)
  console.log('arr2', arr2);
  // 3
  // ES6+
  const arr3 = [...arguments]
  console.log('arr3', arr3);
}

add(1,2,3)