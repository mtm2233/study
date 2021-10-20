/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-20 20:35:19
 * @LastEditTime: 2021-10-20 21:06:19
 * @LastEditors: mTm
 */

const quickSort = require('./算法new/排序/quickSort')

// 生成大小为start~end、长度为nums的数组
function getArr(start, end, nums, sort = false) {
  const randomArr = [];
  let k = 0
  end = end + 1;
  for (let i = 0; i < nums; i++) {
    randomArr[k++] = Math.floor(Math.random() * end) + start;
  }
  if (sort) {
    quickSort(randomArr)
  }
  return randomArr;
}

// 运行时间
function runTime(callback) {
  const start = new Date().getTime(); // 开始时间
  callback()
  const end = new Date().getTime(); // 结束时间
  console.log('runing time:', end - start);
}

module.exports = {
  getArr,
  runTime,
}