/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-10-16 23:14:32
 * @LastEditTime: 2021-10-20 21:07:28
 * @LastEditors: mTm
 */
const sortArr = require('../../utils');
const { binarySearch, binarySearchRecursion } = require('./binarySearch');
const { sqrtBigjs, sqrt } = require('./求⼀个数的平⽅根')
const firstEqual = require('./第一个等于给定值的元素')
const firstGte = require('./第一个大于等于给定值的元素')
const lastEqual = require('./最后一个等于给定值的元素')
const lastLte = require('./最后一个小于等于给定值的元素')

const loopSearch = require('./循环有序数组')

const arr = sortArr(0, 5, 15, true);
const loopArr = [4,5,6,1,2,3]

const k = 6

// console.log(arr);
// console.log(binarySearchRecursion(arr, k));
// console.log(sqrtBigjs(5, 5));

// console.log(firstEqual(arr, k));
// console.log(firstGte(arr, k));
// console.log(lastEqual(arr, k));
// console.log(lastLte(arr, k));

console.log(loopArr);
console.log(loopSearch(loopArr, 1));