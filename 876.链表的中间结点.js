/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-26 09:47:54
 * @LastEditTime: 2021-05-26 09:53:53
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
var middleNode = function(head) {
    let pre = head;
    let rev = head;
    let revNum = 0;
    let cen = null
    while(pre && rev) {
        cen = pre
        pre = pre.next
        rev = rev.next
        ++revNum
        if (rev) {
            rev = rev.next
            ++revNum
        }
    }
    if (revNum%2) {
        return cen
    }
    return pre
};
// @lc code=end

