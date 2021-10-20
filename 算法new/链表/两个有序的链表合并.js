/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-05 16:05:31
 * @LastEditTime: 2021-10-05 16:26:46
 * @LastEditors: mTm
 */
const Link = require('./index')

const link1 = new Link()
const link2 = new Link()

new Array(1,2,4,5).forEach(v => link1.push(v));
new Array(2,3,5).forEach(v => link2.push(v));

function mergeLink(p1, p2) {
  if (!p1) {
    return p2
  } else if (!p2) {
    return p1
  }
  let mer = {data: null, next: null};
  let temp = mer
  while (p1 && p2) {
    let p = null
    if (p1.data <= p2.data) {
      p = p1;
      p1 = p1.next;
    } else {
      p = p2;
      p2 = p2.next;
    }
    p.next = null;
    temp.next = p;
    temp = temp.next
  }
  if (p1) {
    temp.next = p1;
  } else if (p2) {
    temp.next = p2;
  }

  return mer.next;
}

// const mer = mergeLink(link1.head.next, link2.head.next)
// console.log(link1.linkToString(mer));

// 递归
function mergeLink_c(p1, p2) {
  if (!p1) {
    return p2;
  }
  if (!p2) {
    return p1;
  }

  if (p1.data <= p2.data) {
    p1.next = mergeLink_c(p1.next, p2);
    return p1;
  } else {
    p2.next = mergeLink_c(p1, p2.next);
    return p2;
  }
}

const merc = mergeLink_c(link1.head.next, link2.head.next)
console.log(link1.linkToString(merc));