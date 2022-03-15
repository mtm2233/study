/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-15 22:53:47
 * @LastEditTime: 2022-03-15 23:03:28
 * @LastEditors: mTm
 */
function getData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 1000);
  });
}

async function getDataGen() {
  console.log('async start');
  // throw 666
  const res1 = await getData('aaa');
  // reject 会直接停止
  const res2 = await new Promise((resolve, reject) => {
    reject(res1 + 'ccc')
  });
  const res3 = await res2 + 'bbb';
  // thenable
  const res4 = await {
    then(resolve, reject) {
      resolve(res3 + 'ddd')
    }
  };
  console.log(res4);
  console.log('async end');
}

getDataGen().then(res => {
  console.log('res: ', res);
}).catch(err => {
  console.log('err: ', err);
})

console.log('async loading');