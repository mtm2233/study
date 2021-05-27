/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-26 14:01:03
 * @LastEditTime: 2021-05-26 14:13:15
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const sL = []
    const tL = []

    let len = s.length
    for(let i = 0; i < len; i++) {
        if (s[i] !== '#') {
            sL.push(s[i])
        } else {
            sL.pop()
        }
    }

    len = t.length
    for(let i = 0; i < len; i++) {
        if (t[i] !== '#') {
            tL.push(t[i])
        } else {
            tL.pop()
        }
    }

    while(sL.length && tL.length) {
        if (sL.pop() !== tL.pop()) {
            return false
        }
    }

    if (sL.length !== 0 || tL.length !== 0) {
        return false
    }

    return true
};
// @lc code=end