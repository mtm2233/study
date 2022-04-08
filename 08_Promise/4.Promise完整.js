/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-10 11:58:45
 * @LastEditTime: 2022-03-20 21:45:26
 * @LastEditors: mTm
 */
function promiseErrorHandler(value, callback, resolve, reject) {
  try {
    const result = callback(value);
    resolve(result);
  } catch (error) {
    reject(error);
  }
}

const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';
class Promise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = null;
    this.reason = null;
    this.onfulfilledFns = [];
    this.onrejectedFns = [];

    const resolve = value => {
      this.value = value;
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PENDING) {
          if (
            value instanceof Promise ||
            (typeof value === 'object' && typeof value.then === 'function')
          ) {
            value.then(resolve, reject);
          } else {
            this.onfulfilledFns.forEach(fn => fn(value));
            this.status = PROMISE_STATUS_FULFILLED;
          }
        }
      });
    };
    const reject = reason => {
      this.reason = reason;
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PENDING) {
          if (!this.onrejectedFns.length) {
            throw new Error(reason);
          }
          this.onrejectedFns.forEach(fn => fn(reason));
          this.status = PROMISE_STATUS_REJECTED;
        }
      });
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onfulfilled, onrejected) {
    onfulfilled = onfulfilled || (res => res);
    onrejected =
      onrejected ||
      (err => {
        throw err;
      });
    return new Promise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onfulfilledFns.push(() =>
          promiseErrorHandler(this.value, onfulfilled, resolve, reject)
        );
        this.onrejectedFns.push(() =>
          promiseErrorHandler(this.reason, onrejected, resolve, reject)
        );
      } else if (this.status === PROMISE_STATUS_FULFILLED) {
        promiseErrorHandler(this.value, onfulfilled, resolve, reject);
      } else if (this.status === PROMISE_STATUS_REJECTED) {
        promiseErrorHandler(this.reason, onrejected, resolve, reject);
      }
    });
  }

  catch(onrejected) {
    return this.then(undefined, onrejected);
  }

  finally(onfinallyed) {
    const onfinallyedHandler = res => {
      onfinallyed();
      return res;
    };
    return this.then(onfinallyedHandler, onfinallyedHandler);
  }

  static resolve(value) {
    return new Promise(resolve => resolve(value));
  }

  static reject(reason) {
    return new Promise((resolve, reject) => reject(reason));
  }

  static all(promises) {
    return new Promise((resolve, reject) => {
      const results = [];
      let fulfilledLen = 0;
      promises.forEach((promise, index) => {
        promise
          .then(res => {
            ++fulfilledLen;
            results[index] = res;
            if (fulfilledLen === promises.length) {
              resolve(results);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  }

  static allSettled(promises) {
    return new Promise(resolve => {
      const results = [];
      let settledLen = 0;
      promises.forEach((promise, index) => {
        promise
          .then(res => {
            results[index] = res;
          })
          .catch(err => {
            results[index] = err;
          })
          .finally(() => {
            ++settledLen;
            if (settledLen === promises.length) {
              resolve(results);
            }
          });
      });
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(promise => {
        promise
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  }

  static any(promises) {
    return new Promise((resolve, reject) => {
      let rejectedLen = 0;
      const reasons = [];
      promises.forEach((promise, index) => {
        promise
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            ++rejectedLen;
            reasons[index] = err;
            if (rejectedLen === promises.length) {
              // @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
              // reject(new AggregateError(reasons));
              reject(reasons)
            }
          });
      });
    });
  }
}

module.exports = {
  Promise
}