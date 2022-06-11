/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-06 19:03:18
 * @LastEditTime: 2022-06-06 19:11:27
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  function transition(node) {
    if (!node) {
      return
    }
    const temp = node.left;
    node.left = node.right
    node.right = temp
    transition(node.left)
    transition(node.right)
  }
  transition(root)
  return root
};
// @lc code=end

