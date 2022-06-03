/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const __head = _head = {
    val: null,
    next: head,
  }
  while (_head) {
    if (_head.next && _head.next.val === val) {
      _head.next = _head.next.next
    } else {
      _head = _head.next
    }
  }
  return __head.next
};
// @lc code=end

