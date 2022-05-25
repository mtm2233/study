/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-10-20 18:54:37
 * @LastEditTime: 2021-10-20 21:06:46
 * @LastEditors: mTm
 */
const SkipList = require('./跳表/SkipList');
const { getArr, runTime } = require('../utils');

const skipList = new SkipList();

const arr = getArr(1, 50000, 50000);
arr.forEach((num, i) => {
  if (i % 1000 === 0) {
    console.log('正在插入：', i);
  }
  skipList.insert(num, num);
});

runTime(() => {
  const data = skipList.binarySearch(14000)
  // const data = skipList.linkSearch(50000);
  console.log(data);
});
