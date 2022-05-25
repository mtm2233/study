/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-05-05 09:39:23
 * @LastEditTime: 2022-05-05 10:35:23
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function createNode(val) {
    if (!Array.isArray(val)) {
      return null;
    }
    const len = val.length;
    if (!len) {
      return null;
    }

    let _val = val;
    if (len === 1) {
      _val = val[0] 
    }
    return {
      val: _val,
      left: null,
      right: null,
    }
  }

  const root = createNode(nums);
  function middleBST(r) {
    if (!r || !Array.isArray(r.val)) {
      return;
    }
    
    const { val } = r;
    const middle = Math.round((val.length - 1) / 2);

    r.left = createNode(val.slice(0, middle));
    r.right = createNode(val.slice(middle + 1));
    r.val = val[middle];

    middleBST(r.left);
    middleBST(r.right);
  }
  middleBST(root);
  return root;
};
// @lc code=end
