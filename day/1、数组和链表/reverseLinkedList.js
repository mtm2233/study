/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-01-05 10:44:22
 * @LastEditTime: 2022-01-05 21:41:24
 * @LastEditors: mTm
 */
// 1 2 3

// temp: 2 3
// rev: 1
// head: 2 3

// temp: 3
// rev: 2 1
// head: 3

function reverseLinkedList(linked) {
  let head = linked.head.next;
  // 反转好的链表
  let rev = null;
  // 剩余的链表
  let temp = null;
  while (head) {
    temp = head.next;
    head.next = rev;
    rev = head;
    head = temp;
  }
  linked.head.next = rev
  return linked
}
module.exports = reverseLinkedList