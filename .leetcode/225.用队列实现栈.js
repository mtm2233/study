/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-05 17:51:55
 * @LastEditTime: 2022-06-05 19:36:56
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
  this.stack = new Array()
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
 const stack = []
 stack.push(x)
 while (!this.empty()) {
  stack.push(this.pop())
 }
 this.stack = stack
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.stack.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.stack[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.stack.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */