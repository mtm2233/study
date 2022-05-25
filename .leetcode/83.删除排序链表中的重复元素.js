/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-22 10:43:28
 * @LastEditTime: 2022-03-22 10:46:36
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let q = head
  while (q && q.next) {
    if (q.val === q.next.val) {
      q.next = q.next.next
    } else {
      q = q.next
    }
  }
  return head
};
// @lc code=end

