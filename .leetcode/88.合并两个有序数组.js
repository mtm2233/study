/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-03-22 10:47:59
 * @LastEditTime: 2022-03-22 11:37:27
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let k = 0;
  let i = 0;
  let j = 0;
  const _nums1 = [...nums1];
  while (i < m && j < n) {
    if (_nums1[i] < nums2[j]) {
      nums1[k++] = _nums1[i++];
    } else {
      nums1[k++] = nums2[j++];
    }
  }
  
  while (i < m) {
    nums1[k++] = _nums1[i++];
  }

  while (j < n) {
    nums1[k++] = nums2[j++];
  }
};
// @lc code=end

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
