/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-07 14:43:29
 * @LastEditTime: 2022-01-07 22:11:23
 * @LastEditors: mTm
 */
const { getArr } = require('../../utils');

/* 排序 */
// 实现归并排序、快速排序、插⼊排序、冒泡排序、选择排序
const {
  mergeSort,
  quickSort,
  insertSort,
  bubbleSort,
  selectSort,
  verifySort,
} = require('./sort');

// const arr = getArr(0, 10, 5);

// console.log(arr);
// // mergeSort(arr);
// // quickSort(arr);
// // insertSort(arr);
// // bubbleSort(arr);
// selectSort(arr);
// console.log(arr);
// console.log(verifySort(arr));

// 编程实现O(n)时间复杂度内找到⼀组数据的第K⼤元素
// const searchTopK = require('./searchTopK');
// const arr = getArr(0, 10, 5);
// console.log(arr);
// console.log(searchTopK(arr, 3));

/* ⼆分查找 ⼆ */
// 实现⼀个有序数组的⼆分查找算法
// const binarySearch = require('./binarySearch');
// const arr = getArr(0, 10, 10, true);
// console.log(arr);
// console.log(binarySearch(arr, 5));

// 实现模糊⼆分查找算法（⽐如⼤于等于给定值的第⼀个元素）
const fuzzyBinarySearch = require('./fuzzyBinarySearch');
const arr = getArr(0, 10, 20, true);
console.log(arr);
console.log(fuzzyBinarySearch(arr, 5));