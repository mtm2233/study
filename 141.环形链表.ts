/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-25 10:17:41
 * @LastEditTime: 2021-05-25 10:33:22
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return false
    }
    // 
    const cycleMap = new Map()
    while(head) {
        if (cycleMap.get(head)) {
            return true
        } else {
            cycleMap.set(head, true)
        }
        head = head.next
    }
    return false
};
// @lc code=end

