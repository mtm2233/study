/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-01-05 10:47:47
 * @LastEditTime: 2022-01-05 21:50:00
 * @LastEditors: mTm
 */
function mergeLinkedList(linked1, linked2, linked3) {
  let p1 = linked1.head.next
  let p2 = linked2.head.next

  // 改变要合并的链表
  let p = linked3.head;
  while (p1 && p2) {
    if (p1.key <= p2.key) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    p = p.next
  }

  if (p1) {
    p.next = p1
  } else {
    p.next = p2
  }

  // 不改变要合并的链表
  // while (p1 && p2) {
  //   if (p1.key <= p2.key) {
  //     linked3.add(p1.key, p1.data)
  //     p1 = p1.next
  //   } else {
  //     linked3.add(p2.key, p2.data)
  //     p2 = p2.next
  //   }
  // }

  // while (p1) {
  //   linked3.add(p1.key, p1.data)
  //   p1 = p1.next
  // }

  // while (p2) {
  //   linked3.add(p2.key, p2.data)
  //   p2 = p2.next
  // }

  return linked3
}

module.exports = mergeLinkedList