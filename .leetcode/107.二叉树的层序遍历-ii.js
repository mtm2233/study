/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-20 21:27:44
 * @LastEditTime: 2022-07-20 21:50:57
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }

  const queue = [];
  queue.push({
    node: root,
    level: 1,
  });

  const res = [];
  let level = 1;
  let levelRes = [];
  while (queue.length) {
    const { node, level: _level } = queue.shift();
    if (_level !== level) {
      level = _level;
      res.unshift(levelRes);
      levelRes = [];
    }
    levelRes.push(node.val);

    if (node.left) {
      queue.push({
        node: node.left,
        level: _level + 1,
      });
    }
    if (node.right) {
      queue.push({
        node: node.right,
        level: _level + 1,
      });
    }
  }

  res.unshift(levelRes);
  return res;
};
// @lc code=end
