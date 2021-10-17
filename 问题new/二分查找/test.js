/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-10-16 23:14:32
 * @LastEditTime: 2021-10-17 19:03:51
 * @LastEditors: mTm
 */
const sortArr = require('../排序/test');
const { binarySearch, binarySearchRecursion } = require('./binarySearch');
const { sqrtBigjs, sqrt } = require('./求⼀个数的平⽅根')
const firstEqual = require('./第一个等于给定值的元素')
const firstGte = require('./第一个大于等于给定值的元素')
const lastEqual = require('./最后一个等于给定值的元素')
const lastLte = require('./最后一个小于等于给定值的元素')

const arr = sortArr(0, 5, 15);
const k = 6

console.log(arr);
// console.log(binarySearchRecursion(arr, k));
// console.log(sqrtBigjs(5, 5));

// console.log(firstEqual(arr, k));
// console.log(firstGte(arr, k));
// console.log(lastEqual(arr, k));
console.log(lastLte(arr, k));