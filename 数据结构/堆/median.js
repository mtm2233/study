/*
 * @Description: 中位数
 * @Author: mTm
 * @Date: 2021-06-23 22:55:13
 * @LastEditTime: 2021-06-23 23:35:02
 * @LastEditors: mTm
 */
class HeapMin {
  a = [];
  count = 0;
  wrap(i, j) {
    const temp = this.a[i];
    this.a[i] = this.a[j];
    this.a[j] = temp;
  }

  insert(data) {
    ++this.count;
    this.a[this.count] = data;
    if (this.count > this.top && this.a[1] < data) {
      this.removeMin();
      return;
    }
    let n = this.count;
    while (n >> 1 && this.a[n >> 1] > data) {
      this.wrap(n, n >> 1);
      n = n >> 1;
    }
  }

  removeMin() {
    this.a[1] = this.a[this.count];
    --this.count;
    this.heapify(1);
  }

  // 自上往下堆化
  heapify(i) {
    let min = i;
    while (true) {
      if (i * 2 <= this.count && this.a[min] > this.a[i * 2]) {
        min = i * 2;
      }
      if (i * 2 + 1 <= this.count && this.a[min] > this.a[i * 2 + 1]) {
        min = i * 2 + 1;
      }
      if (i === min) {
        break;
      }
      this.wrap(i, min);
      i = min;
    }
  }
}

class HeapMax {
  a = [];
  count = 0;
  wrap(i, j) {
    const temp = this.a[i];
    this.a[i] = this.a[j];
    this.a[j] = temp;
  }
  insert(data) {
    ++this.count;
    this.a[this.count] = data;
    let i = this.count;
    while (i >> 1 && this.a[i >> 1] < data) {
      this.wrap(i, i >> 1);
      i = i >> 1;
    }
  }
  // 删除堆顶元素
  removeMax() {
    if (!this.count) {
      return -1;
    }
    this.wrap(1, this.count);
    --this.count;
    this.heapify(1);
    return this.a[this.count + 1];
  }
  // 自上往下堆化
  heapify(i) {
    while (true) {
      let max = i;
      if (i * 2 <= this.count && this.a[max] < this.a[i * 2]) {
        max = i * 2;
      }
      if (i * 2 + 1 <= this.count && this.a[max] < this.a[i * 2 + 1]) {
        max = i * 2 + 1;
      }
      if (max === i) {
        break;
      }
      this.wrap(i, max);
      i = max;
    }
  }
}

class Median {
  heapMin = new HeapMin();
  heapMax = new HeapMax();
  constructor(n) {
    this.n = n;
  }
  insert(data) {
    if (this.heapMax.count < this.n) {
      // 大顶堆
      this.heapMax.insert(data);
    } else if (this.heapMax.a[1] > data) {
      this.heapMin.insert(this.heapMax.a[1]);
      this.heapMax.removeMax();
    } else {
      // 小顶堆
      this.heapMin.insert(data);
    }
  }

  getMedian() {
    console.log(this.heapMax.a[1]);
    return this.heapMax.a[1];
  }
}

const median = new Median(3);
median.insert(1);
median.insert(20);
median.insert(8);
median.insert(2);
median.insert(5);
median.insert(9);
median.insert(50);

median.getMedian();
