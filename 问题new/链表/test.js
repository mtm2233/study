/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-05 15:57:30
 * @LastEditTime: 2021-10-05 16:03:50
 * @LastEditors: mTm
 */
const Link = require('./index')

const link = new Link()

for (let i = 1; i < 7; i++) {
  link.push(i)
}


function reverse(head) {
  let rev = null;
  let temp = null;
  while (head) {
    temp = head.next;
    head.next = rev;
    rev = head;
    head = temp;
  }

  return rev
}

console.log(link.linkToString(reverse(link.head.next)));