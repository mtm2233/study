/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-08 13:56:32
 * @LastEditTime: 2022-01-08 19:57:24
 * @LastEditors: mTm
 */

const { LinkList } = require('../1、数组和链表/LinkedList');

function hashIndex(key, nums) {
  key = `${key}`;
  let count = 0;
  for (let i = 0; i < key.length; i++) {
    count += key[i].charCodeAt() * (i + 1);
  }
  // 位与也是可以用来取余的，但是有一个条件：除数必须是2的n次幂才行。举例子来说明：
  // 9%8=1
  // 1001 &（1000 - 1）
  // =1001 & 0111
  // =1 // 1001是9的二进制表示，1000是8的二进制表示
  return count & (nums - 1);
}

class MapLinked {
  constructor(n = 16) {
    this.count = 2;
    while (this.count < n) {
      this.count *= 2;
    }
    this.length = 0;
    this.map = new Array(this.count);
    // 正在扩容/缩容
    this.isCountChange = false;
  }

  // 扩容/缩容
  countChange() {
    if (this.isCountChange) {
      return;
    }
    this.isCountChange = true;
    // 扩容
    if (this.length > this.count * 0.75 || this.length < this.count * 0.25) {
      if (this.length > this.count * 0.75) {
        this.count = this.count << 1;
      } else {
        this.count = this.count >> 1;
      }
      const map = this.map;
      this.map = new Array(this.count);
      this.length = 0;
      for (let i = 0; i < map.length; i++) {
        let p = map[i] ? map[i].head.next : null;
        while (p) {
          this.set(p.data.key, p.data.data);
          p = p.next;
        }
      }
    }
    this.isCountChange = false;
  }

  set(key, data) {
    const index = hashIndex(key, this.count);
    if (!this.map[index]) {
      this.map[index] = new LinkList();
    }
    this.map[index].set(key, { key, data });
    this.length++;
    this.countChange();
  }

  get(key) {
    const index = hashIndex(key, this.count);
    if (!this.map[index]) {
      return null;
    }
    const res = this.map[index].get(key);
    if (res && res.key === key) {
      return res.data;
    }
    return null;
  }

  remove(key) {
    const index = hashIndex(key, this.count);
    if (!this.map[index]) {
      return null;
    }
    const res = this.map[index].remove(key);
    if (res) {
      this.length--;
      this.countChange();
      return res.data.data;
    }
    return null;
  }

  clear() {
    this.length = 0;
    const map = new Data(n);
  }
}

module.exports = MapLinked;
