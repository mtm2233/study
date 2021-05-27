/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-26 11:13:33
 * @LastEditTime: 2021-05-26 11:18:23
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = []

    let len = s.length
    for(let i = 0; i < len; i++) {
        let temp = arr[arr.length - 1]
        if (temp === '(' && s[i] === ')') {
            arr.pop()
        } else if (temp === '[' && s[i] === ']') {
            arr.pop()
        } else if (temp === '{' && s[i] === '}') {
            arr.pop()
        } else {
            arr.push(s[i])
        }
    }

    return arr.length === 0 ? true : false
};
// @lc code=end

