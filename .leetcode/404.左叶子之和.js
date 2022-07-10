/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-09 18:34:45
 * @LastEditTime: 2022-07-09 18:40:17
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
  let sum = 0;
  const queue = [root]

  while (queue.length) {
    const node = queue.pop()
    if (!node) {
      continue;
    }

    const leftNode = node.left
    if (leftNode && !leftNode.left && !leftNode.right) {
      sum += node.left.val 
    }
    
    queue.push(leftNode)
    queue.push(node.right)
  }

  return sum
};
// @lc code=end

