/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-03-10 09:24:03
 * @LastEditTime: 2022-03-10 11:42:02
 * @LastEditors: mTm
 */

// const p1 = new Promise((resolve, reject) => {
//   reject(456);
// });

const p2 = {
  then: function (resolve, reject) {
    resolve('resolve message');
  },
};

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(p2);
  }, 2000);
});

promise
  .then(res => {
    console.log('res: ', res);
  }, err => {
    console.log('err: ', err);
  })
// .then(res => {
//   console.log('res1: ', res);
// })
// .catch(err => {
//   console.log('err: ', err);
// });

//2.传入一个对象，这个兑现有then方法
// new Promise( (resolve, reject)=>{
//   const obj = {
//     then: function (resolve, reject) {
//       resolve('resolve message');
//     },
//   };
//   resolve(obj)
// }).then(
//   res => {
//     console.log('res: ', res);
//   },
//   err => {
//     console.log('err: ', err);
//   }
// );
