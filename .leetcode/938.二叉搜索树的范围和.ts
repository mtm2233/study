/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-08-04 21:41:17
 * @LastEditTime: 2022-08-04 21:59:52
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=938 lang=typescript
 *
 * [938] 二叉搜索树的范围和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) {
    return 0;
  }
  let dist = 0;
  const queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length) {
    const { val, left, right } = queue.shift();
    if (val <= low) {
      right && queue.push(right);
      if (val === low) {
        dist += val;
      }
    } else if (val >= high) {
      left && queue.push(left);
      if (val === high) {
        dist += val;
      }
    } else {
      dist += val;
      left && queue.push(left)
      right && queue.push(right)
    }
  }

  return dist;
}
// @lc code=end
