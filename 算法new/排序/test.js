/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-10-06 21:08:44
 * @LastEditTime: 2021-11-12 23:53:14
 * @LastEditors: mTm
 */
const { getArr, runTime } = require('../../utils');

const bubbleSort = require('./bubbleSort');
const insertionSort = require('./insertionSort');
const selectionSort = require('./selectionSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');
const bucketSort = require('./bucketSort');
const countSort = require('./countSort');
const { radixSortMSD, radixSortLSD } = require('./radixSort');
const heapSort = require('./HeapSort')

const arr = getArr(10, 100, 20);

runTime(() => {
  // bubbleSort(arr)
  // insertionSort(arr)
  // selectionSort(arr)
  // mergeSort(arr)
  // quickSort(arr)
  // bucketSort(arr)
  // countSort(arr)
  // radixSortLSD(arr)
  // radixSortMSD(arr);
  heapSort(arr);
  console.log(arr);
})