/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-27 09:42:51
 * @LastEditTime: 2021-05-27 10:09:25
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function binary(n) {
    const arr = []
    while(n) {
        arr.push(n%2)
        n = Math.floor(n/2)
    }
    return arr
}

var hammingDistance = function(x, y) {
    // let arr1 = []
    // let arr2 = []
    // if (x < y) {
    //     arr1 = binary(x)
    //     arr2 = binary(y)
    // } else {
    //     arr1 = binary(y)
    //     arr2 = binary(x)
    // }
    // let count = 0;
    // while(arr2.length) {
    //     let temp = arr1.shift() || 0
    //     if ( arr2.shift() !== temp) {
    //         count++
    //     }
    // }
    // return count
    let count = 0
    if (x > y) {
        const temp = x
        x = y
        y = temp
    }
    while(y) {
        if (y%2 !== (x > 0 ? x%2 : 0)) {
            count++
        }
        y = Math.floor(y/2)
        if (x > 0) {
            x = Math.floor(x/2)
        }
    }
    return count
};
// @lc code=end