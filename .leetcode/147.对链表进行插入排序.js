/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-25 19:14:14
 * @LastEditTime: 2022-07-25 10:05:35
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function (head) {
  if (!head) {
    return;
  }
  let q = head;
  const _head = new ListNode();

  while (q) {
    let insertNode = q;

    let _q = _head;
    while (_q.next && _q.next.val < insertNode.val) {
      _q = _q.next;
    }

    q = q.next;
    insertNode.next = _q.next
    _q.next = insertNode
  }
  return _head.next;
};
// @lc code=end
