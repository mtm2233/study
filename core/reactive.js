/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-05-25 20:32:18
 * @LastEditTime: 2022-05-25 21:44:47
 * @LastEditors: mTm
 */

let activeReactiveFn = null;

class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }

  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => fn());
  }
}

const targetMap = new WeakMap();
function getDepend(target, key) {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }

  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }

  return depend;
}

function watchEffect(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      const depend = getDepend(target, key);
      depend.depend();
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      const depend = getDepend(target, key);
      const result = Reflect.set(target, key, value, receiver);
      depend.notify();
      return result;
    },
  });
}

export {
  watchEffect,
  reactive
}
