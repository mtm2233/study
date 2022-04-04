/*
 * @Description: 组合函数
 * @Author: mTm
 * @Date: 2022-04-04 19:41:55
 * @LastEditTime: 2022-04-04 19:55:09
 * @LastEditors: mTm
 */

function compose(...fns) {
  const length = fns.length;
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError(`Expected ${fn} to be a function`);
    }
  }

  return function (...args) {
    let result = length ? fns[0].apply(this, args) : args;
    let index = 0;
    while (++index < length) {
      result = fns[index].call(this, result);
    }
    return result;
  };
}

function add5(x) {
  return x + 5;
}

function square(x) {
  return x * 2;
}

const add5Square = compose(add5, square);
console.log(add5Square(1));
