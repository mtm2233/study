/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-20 15:38:07
 * @LastEditTime: 2021-05-20 15:45:50
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let burden = false
    let result = 0
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
        burden = true
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    while (dividend >= divisor) {
        dividend = dividend - divisor
        result += 1 
    }

    return burden ? 0 - result : result
};
// @lc code=end

console.log(divide(-2147483648, -1));
console.log(-2147483648/-1);