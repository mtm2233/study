/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-26 11:32:35
 * @LastEditTime: 2021-05-26 14:00:30
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.arr = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.arr.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const arr1 = []
    let removeItem
    while(this.arr.length > 1) {
        arr1.push(this.arr.pop())
    }

    removeItem = this.arr.pop()

    while(arr1.length) {
        this.arr.push(arr1.pop())
    }

    return removeItem
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.arr[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.arr[0] === undefined
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end