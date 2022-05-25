/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-04 19:45:59
 * @LastEditTime: 2021-10-04 20:44:49
 * @LastEditors: mTm
 */
const Link = require('./index')

const link = new Link();
for (let i = 1; i < 7; i++) {
  link.push(i)
}

console.log(link.linkToString());

// 链表的反转
function reverse(link) {
  if(!link.count) {
    return false
  }
  let head = link.head.next;
  // 反转好的链表
  let rev = null;
  // 剩余的链表
  let temp = null;
  while(head) {
    temp = head.next;
    head.next = rev;
    rev = head;
    head = temp;
  }
  return rev
}

console.log(link.linkToString(reverse(link)));