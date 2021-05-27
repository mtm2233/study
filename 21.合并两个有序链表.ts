/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-25 10:34:04
 * @LastEditTime: 2021-05-25 10:53:02
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
    // 添加哨兵
    let head: ListNode = {val: 0, next: null}
    let cur: ListNode = head
    if (!l1 && !l2) {
        return null
    } else if (!l1 && l2) {
        return l2
    } else if (!l2 && l1) {
        return l1
    } else {
        while(l1) {
            let temp = l1
            while(l2) {
                if (l2.val <= temp.val) {
                    cur.next = l2
                    cur = cur.next
                    l2 = l2.next
                } else {
                    break;
                }
            }
            cur.next = l1
            cur = cur.next
            l1 = l1.next
        }
        if (l2) {
            cur.next = l2
        }
        return head.next
    }
};
// @lc code=end

