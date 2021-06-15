/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-10 10:24:14
 * @LastEditTime: 2021-06-15 11:31:35
 * @LastEditors: mTm
 */

// 最多索引层数
const MAX_LEVEL = 3
/* 
晋升概率
每两个结点抽出一个结点作为上一级索引的结点。如果我们想节省空间利用率
可以适当的降低代码中的 SKIPLIST_P，从而减少索引元素个数
*/
const SKIPLIST_P = 1/2

// 节点
class Node {
  refer = new Array(MAX_LEVEL);
  constructor(data) {
    this.data = data;
  }
}

class SkipList {
  constructor() {
    this.head = new Node();
  }
  // 要插入的索引层数
  randomLevel() {
    let level = 1
    while(Math.random() < SKIPLIST_P && level < MAX_LEVEL) {
      level++
    }
    return level
  }
  // 插入
  insert(data) {
    // let level = 3
    // const node = new Node(data)
    // let temp = this.head;
    // while(level-- > 1) {
    //   temp.down = node
    //   temp = temp.down
    // }
  }
  // 删除
  delete() {}
  // 查找
  search() {}
}

const skipList = new SkipList();
skipList.insert(5)
console.log(skipList.head);
// console.log(skipList.randomLevel());
