/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-13 18:37:47
 * @LastEditTime: 2021-11-13 20:07:26
 * @LastEditors: mTm
 */
const Heap = require('../../数据结构New/二叉树/Heap')

class TimerQueue {
  timer = null
  constructor (n) {
    this.data = new Heap({
      n,
      heapTypeHandler(item1, item2) {
        return item1.timeout < item2.timeout
      }
    })
  }

  add(fun, timeout) {
    this.data.insert({
      fun,
      timeout,
    })
  }
  
  start(preTime = 0) {
    const val = this.data.removeTop()
    if (val === -1) {
      return -1
    }
    const {fun, timeout} = val
    this.timer = setTimeout(() => {
      fun()
      this.start(timeout)
    }, timeout - preTime);
  }

  stop() {
    clearTimeout(this.timer)
  }

  get length() {
    return this.data.length
  }
}

const timerQueue = new TimerQueue(5)
timerQueue.add(() => {
  console.log('501');
}, 501)
timerQueue.add(() => {
  console.log('500');
}, 500)
timerQueue.add(() => {
  console.log('2000');
}, 2000)

timerQueue.start()
setTimeout(() => {
  timerQueue.stop()
}, 1500);