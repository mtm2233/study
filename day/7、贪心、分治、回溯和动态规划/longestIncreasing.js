/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-14 14:08:14
 * @LastEditTime: 2022-01-18 23:05:06
 * @LastEditors: mTm
 */
function longestIncreasing(a) {
  const n = a.length;
  // 创建⼀个数组, 索引 i 对应考察元素的下标, 存储 arr[0...i] 的最⻓上升⼦序列⼤⼩
  const dist = new Array(n);
  dist[0] = 1;
  for (let i = 0; i < n; i++) {
    let max = 1;
    for (let j = 0; j < i; j++) {
      if (a[i] > a[j] && dist[j] >= max) {
        max = dist[j] + 1;
      }
      dist[i] = max;
    }
  }
  let maxDist = 0;
  for (let i = 0; i < n; i++) {
    if (maxDist < dist[i]) {
      maxDist = dist[i];
    }
  }

  return maxDist;
}

module.exports = longestIncreasing;
