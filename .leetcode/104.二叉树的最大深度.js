/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  let max_depth = 1
  function maxDepth_c(r, depth) {
    if (!r.left && !r.right) {
      if (depth > max_depth) {
        max_depth = depth
      }
      return
    }
    r.left && maxDepth_c(r.left, depth + 1)
    r.right && maxDepth_c(r.right, depth + 1)
  }
  maxDepth_c(root, 1)
  return max_depth
};
// @lc code=end
