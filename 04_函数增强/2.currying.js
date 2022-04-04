/*
 * @Description: 自动科里化
 * @Author: mTm
 * @Date: 2022-04-04 18:19:15
 * @LastEditTime: 2022-04-04 19:44:04
 * @LastEditors: mTm
 */
function add(x, y, z) {
  console.log(this);
  return x + y + z;
}

function currying(fn, bindFirstThis = true) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function')
  }
  function curried(...args) {
    // fn.length 需要参数的个数
    // 参数的个数计算到，第一个有默认值的参数为止
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return bindFirstThis
        ? (...args2) => curried.apply(this, args.concat(args2))
        : function (...args2) {
            return curried.apply(this, args.concat(args2));
          };
    }
  }
  return curried;
}

const addCurry = currying(add);
// this 需要在第一次执行时绑定
console.log(addCurry.call({ age: 18 }, 1, 2)(3));

const addCurry1 = currying(add, false);
// this 需要在最后一次执行时绑定
console.log(addCurry1(1, 2).call({ age: 18 }, 3));
