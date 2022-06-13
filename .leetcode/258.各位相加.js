/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-13 20:18:09
 * @LastEditTime: 2022-06-13 20:35:48
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // let _num = num
  // while (_num > 9) {
  //   _num = `${_num}`.split('').reduce((preVal, currVal) => {
  //     return preVal + Number(currVal)
  //   }, 0)
  // }
  // return _num
  // 这道题在数学上叫做 数根。

  // n 是 0 ，数根就是 0。
  // n 不是 9 的倍数，数根就是 n 对 9 取余，即 n mod 9。
  // n 是 9 的倍数，数根就是 9。

  // @see https://leetcode.cn/problems/add-digits/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-5-7/
  return (num - 1) % 9 + 1;
};
// @lc code=end

