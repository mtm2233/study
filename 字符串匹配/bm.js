/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-07-04 15:41:40
 * @LastEditTime: 2021-07-08 20:10:55
 * @LastEditors: mTm
 */

// 记录模式串中每个字符最后出现的位置
function getIndexMap(str) {
  const indexMap = new Map();
  const n = str.length;
  for (let i = 0; i < n; ++i) {
    indexMap.set(str[i], i);
  }
  return indexMap;
}

// pattern表示模式串，n表示长度，suffix，prefix数组
function generateGS(pattern, n, suffix, prefix) {
  // pattern[0, i]
  for(let i = 0; i < n - 1; ++i) {
    let j = i;
    // 公共后缀子串长度
    let k = 0;
    // 与pattern[0, n-1]求公共后缀子串
    while(j >= 0 && pattern[j] === pattern[n - 1 - k]) {
      --j;
      ++k;
      //j+1表示公共后缀子串在pattern[0, i]中的起始下标
      suffix[k] = j + 1;
    }
    //如果公共后缀子串也是模式串的前缀子串
    if (j == -1) {
      prefix[k] = true
    }
  }
}

function bm(main, pattern) {
  const m = main.length;
  const n = pattern.length;
  const offset = m - n;
  
  const indexMap = getIndexMap(pattern);
  const suffix = new Array(n).fill(-1)
  const prefix = new Array(n).fill(false)

  generateGS(pattern, n, suffix, prefix)
  
  let i = 0;
  while (i <= offset) {
    let j = n - 1;
    // 模式串从后往前匹配
    for (; j >= 0; --j) {
      if (pattern[j] !== main[j + i]) {
        break;
      }
    }
    if (j < 0) {
      // 匹配成功，返回主串与模式串第一个匹配的字符的位置
      return i;
    }
    // 这里等同于将模式串往后滑动j - indexMap.get(main[j + i])位
    let move = indexMap.get(main[j + i]);
    if (move === undefined) {
        move = -1
    }
    const x = j - move
    let y = 0
    if (j < n - 1) {
      y = moveByGS(j, n, suffix, prefix)
    }
    i = i + Math.max(x, y);
  }
  return -1;
}

// j表示坏字符对应的模式串中的字符下标; n表示模式串长度
function moveByGS(j, n, suffix, prefix) {
  // 好后缀长度
  const k = n - j - 1;
  if (suffix[k] !== -1) {
    return j - suffix[k] + 1
  }
  for(let r = k; r > 0; --r) {
    if(prefix[r]) {
      return n - k
    }
  }
  return n
}

const result = bm("123sadas15415ass2d1", "sadas1541");
console.log(result);
