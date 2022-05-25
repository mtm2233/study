/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-03-22 13:25:28
 * @LastEditTime: 2022-03-22 13:44:39
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  function isNotSymmetric_c(p, q) {
    if (!p && !q) {
      return;
    }
    if ((p && q && p.val !== q.val) || !p && q || p && !q) {
      return true
    }
    const res1 = isNotSymmetric_c(p && p.left, q && q.right)
    const res2 = isNotSymmetric_c(p && p.right, q && q.left)
    if (res1 || res2) {
      return true
    }
  }
  return !isNotSymmetric_c(root.left, root.right);
};
// @lc code=end

// const res = isSymmetric({
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 3
//     },
//     right: {
//       val: 4
//     },
//   },
//   right: {
//     val: 2,
//     left: {
//       val: 4
//     },
//     right: {
//       val: 3
//     },
//   },
// })

// console.log(res);