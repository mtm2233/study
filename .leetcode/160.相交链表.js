/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const nodeMap = new Map();
  while (headA || headB) {
    if (headA) {
      if (nodeMap.get(headA)) {
        return headA;
      } else {
        nodeMap.set(headA, true);
        headA = headA.next;
      }
    }

    if (headB) {
      if (nodeMap.get(headB)) {
        return headB;
      } else {
        nodeMap.set(headB, true);
        headB = headB.next;
      }
    }
  }

  return null;
};
// @lc code=end
