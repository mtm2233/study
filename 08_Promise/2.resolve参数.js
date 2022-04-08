/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-03-09 17:24:21
 * @LastEditTime: 2022-03-10 11:58:06
 * @LastEditors: mTm
 */
const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';

function promiseThrowOnRejected(callback, value, resolve, reject) {
  try {
    const _value = callback(value);
    resolve(_value);
  } catch (error) {
    reject(error);
  }
}

class Promise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    const resolve = value => {
      this.value = value;
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PENDING) {
          // 参数本身是Promise
          if (this.value instanceof Promise) {
            this.value.then(resolve, reject)
          // 参数是一个thenable(有then方法的对象)
          } else if (this.value && this.value.then && typeof this.value.then === 'function') {
            this.value.then(resolve, reject)
          } else {
            this.status = PROMISE_STATUS_FULFILLED;
            this.onFulfilledFns.forEach(fn => fn(this.value));
          }
        }
      });
    };

    const reject = reason => {
      this.reason = reason;
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PENDING) {
          this.status = PROMISE_STATUS_REJECTED;
          this.onRejectedFns.forEach(fn => fn(this.reason));
        }
      });
    };
    
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = onFulfilled || (value => value);
    onRejected = onRejected || (err => { throw err });
    return new Promise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push(() => {
          promiseThrowOnRejected(onFulfilled, this.value, resolve, reject);
        });
        this.onRejectedFns.push(() => {
          promiseThrowOnRejected(onRejected, this.reason, resolve, reject);
        });
      } else if (this.status === PROMISE_STATUS_FULFILLED) {
        promiseThrowOnRejected(onFulfilled, this.value, resolve, reject);
      } else if (this.status === PROMISE_STATUS_REJECTED) {
        promiseThrowOnRejected(onRejected, this.reason, resolve, reject);
      }
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    this.then(onFinally, onFinally);
  }
}

const p1 = new Promise((resolve, reject) => {
  resolve('66666')
})

const promise = new Promise((resolve, reject) => {
  console.log('promise 初始化');
  resolve(p1);
  // reject(222);
  // resolve(111);
});

// 开始
console.log('---------------then---------------');
promise
  .then(res => {
    console.log('res: ', res);
    // return {
    //   then(resolve, reject) {
    //     reject('thenable:resolve')
    //   }
    // }
    return new Promise((resolve, reject) => {
      reject('99999')
    });
  })
  .then(res => {
    console.log('res1: ', res);
  })
  .catch(err => {
    console.log('err: ', err);
  })

