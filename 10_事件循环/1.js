/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-08 22:58:26
 * @LastEditTime: 2022-04-08 23:07:39
 * @LastEditors: mTm
 */
setTimeout(() => {
  console.log('setTimeout1');
  new Promise(resolve => {
    resolve()
  }).then(() => {
    new Promise(resolve => {
      resolve()
    }).then(() => {
      console.log('then4');
    })
    console.log('then2');
  })
  
});

new Promise(resolve => {
  console.log("promise1");
  resolve()
}).then(() => {
  console.log('then1');
})

setTimeout(() => {
  console.log('setTimeout2');
});

console.log(2);

queueMicrotask(() => {
  console.log('queueMicrotask');
})

new Promise(resolve => {
  resolve()
}).then(() => {
  console.log('then3');
})