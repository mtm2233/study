/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-21 17:00:42
 * @LastEditTime: 2021-05-24 15:45:47
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// var isPalindrome = function(head) {
//     const valList = []
//     while(head) {
//         valList.push(head.val)
//         head = head.next
//     }
//     return valList.join('') === valList.reverse().join('')
// };

function reverse(head){
    let rev = null
    while(head) {
        let temp = head.next
        head.next = rev
        rev = head
        head = temp
    }
    return rev
}

function isPalindrome(head) {
    let rev = head
    let next = head
    let revNum = 0
    let nextNum = 0
    while(next) {
        rev = rev.next
        next = next.next
        if (next) {
            next = next.next
            nextNum++
        }
        revNum++
        nextNum++
    }

    rev = reverse(rev)
    if (nextNum%revNum) {
        revNum--
    }

    while(rev && head && revNum) {
        if (rev.val !== head.val) {
            return false
        }
        rev = rev.next;
        head = head.next;
        --revNum
    }
    return true
}
// @lc code=end

