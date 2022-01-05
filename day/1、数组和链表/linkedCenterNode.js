/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-01-05 10:48:51
 * @LastEditTime: 2022-01-05 22:00:42
 * @LastEditors: mTm
 */
function linkedCenterNode(linked) {
  
  let q = linked.head.next
  let p = q
  while (p) {
    p = p.next;
    // 1 2 3 4
    // if (p && p.next)  2
    // if (p) 3
    if (p && p.next) {
      p = p.next
    } else {
      break
    }
    q = q.next
  }

  return q ? q.data : null
}

module.exports = linkedCenterNode