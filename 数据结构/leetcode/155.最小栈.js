/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-26 11:19:08
 * @LastEditTime: 2021-05-26 11:32:15
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1] 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const len = this.arr.length
    let mix = this.arr[0]
    for(let i = 1; i < len; i++) {
        if (mix > this.arr[i]) {
            mix = this.arr[i]
        }
    }
    return mix
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

