/*
 * @Description: 冒泡
 * @Author: mTm
 * @Date: 2021-06-02 09:26:13
 * @LastEditTime: 2021-08-29 23:09:54
 * @LastEditors: mTm
 */
class ArrSort {
  constructor(arr) {
    this.array = arr || [];
    this.len = this.array.length;
  }

  // 交换数据
  wrap(left, right) {
    const temp = this.array[left];
    this.array[left] = this.array[right];
    this.array[right] = temp;
  }

  // 冒泡
  bubbleSort() {
    for (let i = 0; i < this.len; i++) {
      for (let j = 1; j < this.len - i; j++) {
        if (this.array[j - 1] > this.array[j]) {
          this.wrap(j - 1, j);
        }
      }
    }
  }

  // 选择
  selectionSort() {
    for (let i = this.len - 1; i > 0; i--) {
      let max = i;
      for (let j = 0; j < i; j++) {
        if (this.array[max] < this.array[j]) {
          max = j;
        }
      }
      if (max !== i) {
        this.wrap(max, i);
      }
    }
  }

  // 插入
  insertionSort() {
    for (let i = 1; i < this.len; i++) {
      let j = i - 1;
      const temp = this.array[i];
      while (j >= 0 && this.array[j] >= temp) {
        this.array[j + 1] = this.array[j--];
      }
      this.array[j + 1] = temp;
    }
  }

  merger(p, r, q) {
    const left = this.array.slice(p, q + 1);
    const right = this.array.slice(q + 1, r + 1);
    // 添加哨兵
    const max_value = 999999;
    left.push(max_value);
    right.push(max_value);
    let i = 0;
    let j = 0;
    let k = p;
    while (left[i] !== max_value) {
      if (left[i] <= right[j]) {
        this.array[k++] = left[i++];
      } else {
        this.array[k++] = right[j++];
      }
    }
  }

  merge_sort_c(p, r) {
    if (p >= r) return;
    const q = Math.floor((p + r) / 2);
    this.merge_sort_c(p, q);
    this.merge_sort_c(q + 1, r);
    this.merger(p, r, q);
  }

  // 归并
  mergeSort() {
    this.merge_sort_c(0, this.len - 1);
  }

  position(p, r) {
    const q = Math.floor((p + r) / 2);
    if (this.array[p] > this.array[q]) {
      this.wrap(p, q);
    }
    if (this.array[q] > this.array[r]) {
      this.wrap(q, r);
    }
    if (this.array[p] > this.array[q]) {
      this.wrap(p, q);
    }
    this.wrap(q, r - 1);
    return this.array[r - 1];
  }

  quick_sort_c(p, r) {
    if (p >= r) return;
    const center = this.position(p, r);
    let i = p;
    let j = r - 1;
    while (i < j) {
      while (this.array[++i] < center) {}
      while (this.array[--j] > center) {}
      if (i < j) {
        this.wrap(i, j);
      }
    }
    this.wrap(i, r - 1);
    this.quick_sort_c(p, i - 1);
    this.quick_sort_c(i + 1, r);
  }

  // 快排
  quickSort() {
    this.quick_sort_c(0, this.len - 1);
  }

  // 希尔
  shellSort() {
    let gap = Math.floor(this.len / 2);
    while (gap > 0) {
      for (let i = gap; i < this.len; i++) {
          const temp = this.array[i];
          let j = i - gap;
          while(j >= 0 && this.array[j] > temp) {
            this.array[j + gap] = this.array[j]
            j -= gap
          }
          this.array[j + gap] = temp
      }
      gap = Math.floor(gap / 2);
    }
  }
}

const arr = new ArrSort([1, 8, 7, -1, 2, 15, -1, 8, 0, 0]);
arr.shellSort();
console.log(arr.array);
