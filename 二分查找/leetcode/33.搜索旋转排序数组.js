/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const len = nums.length
    if (len === 0) return -1;
    if (len === 1) nums[0] === target ? 0 : -1;
    let low = 0;
    let high = len - 1;
    while(low <= high) {
        const mid = low + ((high - low) >> 1)
        // console.log(low, high, 'start');
        if (nums[mid] === target) {
            return mid
        } 
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[len - 1]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
        // console.log(low, high, 'end');
    }
    return -1
};
// @lc code=end
search([4, 5, 6, 0, 1, 2, 3], 3)