/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-24 23:11:15
 * @LastEditTime: 2021-05-25 10:16:28
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
    let rev = null
    while(head) {
        let temp = head.next
        head.next = rev
        rev = head
        head = temp
    }
    return rev
};
// @lc code=end

