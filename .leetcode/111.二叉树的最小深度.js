/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  let min_depth = 1;
  function minDepth_c(r, depth) {
    if (!r.left && !r.right) {
      if (min_depth === 1 || depth < min_depth) {
        min_depth = depth;
      }
      return;
    }
    r.left && minDepth_c(r.left, depth + 1);
    r.right && minDepth_c(r.right, depth + 1);
  }
  minDepth_c(root, 1);
  return min_depth;
};
// @lc code=end