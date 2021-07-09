/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-07-04 15:41:40
 * @LastEditTime: 2021-07-09 11:49:28
 * @LastEditors: mTm
 */

// 记录模式串中每个字符最后出现的位置
// 构建坏字符哈希表
function generateBC(str) {
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
  // 构建坏字符哈希表
  const indexMap = generateBC(pattern);
  // 构建好后缀哈希表
  const suffix = new Array(n).fill(-1)
  const prefix = new Array(n).fill(false)
  generateGS(pattern, n, suffix, prefix)
  
  let i = 0;
  while (i <= offset) {
    let j = n - 1;
    // 模式串从后往前匹配
    for (; j >= 0; --j) {
      if (pattern[j] !== main[j + i]) { // 坏字符对应模式串中的下标是j
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
    // 如果有好后缀的话
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
  // 查找与好后缀相匹配的模式串的前缀
  for(let r = k - 1; r > 0; --r) {
    if(prefix[r]) {
      return n - k
    }
  }
  return n
}

const result = bm("abcacabcbcbacabc", "cbacabc");
console.log(result);
