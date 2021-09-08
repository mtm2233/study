/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-06-09 09:23:38
 * @LastEditTime: 2021-06-09 09:31:38
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 0;
    let high = x;
    while(low <= high) {
        const mid = low + ((high - low) >> 1);
        if (mid * mid > x) {
            high = mid - 1;
        } else {
            if ((mid + 1) * (mid + 1) > x) {
                return mid
            } else {
                low = mid + 1
            } 
        }
    }
    return 0
};
// @lc code=end

console.log(mySqrt(9));
