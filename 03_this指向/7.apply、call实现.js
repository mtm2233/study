/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-04 17:34:16
 * @LastEditTime: 2022-04-04 17:49:13
 * @LastEditors: mTm
 */
Function.prototype.mtApply = function (thisArg, args = []) {
  if (args && !Array.isArray(args)) {
    throw new TypeError(`args is not Array`);
  }
  const obj = (![undefined, null].includes(thisArg)) ? new Object(thisArg) : window;
  // 防止覆盖thisArg.fn
  const fn = Symbol('fn');
  // 隐私绑定this
  obj[fn] = this;
  const result = obj[fn](...args);
  Reflect.deleteProperty(obj, fn);
  return result;
};

Function.prototype.mtCall = function (thisArg, ...args) {
  const obj = (![undefined, null].includes(thisArg)) ? new Object(thisArg) : window;
  // 防止覆盖thisArg.fn
  const fn = Symbol('fn');
  // 隐私绑定this
  obj[fn] = this;
  const result = obj[fn](...args);
  Reflect.deleteProperty(obj, fn);
  return result;
};

function foo(year) {
  console.log(this.name, this.age, year);
}

// foo();
foo.mtApply({ name: 'mtApply', age: 20 }, [2022]);
foo.mtCall({ name: 'mtCall', age: 20 }, 2022);