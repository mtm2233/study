/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-06-15 22:21:25
 * @LastEditTime: 2022-06-15 22:42:18
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let i = 1;
    let j = n;
    // 二分变形 第一个满足条件的值
    while (i <= j) {
        const mid = i + ((j - i) >> 1)
        if (isBadVersion(mid)) {
            if (mid === 1 || !isBadVersion(mid - 1)) {
                return mid
            }
            j = mid - 1
        } else {
            i = mid + 1
        }
    }
    return null
  };
};
// @lc code=end
