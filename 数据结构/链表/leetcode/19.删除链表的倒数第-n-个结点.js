/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-25 10:53:29
 * @LastEditTime: 2021-05-26 09:47:16
 * @LastEditors: mTm
 */
    /*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head, n) {
    if (!head) {
        return head
    }
    let rev = head
    // 添加哨兵
    head = {val: 0, next: null}
    head.next = rev
    let num = 0;
    while(rev) {
        rev = rev.next
        ++num
    }
    n = num - n
    rev = head
    while(n >= 0) {
        if (n === 0) {
            rev.next = rev.next.next
            return head.next
        }
        rev = rev.next
        --n
    }
    return head.next
};
// @lc code=end
