/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-03-10 19:24:03
 * @LastEditTime: 2022-07-13 22:10:30
 * @LastEditors: mTm
 */

// const { Promise } = require('./4.Promise完整')
const { Promise } = require('./5.Promise最新')

// 基本测试
// const p1 = new Promise((resolve, reject) => {
//   // setTimeout(() => {
//   //   // resolve('resolve');
//   //   reject('reject error');
//   //   resolve('resolve');
//   // }, 500);
//   // throw 'errorerror';
//   reject('reject');
//   // resolve('resolve');
// });
// p1.then(res => {
//   console.log('res', res);
//   return 'res1';
// })
//   .catch(err => {
//     console.log('err', err);
//     return '123456';
//   })
//   .finally(res => {
//     console.log('finally', res);
//     return 'finally';
//   })
//   .then(res => {
//     console.log('res1', res);
//   });

// // setTimeout(() => {
// //   p1.then(
// //     res => {
// //       console.log('res1000', res);
// //     },
// //     err => {
// //       console.log('err1000', err);
// //     }
// //   );
// // }, 1000);

const p1 = new Promise(resolve => {
  resolve(111);
});

const p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve(222);
  }, 1000);
});

const p3 = new Promise(resolve => {
  setTimeout(() => {
    resolve(333);
  }, 500);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(444);
  }, 100);
});

// 实例方法测试
// Promise.resolve('fulfilled')
// Promise.reject('rejected')
// Promise.all([p1, p2, p3, p4])
// Promise.allSettled([p1, p2, p3, p4])
// Promise.race([p2, p3, p4])
Promise.any([p4])
  .then(res => {
    console.log('res', res);
  })
  .catch(err => {
    console.log('err', err);
  });


// // const p1 = new Promise((resolve, reject) => {
// //   reject(456);
// // });

// const p2 = {
//   then: function (resolve, reject) {
//     resolve('resolve message');
//   },
// };

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(p2);
//   }, 2000);
// });

// promise
//   .then(res => {
//     console.log('res: ', res);
//   }, err => {
//     console.log('err: ', err);
//   })
// // .then(res => {
// //   console.log('res1: ', res);
// // })
// // .catch(err => {
// //   console.log('err: ', err);
// // });

// //2.传入一个对象，这个兑现有then方法
// // new Promise( (resolve, reject)=>{
// //   const obj = {
// //     then: function (resolve, reject) {
// //       resolve('resolve message');
// //     },
// //   };
// //   resolve(obj)
// // }).then(
// //   res => {
// //     console.log('res: ', res);
// //   },
// //   err => {
// //     console.log('err: ', err);
// //   }
// // );
