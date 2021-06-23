/*
 * @Description: 获取排名前n的元素
 * @Author: mTm
 * @Date: 2021-06-23 22:22:48
 * @LastEditTime: 2021-06-23 22:52:39
 * @LastEditors: mTm
 */
class Heap {
  a = [];
  count = 0;
  constructor(top = 10) {
    this.top = top;
  }

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

  showMaxTop() {
    const A = this.a.slice(1, this.count + 1);
    console.log(A);
    return A;
  }
}

const heap = new Heap(3);
heap.insert(8);
heap.insert(5);
heap.insert(15)
heap.insert(100);
heap.insert(99)
heap.showMaxTop()
