/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-02-07 09:11:44
 * @LastEditTime: 2022-02-07 09:23:37
 * @LastEditors: mTm
 */

// 自动柯里化
function currying(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args1) {
        return curried.apply(this, [...args, ...args1])
      }
    }
  }
  return curried
}

function foo(a, b, c) {
  console.log(a,b,c);
}

const curryFoo = currying(foo)
curryFoo(10)(20)(30)
curryFoo(10,20)(30)
curryFoo(10,20,30)
