/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-16 19:44:04
 * @LastEditTime: 2022-07-16 20:00:08
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const res = new Array(n)
  while (n) {
    const _n = n - 1
    if (n % 3 === 0) {
      res[_n] = 'Fizz'
      if (n % 5 === 0) {
        res[_n] = 'FizzBuzz'
      }
    } else if (n % 5 === 0) {
      res[_n] = 'Buzz'
    } else {
      res[_n] = n + ""
    }
    n--
  }

  return res
};
// @lc code=end

