/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-04 19:45:59
 * @LastEditTime: 2021-10-04 20:41:09
 * @LastEditors: mTm
 */
const Link = require('./index')

const link = new Link();
for (let i = 1; i < 7; i++) {
  link.push(i)
}

console.log(link.linkToString());

function reverse(link) {
  if(!link.count) {
    return false
  }
  let head = link.head.next;
  let rev = null;
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