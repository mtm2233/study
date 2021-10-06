/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-06 21:08:44
 * @LastEditTime: 2021-10-06 22:32:11
 * @LastEditors: mTm
 */
const bubbleSort = require('./bubbleSort')
const insertionSort = require('./insertionSort')

const arr = [1,5,6,3,2,0,3,9,8,11,15,-1,-8,9];

// bubbleSort(arr)
insertionSort(arr)
console.log(arr);