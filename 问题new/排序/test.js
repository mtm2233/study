/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-10-06 21:08:44
 * @LastEditTime: 2021-10-16 23:17:06
 * @LastEditors: mTm
 */
const bubbleSort = require('./bubbleSort');
const insertionSort = require('./insertionSort');
const selectionSort = require('./selectionSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');
const bucketSort = require('./bucketSort');
const countSort = require('./countSort');
const { radixSortMSD, radixSortLSD } = require('./radixSort');

// 生成大小为start~end、长度为nums的数组
function getArr(start, end, nums) {
  const randomArr = [];
  end = end + 1;
  for (let i = 0; i < nums; i++) {
    randomArr.push(Math.floor(Math.random() * end) + start);
  }
  return randomArr;
}

function sortTest() {
  // const arr = getArr(-10, 15, 20);
  // const arr = getArr(-100000, 10000000, 50000000);
  const arr = getArr(100000000, 9999999999, 10);
  const start = new Date().getTime(); // 开始时间

  // bubbleSort(arr)
  // insertionSort(arr)
  // selectionSort(arr)
  // mergeSort(arr)
  // quickSort(arr)
  // bucketSort(arr)
  // countSort(arr)
  // radixSortLSD(arr)
  radixSortMSD(arr);

  const end = new Date().getTime(); // 结束时间
  console.log(arr);
  console.log(end - start);
}

// sortTest()

// 获取排序好的数组
function sortArr(max, min, nums) {
  const arr = getArr(...arguments);
  quickSort(arr);
  return arr;
}

module.exports = sortArr;
