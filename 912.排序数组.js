/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-31 22:26:44
 * @LastEditTime: 2021-05-31 22:27:42
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start

function merger(left, right) {
  const n = left && left.length;
  const m = right && right.length;
  let backs = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (left[i] < right[j]) {
      backs.push(left[i++]);
    } else {
      backs.push(right[j++]);
    }
  }
  while (i < n) {
    backs.push(left[i++]);
  }
  while (j < m) {
    backs.push(right[j++]);
  }
  return backs;
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const len = nums.length;
  // 递归终止条件
  if (len === 1) {
    return nums;
  }
  // 取p到r之间的中间位置q
  const mid = Math.floor(len / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  // 分治递归
  return merger(sortArray(left), sortArray(right));
};
// @lc code=end
