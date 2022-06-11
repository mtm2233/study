/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-11 22:04:46
 * @LastEditTime: 2022-06-11 22:09:55
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const paths = []

  function binaryTreePaths_c(node, prePath) {
    if (!node) {
      return
    }
    const currPath = prePath ? `${prePath}->${node.val}` : node.val.toString()
    if (!node.left && !node.right) {
      paths.push(currPath)
      return
    }
    binaryTreePaths_c(node.left, currPath)
    binaryTreePaths_c(node.right, currPath)
  }

  binaryTreePaths_c(root)

  return paths
};
// @lc code=end

