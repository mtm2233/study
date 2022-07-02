/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-02 18:21:10
 * @LastEditTime: 2022-07-02 18:57:30
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  if (!head) {
    return null;
  }
  // 守卫
  const _head = new ListNode(null, head);
  let q = _head;
  while (q && q.next && q.next.next) {
    const temp = q.next;
    q.next = q.next.next;
    temp.next = q.next.next;
    q.next.next = temp;
    q = q.next.next;
  }
  return _head.next;
};
// @lc code=end
