/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-10-23 17:52:31
 * @LastEditTime: 2021-11-24 22:43:28
 * @LastEditors: mTm
 */

const { hashIndex } = require('./utils');

class HashMap {
  factor = 0.75;
  nums = 1;
  minNums = 2;
  length = 0;
  deledLen = 0
  map = [];
  constructor({ factor = 0.75, nums = 10 } = {}) {
    this.factor = factor;
    // 容量必须为2的n次幂（或0）
    while (this.nums < nums) {
      this.nums <<= 2;
    }
    this.minNums = this.nums
    this.map = new Array(this.nums);
  }

  set(key, data) {
    let index = hashIndex(key, this.nums);
    // 线性探测
    while (this.map[index] === 'deled' || (this.map[index] && this.map[index].key !== key)) {
      if (index >= this.nums - 1) {
        index = 0
      } else {
        index++
      }
    }
    if (!data && data !== 0) {
      data = key
    }
    // 保存值
    this.map[index] = {
      data,
      key,
    };
    this.length++;
    this.expand();
  }

  // 扩容
  expand() {
    const isExpand = this.length > this.factor * this.nums;
    if (isExpand) {
      this.nums <<= 1;
      const oldMap = this.map
      this.length = 0;
      this.deledLen = 0;
      this.map = new Array(this.nums)
      // 移动
      oldMap
        .filter(item => Boolean(item) && item !== 'deled')
        .forEach(({ data, key }) => this.set(key, data));
    }
  }
  // 缩容
  reduce() {
    const isReduce = this.length - this.deledLen < this.factor * this.nums / 2;
    if (isReduce && this.minNums < this.nums) {
      this.nums >>= 1;
      const oldMap = this.map
      this.length = 0;
      this.deledLen = 0;
      this.map = new Array(this.nums)

      // 移动
      oldMap
        .filter(item => Boolean(item) && item !== 'deled')
        .forEach(({ data, key }) => this.set(key, data));
    }
  }

  get(key) {
    let index = hashIndex(key, this.nums);
    // 线性探测
    // 找到空的位置，直接停止
    while (this.map[index] === 'deled' || (this.map[index] && this.map[index].key !== key)) {
      if (index >= this.nums - 1) {
        index = 0
      } else {
        index++
      }
    }
    return this.map[index] ? this.map[index].data : null
  }

  remove(key) {
    let index = hashIndex(key, this.nums);
    // 线性探测
    while (this.map[index] === 'deled' || (this.map[index] && this.map[index].key !== key)) {
      if (index >= this.nums - 1) {
        index = 0
      } else {
        index++
      }
    }
    
    if (this.map[index]) {
      const node = this.map[index]
      this.map[index] = 'deled'
      this.deledLen++;
      this.reduce();
      return node.data
    }
    return null
  }
}

module.exports = HashMap;
