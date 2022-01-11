/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-08 23:20:55
 * @LastEditTime: 2022-01-11 21:41:51
 * @LastEditors: mTm
 */
const Heap = require('./Heap');

function mergeArrByHeap(data) {
  const heap = new Heap({
    isWrapHandler: (item1, item2) => item1.val > item2.val,
  });
  const res = [];
  data.forEach((arr, index) =>
    heap.insert({
      index,
      val: arr.shift(),
    })
  );
  while (heap.length) {
    const { val, index } = heap.remove();
    res.push(val);
    if (data[index] && data[index].length) {
      heap.insert({
        index,
        val: data[index].shift(),
      });
    }
  }
  return res;
}

module.exports = mergeArrByHeap;
