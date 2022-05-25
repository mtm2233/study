/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-31 22:26:44
 * @LastEditTime: 2021-06-01 11:14:44
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start

function merge(A, p, r, q) {
  const left = A.slice(p, q + 1)
  const right = A.slice(q + 1, r + 1)
  const max_value = 99999;
  left.push(max_value)
  right.push(max_value)
  let i = 0;
  let j = 0;
  let k = p;
  while (left[i] !== max_value) {
    if (left[i] <= right[j]) {
      A[k++] = left[i++]
    } else {
      A[k++] = right[j++]
    }
  }
}

function merge_sort_c(A, p, r) {
  if (p >= r) return;
  const q = Math.floor((p + r) / 2);
  merge_sort_c(A, p, q)
  merge_sort_c(A, q + 1, r)
  merge(A, p, r, q)
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  merge_sort_c(nums, 0, nums.length - 1)
  return nums
};
// @lc code=end
