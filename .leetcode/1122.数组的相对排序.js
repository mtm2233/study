/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-25 21:46:39
 * @LastEditTime: 2022-07-25 21:54:38
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const numCount = {};
  arr2.forEach(num => (numCount[num + ''] = 0));

  const extraNums = [];
  arr1.forEach(item => {
    if (numCount[item] === undefined) {
      extraNums.push(item);
    } else {
      numCount[item]++;
    }
  });

  const _arr = [];
  arr2.forEach(num => {
    const count = numCount[num];
    _arr.push(...new Array(count).fill(num));
  });
  _arr.push(...extraNums.sort((a, b) => a - b));

  return _arr;
};
// @lc code=end
