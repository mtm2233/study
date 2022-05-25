/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-22 13:14:12
 * @LastEditTime: 2022-03-22 13:40:28
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  function isSameTree_c(p, q) {
    if (!p && !q) {
      return;
    }
    if ((p && q && p.val !== q.val) || !p && q || p && !q) {
      return true
    }
    const res1 = isSameTree_c(p && p.left, q && q.left)
    const res2 = isSameTree_c(p && p.right, q && q.right)
    if (res1 || res2) {
      return true
    }
  }
  return !isSameTree_c(p, q);
};
// @lc code=end