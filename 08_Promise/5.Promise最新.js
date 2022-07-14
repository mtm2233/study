/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-13 19:26:35
 * @LastEditTime: 2022-07-14 20:43:33
 * @LastEditors: mTm
 */

const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';

function promiseErrorHanlder(fn, payload, resolve, reject) {
  try {
    const res = fn(payload);
    resolve(res);
  } catch (error) {
    reject(error);
  }
}

class Promise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;

    this.onfulfilledFns = [];
    this.onrejectedFns = [];

    this.value = undefined;
    this.reason = undefined;

    const resolve = value => {
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PENDING) {
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          if (value instanceof Promise) {
            queueMicrotask(() => {
              queueMicrotask(() => {
                value.then(
                  value => {
                    this.status = PROMISE_STATUS_PENDING;
                    resolve(value);
                  },
                  reason => {
                    this.status = PROMISE_STATUS_PENDING;
                    reject(reason);
                  }
                );
              })
            })
            // thenable
          } else if (value && typeof value.then === 'function') {
            queueMicrotask(() => {
              value.then(
                value => {
                  this.status = PROMISE_STATUS_PENDING;
                  resolve(value);
                },
                reason => {
                  this.status = PROMISE_STATUS_PENDING;
                  reject(reason);
                }
              );
            })
          } else {
            this.onfulfilledFns.forEach(fn => fn(value));
          }
        }
      });
    };
    const reject = reason =>
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PENDING) {
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          this.onrejectedFns.forEach(fn => fn(reason));
        }
      });

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onfulfilled, onrejected) {
    onfulfilled = onfulfilled || (value => value);
    onrejected =
      onrejected ||
      (reason => {
        throw reason;
      });
    return new Promise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onfulfilledFns.push(() =>
          promiseErrorHanlder(onfulfilled, this.value, resolve, reject)
        );
        this.onrejectedFns.push(() =>
          promiseErrorHanlder(onrejected, this.reason, resolve, reject)
        );
      } else if (this.status === PROMISE_STATUS_FULFILLED) {
        promiseErrorHanlder(onfulfilled, this.value, resolve, reject);
      } else {
        promiseErrorHanlder(onrejected, this.reason, resolve, reject);
      }
    });
  }

  catch(onrejected) {
    return this.then(null, onrejected);
  }

  finally(onfinished) {
    return this.then(
      res => {
        onfinished();
        return res;
      },
      res => {
        onfinished();
        throw res;
      }
    );
  }

  static resolve(value) {
    return new Promise(resolve => resolve(value));
  }

  static reject(reason) {
    return new Promise((_, reject) => reject(reason));
  }

  static all(promises) {
    const fulfilledRes = [];
    let fulfilledSum = 0;
    let rejected = false;
    const len = promises.length;

    return new Promise((resolve, reject) => {
      for (let i = 0; i < len; i++) {
        promises[i]
          .then(value => {
            if (rejected) {
              return;
            }
            fulfilledRes[i] = value;
            if (++fulfilledSum === len) {
              resolve(fulfilledRes);
            }
          })
          .catch(reason => {
            reject(reason);
            rejected = true;
            return;
          });
      }
    });
  }

  static allSettled(promises) {
    const finishedRes = [];
    let finishedSum = 0;
    const len = promises.length;

    return new Promise(resolve => {
      for (let i = 0; i < len; i++) {
        promises[i]
          .then(value => {
            finishedRes[i] = {
              status: PROMISE_STATUS_FULFILLED,
              value,
            };
          })
          .catch(reason => {
            finishedRes[i] = {
              status: PROMISE_STATUS_REJECTED,
              reason,
            };
          })
          .finally(() => {
            if (++finishedSum === len) {
              resolve(finishedRes);
            }
          });
      }
    });
  }

  static race(promises) {
    let finished = false;

    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .finally(() => {
            if (finished) {
              return;
            }
            finished = true;
          })
          .then(value => {
            resolve(value);
          })
          .catch(reason => {
            reject(reason);
          });
      }
    });
  }

  static any(promises) {
    let fulfilled = false;
    let rejectedSum = 0;
    let rejectedRes = [];

    const len = promises.length;

    return new Promise((resolve, reject) => {
      for (let i = 0; i < len; i++) {
        promises[i]
          .then(value => {
            if (fulfilled) {
              return;
            }
            fulfilled = true;
            resolve(value);
          })
          .catch(reason => {
            rejectedRes[i] = reason;
            if (++rejectedSum === len) {
              reject(
                new AggregateError(rejectedRes, 'All promises were rejected')
              );
            }
          });
      }
    });
  }
}

module.exports = {
  Promise
}