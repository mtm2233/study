/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-02-20 23:12:26
 * @LastEditTime: 2022-02-20 23:33:18
 * @LastEditors: mTm
 */
// 将要收集的依赖
let activeReactiveFn = null;
class Depend {
  // 防止重复收集依赖
  reactiveFns = new Set();
  addDepend(activeFn) {
    this.reactiveFns.add(activeFn);
  }

  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => fn());
  }
}

// 收集的依赖
const dependMap = new WeakMap();

function getDepend(target, key) {
  let map = dependMap.get(target);
  if (!map) {
    map = new Map();
    dependMap.set(target, map);
  }
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend)
  }

  return depend;
}

function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      // 收集依赖
      const depend = getDepend(target, key)
      depend.depend()
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver);
      // 触发
      const depend = getDepend(target, key)
      depend.notify();
    },
  });
}

let obj = {
  name: 'ma',
  age: 18,
};

const objProxy = reactive(obj)

const info = reactive({
  name: 'kobe',
  age: 30,
  friend: {
    name: 'lilei'
  }
})

watchFn(function fn() {
  console.log(objProxy.name);
  // console.log(objProxy.name);
  // console.log(objProxy.age);
  console.log('info', info.age);
});

console.log('------------开始响应------------');
objProxy.name = 'mmm';
info.age = 31;