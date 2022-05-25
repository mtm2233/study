/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-22 11:38:18
 * @LastEditTime: 2022-03-22 13:14:50
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const nodes = []
  function inorderTraversal_c(root) {
    if(!root) {
      return;
    }
    inorderTraversal_c(root.left)
    nodes.push(root.val)
    inorderTraversal_c(root.right)
  }
  inorderTraversal_c(root)

  return nodes
};
// @lc code=end

