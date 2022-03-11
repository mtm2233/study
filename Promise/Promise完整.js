/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-10 11:58:45
 * @LastEditTime: 2022-03-10 11:58:46
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


  static resolve(value) {
    return new Promise(resolve => resolve(value))
  }

  static reject(reason) {
    return new Promise((resolve, reject) => reject(reason))
  }

  static all(promises) {
    return new Promise((resolve, reject) => {
      let fulfilledLen = 0;
      const values = []
      promises.forEach((promise, index) => {
        promise.then(res => {
          values[index] = res;
          ++fulfilledLen;
          if (fulfilledLen === promises.length) {
            resolve(values)
          }
        }).catch(err => reject(err))
      })
    })
  }


  static allSettled(promises) {
    return new Promise((resolve, reject) => {
      let finallyLen = 0;
      const results = []
      promises.forEach((promise, index) => {
        promise.then(res => {
          results[index] = { status: 'fulfilled', value: res };
        }).catch(err => {
          results[index] = { status: 'rejected', reason: err };
        }).finally(() => {
          ++finallyLen;
          if (finallyLen === promises.length) {
            resolve(results)
          }
        })
      })
    })
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    })
  }

  static any(promises) {
    return new Promise((resolve, reject) => {
      const reasons = []
      let rejectedLen = 0;
      promises.forEach((promise, index) => {
        promise.then(res => {
          resolve(res)
        }).catch(err => {
          reasons[index] = err;
          ++rejectedLen;
          if (rejectedLen === promises.length) {
            reject(reasons)
            // @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
            // reject(new AggregateError(reasons))
          }
        })
      })
    })
  }
}