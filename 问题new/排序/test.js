/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-06 21:08:44
 * @LastEditTime: 2021-10-09 00:39:42
 * @LastEditors: mTm
 */
const bubbleSort = require('./bubbleSort')
const insertionSort = require('./insertionSort')
const selectionSort = require('./selectionSort')
const mergeSort = require('./mergeSort')
const quickSort = require('./quickSort')

const arr = [1,5,6,3,2,0,3,9,8,11,15,-1,-8,9];

// bubbleSort(arr)
// insertionSort(arr)
// selectionSort(arr)
// mergeSort(arr)
quickSort(arr)

console.log(arr);