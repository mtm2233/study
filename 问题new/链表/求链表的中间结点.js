/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-05 16:43:47
 * @LastEditTime: 2021-10-05 16:49:47
 * @LastEditors: mTm
 */
const Link = require('./index')

const link = new Link();
for (let i = 1; i < 6; i++) {
  link.push(i)
}

function linkCenterNode(p) {
  if (!p) {
    return null
  }
  let fast = p;
  let slow = p;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

console.log(linkCenterNode(link.head.next));