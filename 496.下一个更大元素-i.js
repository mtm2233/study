/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-26 14:26:13
 * @LastEditTime: 2021-05-26 14:51:08
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const map = new Map();

  nums2.forEach((v) => {
    while (stack.length && v > stack[stack.length - 1]) {
      map.set(stack.pop(), v);
    }
    stack.push(v);
  });

  stack.forEach((v) => map.set(v, -1));

  return nums1.map((v) => map.get(v));
};
// @lc code=end