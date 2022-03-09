/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-03-09 17:24:21
 * @LastEditTime: 2022-03-09 22:50:09
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
          this.status = PROMISE_STATUS_FULFILLED;
          this.onFulfilledFns.forEach(fn => fn(this.value));
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
    executor(resolve, reject);
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

const promise = new Promise((resolve, reject) => {
  console.log('promise 初始化');
  resolve(111);
  // reject(222);
  // resolve(111);
});

// 开始
console.log('---------------then---------------');
promise
  .then(res => {
    console.log('res: ', res);
    return 123456;
  })
  .then(res => {
    console.log('res1: ', res);
    return 666666;
  })
  .catch(err => {
    console.log('err: ', err);
  })
  .then(res => {
    console.log('res2: ', res);
  })
  .finally(() => {
    console.log('finally');
  });
// promise.then(
//   res => {
//     console.log('res1: ', res);
//   },
//   err => {
//     console.log('err1: ', err);
//   }
// );

// setTimeout(() => {
//   promise.then(
//     res => {
//       console.log('res2: ', res);
//     },
//     err => {
//       console.log('err2: ', err);
//     }
//   );
// }, 1000);
