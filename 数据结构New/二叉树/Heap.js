/*
 * @Description: 堆（大顶堆）
 * @Author: mTm
 * @Date: 2021-11-12 22:28:49
 * @LastEditTime: 2021-11-13 17:58:44
 * @LastEditors: mTm
 */
// class Heap {
//   data = [];
//   length = 0;
//   constructor() {}

//   wrap(index1, index2) {
//     const temp = this.data[index1];
//     this.data[index1] = this.data[index2];
//     this.data[index2] = temp;
//   }

//   insert(num) {
//     this.data[++this.length] = num;
//     let k = this.length;
//     while (k / 2 >= 1 && num > this.data[k >> 1]) {
//       this.wrap(k, k >> 1);
//       k = k >> 1;
//     }
//   }

//   removeTop() {
//     if (this.length === 0) {
//       return -1
//     }
//     this.wrap(1, this.length--);
//     let k = 1;
//     // ⾃上往下堆化
//     while (true) {
//       let maxPos = k;
//       if (k * 2 <= this.length && this.data[maxPos] < this.data[k * 2]) {
//         maxPos = k * 2
//       }
//       if (k * 2 + 1 <= this.length && this.data[maxPos] < this.data[k * 2 + 1]) {
//         maxPos = k * 2 + 1
//       }
//       if (maxPos === k) {
//         break
//       } else {
//         this.wrap(k, maxPos)
//         k = maxPos
//       }
//     }
//     return this.data[this.length + 1];
//   }
// }

class Heap {
  constructor({ data = [], n = Number.MAX_SAFE_INTEGER, type = 'max' } = {}) {
    this.data = data;
    this.length = data.length;
    this.maxN = n;
    this.type = type;

    data.unshift('');
  }

  // 大顶堆、小顶堆
  // @key1 需要堆化的值
  heapType(key1, key2) {
    return this.type === 'max' ? this.data[key1] > this.data[key2] : this.data[key1] < this.data[key2];
  }

  wrap(index1, index2) {
    const temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }

  insert(num) {
    if (this.length >= this.maxN) {
      return -1
    }
    this.data[++this.length] = num;
    let k = this.length;
    while (k >= 2 && this.heapType(k, k >> 1)) {
      this.wrap(k, k >> 1);
      k = k >> 1;
    }
  }

  // 从上往下堆化
  heapify(i, n) {
    while (true) {
      let pos = i;
      if (i * 2 <= n && !this.heapType(pos, i * 2)) {
        pos = i * 2
      }
      if (i * 2 + 1 <= n && !this.heapType(pos, i * 2 + 1)) {
        pos = i * 2 + 1
      }

      if (pos === i) {
        return;
      } else {
        this.wrap(i, pos)
        i = pos
      }
    }
  }

  removeTop() {
    if (!this.length) {
      return -1;
    }
    this.wrap(1, this.length--);
    this.heapify(1, this.length)
    return this.data[this.length + 1]
  }
}

module.exports = Heap;
