/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-10 10:24:14
 * @LastEditTime: 2021-06-17 17:24:50
 * @LastEditors: mTm
 */

// 最多索引层数
const MAX_LEVEL = 4;
/* 
晋升概率
每两个结点抽出一个结点作为上一级索引的结点。如果我们想节省空间利用率
可以适当的降低代码中的 SKIPLIST_P，从而减少索引元素个数
*/
const SKIPLIST_P = 1 / 2;

// 节点
class Node {
  refer = new Array(MAX_LEVEL);
  maxLevel = 1;
  constructor(key, data = -1) {
    this.key = key;
    this.data = data;
  }
}

class SkipList {
  levelCount = 0;
  constructor() {
    this.head = new Node();
  }
  // 要插入的索引层数
  randomLevel() {
    let level = 1;
    while (Math.random() < SKIPLIST_P && level < MAX_LEVEL) {
      level++;
    }
    return level;
  }
  // 插入
  insert(key, data) {
    const newNode = new Node(key, data);
    const level = this.randomLevel();
    newNode.maxLevel = level;
    const update = new Array(level).fill(new Node());
    let p = this.head;
    // 要插入节点的前驱节点
    for (let i = level - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].key < key) {
        p = p.refer[i];
      }
      update[i] = p;
    }
    for (let i = 0; i < level; i++) {
      newNode.refer[i] = update[i].refer[i];
      update[i].refer[i] = newNode;
    }

    if (this.levelCount < level) {
      this.levelCount = level;
    }
  }

  // 查找
  search(key) {
    let p = this.head;
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].key < key) {
        p = p.refer[i];
      }
      if (p.refer[i] !== undefined && p.refer[i].key === key) {
        return p.refer[i].data;
      }
    }
    return -1;
  }
  
  // 删除
  delete(key) {
    const update = new Array(this.levelCount).fill(new Node());
    let p = this.head;
    let _node;
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].key < key) {
        p = p.refer[i];
      }
      update[i] = p
    }

    if(p.refer[0] !== undefined && p.refer[0].key === key) {
      _node = p.refer[0]
      for(let i = this.levelCount - 1; i >= 0; i--) {
        while(update[i].refer[i] !== undefined && update[i].refer[i].key === key) {
          update[i].refer[i] = update[i].refer[i].refer[i]
        }
      }
      this.levelCount = this.head.refer.filter(Boolean).length
      return _node
    }
    this.levelCount = this.head.refer.filter(Boolean).length
    return null
  }

  showAll() {
    let p = this.head;
    while (p.refer[0]) {
      console.log(p.refer[0].data);
      p = p.refer[0];
    }
  }

  // 线性查找
  linkedSearch(key) {
    let p = this.head;
    while (p.refer[0] !== undefined && p.refer[0].key < key) {
      p = p.refer[0];
    }
    if (p.refer[0].key === key) {
      return p.refer[0].data;
    }
    return -1;
  }
}

// test
// time()
// const skipList = new SkipList();
// for (let i = 20000000; i > 0; i--) {
//   skipList.insert(i, { name: i });
// }
// time()

// // skipList.showAll()
// console.log(skipList.search(19000000));
// // console.log(skipList.linkedSearch(19000000));
// // console.log(skipList.head);
// // console.log(skipList.randomLevel());
// time()


const skipList = new SkipList();
skipList.insert(5, 5)
skipList.insert(3, 3)
skipList.delete(5)
console.log(skipList);














function time() {
  // const time = new Date(Number(new Date()) + 8 * 3600 * 1000)
  //   .toISOString()
  //   .replace(/T/g, " ")
  //   .replace(/\.[\d]{3}Z/, "");
  // console.log(time);
  // return time;
  console.log(new Date().getSeconds());
}
