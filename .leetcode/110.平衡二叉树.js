/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) {
    return true
  }
  let flag = false;
  function getDepth_c(r, depth) {
    if (flag || !r) {
      return depth;
    }
    const depthL = getDepth_c(r.left, depth + 1)
    const depthR = getDepth_c(r.right, depth + 1)
    if (Math.abs(depthL - depthR) > 1) {
      flag = true;
    }
    return Math.max(depthL, depthR)
  }
  getDepth_c(root, 0)
  return !flag;
};
// @lc code=end