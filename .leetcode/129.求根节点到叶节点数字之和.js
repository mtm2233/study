/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-21 21:04:22
 * @LastEditTime: 2022-07-21 21:08:15
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) {
    return 0
  }
  let res = 0
  function sumNumbers_c(node, numStr) {
    // 是叶子节点
    if (!node.left && !node.right) {
      res += Number(numStr + node.val)
    }

    if (node.left) {
      sumNumbers_c(node.left, numStr + node.val)
    }
    if (node.right) {
      sumNumbers_c(node.right, numStr + node.val)
    }
  }
  sumNumbers_c(root, '')
  return res
};
// @lc code=end

