/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) {
    return false;
  }
  let flag = false;
  function dfs(r, sum) {
    if (flag) {
      return
    }
    if (!r.left && !r.right) {
      flag = r.val + sum === targetSum;
      return;
    }
    r.left && dfs(r.left, r.val + sum)
    r.right && dfs(r.right, r.val + sum)
  }
  dfs(root, 0)
  return flag
};
// @lc code=end

