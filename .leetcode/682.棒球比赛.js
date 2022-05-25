/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-26 14:15:18
 * @LastEditTime: 2021-05-26 14:25:28
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const arr = []
    let num = 0

    const len = ops.length
    for(let i = 0; i < len; i++) {
        const temp = ops[i]
        if (temp === 'C') {
            arr.pop()
            num -= 2
        } else if (temp === 'D') {
            arr.push(arr[num - 1] * 2)
        } else if (temp === '+') {
            arr.push(arr[num - 1] + arr[num - 2])
        } else {
            arr.push(temp - 0)
        }
        num++
    }

    return arr.reduce((preVal, val) => {
        preVal += val
        return preVal
    }, 0)
};
// @lc code=end