/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-06-01 14:55:19
 * @LastEditTime: 2021-06-02 09:20:27
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start

function wrap(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

function position(nums, p, r) {
  const q = Math.floor((p + r) / 2);
  if (nums[p] < nums[q]) {
    wrap(nums, p, q);
  }
  if (nums[q] < nums[r]) {
    wrap(nums, q, r);
  }
  if (nums[p] < nums[q]) {
    wrap(nums, p, q);
  }
  wrap(nums, q, r - 1);
  return nums[r - 1];
}

function max_k_c(nums, p, r, k) {
  // if (p >= r) return
  const center = position(nums, p, r);
  let i = p;
  let j = r - 1;
  while (i < j) {
    while (nums[++i] > center) {}
    while (nums[--j] < center) {}
    if (i < j) {
      wrap(nums, i, j);
    }
  }
  wrap(nums, r - 1, i);
  // max_k_c(nums, p, i - 1, k);
  // max_k_c(nums, i + 1, r, k);

  if (i === k) {
    return center;
  } else if (i > k) {
    return max_k_c(nums, p, i - 1, k);
  } else {
    return max_k_c(nums, i + 1, r, k);
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const len = nums.length - 1;
  const k1 = k - 1
  return max_k_c(nums, 0, len, k1);
};
// @lc code=end
const arr = [1,5,8,9,7,0,-4,70,-4]
const result = findKthLargest(arr, 1)
console.log(arr);
console.log(result);
