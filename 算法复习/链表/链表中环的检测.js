/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-04 20:45:39
 * @LastEditTime: 2021-10-04 21:09:59
 * @LastEditors: mTm
 */
const Link = require('./index')

const link = new Link();
for (let i = 1; i < 7; i++) {
  link.push(i)
}

const head = link.head.next;
// 产生环
head.next.next = head;

// 检查环
// ** 慢指针一次走一步，快指针一次走两步，总有一次，快指针会和慢指针相遇
function detectLoop (head) {
  if (!head) {
    return false
  }
  // 快
  let fast = head.next;
  // 慢
  let slow = head;

  while (fast !== slow && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return fast.next ? true : false
}

const hasLoop = detectLoop(head)
console.log(hasLoop);



// 为什么一定会相遇呢？

// 这个问题你可以用数学归纳法来思考。
// 首先，由于链表是个环，所以相遇的过程可以看作是快指针从后边追赶慢指针的过程。
// 那么做如下思考：
// 1：快指针与慢指针之间差一步。此时继续往后走，慢指针前进一步，快指针前进两步，两者相遇。
// 2：快指针与慢指针之间差两步。此时继续往后走，慢指针前进一步，快指针前进两步，两者之间相差一步，转化为第一种情况。
// 3：快指针与慢指针之间差N步。此时继续往后走，慢指针前进一步，快指针前进两步，两者之间相差(N+1-2)-> N-1步。因此，此题得证。所以快指针必然与慢指针相遇。又因为快指针速度是慢指针的两倍，所以相遇时必然只绕了一圈。

// 作者：sml_2
// 链接：https://www.jianshu.com/p/e2835d349da2
// 来源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。