/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-06-22 11:53:01
 * @LastEditTime: 2021-06-22 11:58:22
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start

function printPermutations(data, n, k, permutes) {
    if (k === 1) {
        let nums = []
        for(let i = 0; i < n; ++i) {
            nums.push(data[i])
        }
        permutes.push(nums)
    }

    for(let i = 0; i < k; ++i) {
        let temp = data[i]
        data[i] = data[k - 1]
        data[k - 1] = temp

        printPermutations(data, n, k - 1, permutes)

        temp = data[i]
        data[i] = data[k - 1]
        data[k - 1] = temp
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const permutes = []
    const len = nums.length
    printPermutations(nums, len, len, permutes)
    return permutes
};
// @lc code=end

