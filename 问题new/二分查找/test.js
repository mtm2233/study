/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-10-16 23:14:32
 * @LastEditTime: 2021-10-17 00:13:34
 * @LastEditors: mTm
 */
const sortArr = require('../排序/test');
const { binarySearch, binarySearchRecursion } = require('./binarySearch');

const arr = sortArr(0, 10, 5);

console.log(arr);
console.log(binarySearchRecursion(arr, 10));
