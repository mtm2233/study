/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-05-30 09:05:29
 * @LastEditTime: 2022-05-30 22:42:55
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  const m = nums1.length;
  const n = nums2.length;

  let totalLeft = (m + n + 1) >> 1;
  // 在 nums1 的区间 [0, m] 查找恰当的分割线
  // 使 nums1[i - 1] <= nums2[j] && nums2[j - 1] <= nums1[i]
  let left = 0;
  let right = m;

  while (left < right) {
    const i = left + ((right - left + 1) >> 1);
    const j = totalLeft - i;
    if (nums1[i - 1] > nums2[j]) {
      // 下一轮的搜索区间 [left, i - 1]
      right = i - 1;
    } else {
      // 下一轮的搜索区间 [i, right]
      left = i;
    }
  }

  let i = left;
  let j = totalLeft - i;
  const nums1LeftMax = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1];
  const nums1RightMin = i === m ? Number.MAX_SAFE_INTEGER : nums1[i];
  const nums2LeftMax = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1];
  const nums2RightMin = j === n ? Number.MAX_SAFE_INTEGER : nums2[j];

  if ((m + n) % 2 === 1) {
    return Math.max(nums1LeftMax, nums2LeftMax);
  } else {
    return (
      (Math.max(nums1LeftMax, nums2LeftMax) +
        Math.min(nums1RightMin, nums2RightMin)) /
      2
    );
  }
};

// var findMedianSortedArrays = function(nums1, nums2) {
//   let i = 0
//   let j = 0
//   const len1 = nums1.length
//   const len2 = nums2.length

//   // 3 => nums[1]
//   // 4 => (nums[1] + nums[2]) /2
//   let pos = ((len1 + len2 ) / 2) - 0.5

//   let num1 = null;
//   let num2 = null;

//   let k = 0

//   while (i < len1 || j < len2) {
//     num1 = num2
//     if (i === len1) {
//       num2 = nums2[j++]
//     } else if (j === len2) {
//       num2 = nums1[i++]
//     } else if (nums1[i] <= nums2[j]) {
//       num2 = nums1[i++]
//     } else {
//       num2 = nums2[j++]
//     }
//     if (k === pos) {
//       return num2
//     } else if (k > pos) {
//       return (num1 + num2) / 2
//     }
//     k++
//   }
// };
