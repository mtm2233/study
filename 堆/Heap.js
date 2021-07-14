/*
 * @Description: 堆
 * @Author: mTm
 * @Date: 2021-06-23 13:35:33
 * @LastEditTime: 2021-06-23 16:20:09
 * @LastEditors: mTm
 */
class Heap {
    a = []
    count = 0
    constructor(a) {
        this.a = [undefined, ...a]
        this.count = this.a.length - 1
    }
    wrap(i, j) {
        const temp = this.a[i]
        this.a[i] = this.a[j]
        this.a[j] = temp
    }
    insert(data) {
        ++this.count
        this.a[this.count] = data
        let i = this.count
        while(i >> 1 && this.a[i >> 1] < data) {
            this.wrap(i, i >> 1)
            i = i >> 1
        }
    }

    // 删除堆顶元素
    removeMax() {
        if (!this.count) {
            return -1
        }
        this.wrap(1, this.count)
        --this.count
        this.heapify(1)
        return this.a[this.count + 1]
    }
    // 自上往下堆化
    heapify(i) {
        while(true) {
            let max = i
            if (i * 2 <= this.count && this.a[max] < this.a[i * 2]) {
                max = i * 2
            }
            if (i * 2 + 1 <= this.count && this.a[max] < this.a[i * 2 + 1]) {
                max = i * 2 + 1
            }
            if (max === i) {
                break
            }
            this.wrap(i, max)
            i = max
        }
    }

    // 将a进行堆化
    buildHeap() {
        let i = this.count >> 1;
        for(; i >= 1; --i) {
            this.heapify(i)
        }
    }

    // 堆排序
    heapSort() {
        while(this.count) {
            this.removeMax(1)
        }
    }
}

const heap = new Heap([5,15,2,3,6,45,18])
// heap.insert(5)
// heap.insert(15)
// heap.insert(35)
// heap.insert(3)
// heap.insert(10)
// heap.removeMax()
heap.buildHeap()
heap.heapSort()
console.log(heap.a);