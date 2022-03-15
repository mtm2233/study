/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-03-15 22:34:10
 * @LastEditTime: 2022-03-15 22:56:24
 * @LastEditors: mTm
 */
// 目的 多次调用getData() 并把返回的值，处理后，作为下一个getData的参数

// aaa => aaabbb => aaabbbccc
function getData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 1000);
  });
}

/* 第一种： 回调 */
// getData('aaa').then(res => {
//   getData(res + 'bbb').then(res => {
//     getData(res + 'ccc').then(res => {
//       console.log(res);
//     })
//   })
// })

/* 第二种：链式 */
// getData('aaa')
//   .then(res => {
//     return getData(res + 'bbb');
//   })
//   .then(res => {
//     return getData(res + 'ccc');
//   })
//   .then(res => {
//     console.log(res);
//   });

/* 第三种：generator */
// function* getDataGen() {
//   const res1 = yield getData('aaa');
//   const res2 = yield getData(res1 + 'bbb');
//   const res3 = yield getData(res2 + 'ccc');
//   console.log(res3);
// }

// 手动
// const generator = getDataGen();
// generator.next().value.then(res => {
//   generator.next(res).value.then(res => {
//     generator.next(res).value.then(res => {
//       generator.next(res)
//     });
//   });
// });

// 自动化
// function execGenFn(genFn) {
//   const generator = genFn()

//   function exec(res) {
//     const { done, value } = generator.next(res)
//     if (done) {
//       return value
//     } else {
//       if (value instanceof Promise || (value && typeof value.then === 'function')) {
//         value.then(res => exec(res))
//       } else {
//         exec(res)
//       }
//     }
//   }

//   return exec()
// }

// execGenFn(getDataGen)


/* 第四种：async/await (ES8) */
async function getDataGen() {
  const res1 = await getData('aaa');
  const res2 = await getData(res1 + 'bbb');
  const res3 = await getData(res2 + 'ccc');
  console.log(res3);
}

getDataGen()