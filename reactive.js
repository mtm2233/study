/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-03-08 17:25:26
 * @LastEditTime: 2022-03-08 17:49:24
 * @LastEditors: mTm
 */

let activeReactiveFn = null;
class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }

  addDepend(fn) {
    this.reactiveFns.add(fn);
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

const weakMap = new WeakMap();
function getDepend(target, key) {
  let map = weakMap.get(target);
  if (!map) {
    map = new Map();
    weakMap.set(target, map);
  }
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }

  return depend;
}

function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

// vue3
// function reactive(obj) {
//   return new Proxy(obj, {
//     get(target, key, receiver) {
//       const depend = getDepend(target, key);
//       depend.depend();
//       return Reflect.get(target, key, receiver);
//     },
//     set(target, key, value, receiver) {
//       Reflect.set(target, key, value, receiver);
//       const depend = getDepend(target, key);
//       depend.notify();
//     },
//   });
// }

// vue2
function reactive(obj) {
  const target = obj;

  Object.keys(target).forEach(key => {
    let _value = target[key];
    Object.defineProperty(target, key, {
      get() {
        const depend = getDepend(target, key);
        depend.depend();
        return _value;
      },
      set(value) {
        _value = value;
        const depend = getDepend(target, key);
        depend.notify()
      },
    });
  });

  return obj;
}

const obj = {
  name: 'obj',
  age: 18,
};

const objProxy = reactive(obj);
const infoProxy = reactive({
  title: 'info的标题',
});

function foo() {
  console.log('-----foo-----');
  console.log('obj name: ', objProxy.name);
  console.log('obj name: ', objProxy.name);
  console.log('obj name: ', objProxy.name);
}

function bar() {
  console.log('-----bar-----');
  console.log('obj age: ', objProxy.age);
  console.log('info', infoProxy.title);
}

watchFn(foo);
watchFn(bar);

console.log('-------------开始响应--------------');
objProxy.name = 456;
// objProxy.age = 21;
// infoProxy.title += '6666';
