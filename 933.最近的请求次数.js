/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-26 16:10:46
 * @LastEditTime: 2021-05-26 16:34:02
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function() {
    this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t)
    while(this.queue[0] < t - 3000) {
        this.queue.shift()
    }
    return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
// var obj = new RecentCounter()
// console.log(obj.ping(1));
// console.log(obj.ping(100));
// console.log(obj.ping(3000));
// console.log(obj.ping(3002));
// console.log(obj);
