/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-10 12:12:15
 * @LastEditTime: 2022-04-10 17:45:48
 * @LastEditors: mTm
 */
class EventBus {
  constructor() {
    this.eventBus = {};
  }

  on(name, callback, thisArg) {
    let handlers = this.eventBus[name];
    if (!handlers) {
      handlers = [];
    }
    handlers.push({
      callback,
      thisArg,
    });
    this.eventBus[name] = handlers;
  }

  off(name, callback) {
    if (!name) {
      this.eventBus = {};
      return;
    }
    let handlers = this.eventBus[name];
    if (Array.isArray(handlers)) {
      if (callback) {
        handlers = handlers.filter(
          ({ callback: _callback }) => _callback !== callback
        );
      } else {
        handlers = [];
      }
    }
    this.eventBus[name] = handlers;
  }

  emit(name, ...args) {
    let handlers = this.eventBus[name];
    if (Array.isArray(handlers)) {
      handlers.forEach(({ callback, thisArg }) => {
        callback.apply(thisArg, args);
      });
    }
  }
}

const eventBus = new EventBus();

function foo(name) {
  console.log('mtm: name', name);
}
function bar(age) {
  console.log('mtm: age', age);
}

eventBus.on('mtm', foo);
eventBus.on('mtm', bar);

// eventBus.off('mtm', foo);
eventBus.off('mtm');
eventBus.emit('mtm', 'mtm');
