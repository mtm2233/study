/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-06 21:08:44
 * @LastEditTime: 2021-10-11 22:37:43
 * @LastEditors: mTm
 */
const bubbleSort = require('./bubbleSort')
const insertionSort = require('./insertionSort')
const selectionSort = require('./selectionSort')
const mergeSort = require('./mergeSort')
const quickSort = require('./quickSort')
const bucketSort = require('./bucketSort')
const countSort = require('./countSort')

// 生成大小为start~end、长度为nums的数组
function getArr(start, end, nums) {
  const randomArr = []
  end = end + 1;
  for (let i = 0; i < nums; i++) {
    randomArr.push(Math.floor(Math.random() * end) + start)
  }
  return randomArr
}
// const arr = getArr(-10, 15, 20);
const arr = getArr(-100000, 10000000, 50000000);
// const arr = getArr(0, 10, 10);
const start = new Date().getTime(); // 开始时间

// bubbleSort(arr)
// insertionSort(arr)
// selectionSort(arr)
// mergeSort(arr)
// quickSort(arr)
bucketSort(arr)
// countSort(arr)

const end = new Date().getTime(); // 结束时间
console.log(arr);
console.log(end - start);