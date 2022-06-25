/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-23 22:58:02
 * @LastEditTime: 2022-06-23 22:28:01
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 纯函数
var addTwoNumbers = function (l1, l2) {
  // 进制
  let scale = 0;
  // 守卫
  let linkHead = new ListNode(null);
  let link = linkHead;
  function addNode(val) {
    if (val >= 10) {
      link.next = new ListNode(val - 10)
      scale = 1
    } else {
      link.next = new ListNode(val)
      scale = 0
    }
    link = link.next
  }
  // 合并
  while (l1 && l2) {
    addNode(l1.val + l2.val + scale)
    l1 = l1.next
    l2 = l2.next
  }

  while (l1) {
    addNode(l1.val + scale)
    l1 = l1.next
  }

  while (l2) {
    addNode(l2.val + scale)
    l2 = l2.next
  }

  if (scale) {
    link.next = {
      val: 1,
      next: null
    }
  }

  return linkHead.next;
};
// @lc code=end
