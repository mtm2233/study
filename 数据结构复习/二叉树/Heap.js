/*
 * @Description: 堆（大顶堆）
 * @Author: mTm
 * @Date: 2021-11-12 22:28:49
 * @LastEditTime: 2021-11-13 20:48:51
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
  constructor({ data = [], n = Number.MAX_SAFE_INTEGER, type = 'max', heapTypeHandler } = {}) {
    if (data.length > n) {
      data.splice(n)
    }
    this.data = data;
    this.length = data.length;
    this.maxN = n;
    this.type = type;
    this.heapTypeHandler = heapTypeHandler;
    data.unshift('');
    if (this.length) {
      this.buildHeap()
    }
  }

  // 构建堆
  buildHeap() {
    for (let n = (this.length << 1) - 1; n > 0; n--) {
      this.heapify(n, this.length)
    }
  }

  // 大顶堆、小顶堆
  // @key1 需要堆化的值
  heapType(key1, key2) {
    if (this.heapTypeHandler) {
      return this.heapTypeHandler(this.data[key1], this.data[key2])
    }
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
      return null;
    }
    this.wrap(1, this.length--);
    this.heapify(1, this.length)
    return this.data[this.length + 1]
  }

  showTop() {
    if (!this.length) {
      return null;
    } else {
      return this.data[1];
    }
  }

  // 排序
  sort() {
    // 保留排序前的堆
    const data = [...this.data]
    for (let i = this.length; i > 1;) {
      this.wrap(1, i)
      this.heapify(1, --i)
    }
    let sortData = this.data
    this.data = data
    // 小顶堆 -> 从大到小
    // 大顶堆 -> 从小到大
    // 翻转，去除''
    sortData.reverse()
    sortData.pop()
    return sortData;
  }
}

module.exports = Heap;
