/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-05 16:30:39
 * @LastEditTime: 2021-10-05 16:42:21
 * @LastEditors: mTm
 */
const Link = require('./index')

const link = new Link();
for (let i = 1; i < 7; i++) {
  link.push(i)
}

// 要删除倒数第n个节点，我们就要找到其前面一个节点，
// 也就是倒数第n+1个节点，找到这个节点就可以进行删除 
// 定义两个指针，p和cur，
// cur指针向前走，走了n+1步之后，p指针开始走，
// 当cur指针走到链表结尾的时候，p指针刚好走到倒数第n+1个节点处
function removeNthFromEnd(p, n) {
  if(!p) {
    return null;
  }
  let fast = p.next;
  let slow = p;
  while (n) {
    fast = fast.next;
    n--;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return p.next;
}

console.log(link.linkToString(removeNthFromEnd(link.head, 6)));