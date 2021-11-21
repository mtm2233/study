/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-20 16:07:13
 * @LastEditTime: 2021-11-21 13:22:36
 * @LastEditors: mTm
 */
// 坏字符哈希表
function initBCMap(pattern, len) {
  // 初始化
  let maxNum = 0
  for (let i = 0; i < len; i++) {
    const code = pattern[i].charCodeAt()
    if (maxNum < code) {
      maxNum = code
    }
  }
  const bm = new Array(maxNum).fill(-1)

  // 
  for (let i = 0; i < len; i++) {
    const code = pattern[i].charCodeAt()
    bm[code] = i
  }

  return bm
}


function initSuffix(pattern, len) {
  const suffix = new Array(len).fill(-1)
  const prefix = new Array(len).fill(false)
  // [0, pl - 1] 的公共后缀子串
  for (let i = 0; i < len - 1; i++) {
    let j = i;
    let k = 0;
    // 公共后缀⼦串⻓度
    while (j >= 0 && pattern[j] === pattern[len - 1 - k]) {
      k++;
      suffix[k] = j;
      j--
    }
    // 如果公共后缀⼦串也是模式串的前缀⼦串
    if(j < 0) {
      prefix[k] = true
    }
  }

  return {
    suffix,
    prefix
  }
}

// 好后缀
// j表⽰坏字符对应的模式串中的字符下标; pl表⽰模式串⻓度
function bmGS(j, pl, suffix, prefix) {
  const len = pl - 1 - j;
  if (suffix[len] !== -1) {
    return j - suffix[len] + 1
  }
  for (let i = j + 2; i <= pl - 1; i++) {
    if(prefix[pl - i]) {
      return i
    }
  }
  return pl
}

function bm(main, pattern) {
  const ml = main.length;
  const pl = pattern.length;
  const bcMap = initBCMap(pattern, pl);
  const { suffix, prefix } = initSuffix(pattern, pl)

  // i表⽰主串与模式串对⻬的第⼀个字符
  let i = 0;
  while (i <= ml - pl) {
    // 从后往前匹配
    let j = pl - 1;
    for (; j >= 0; j--) {
      if (main[i + j] !== pattern[j]) {
        break;
      }
    }

    // 匹配成功
    if (j < 0) {
      return i
    }

    const code = main[i + j].charCodeAt()
    const x = j - bcMap[code]
    let y = 0
    // 有好后缀
    if (j < pl - 1) {
      y = bmGS(j, pl, suffix, prefix)
    }
    i += Math.max(x, y)
  }

  return -1
}

module.exports = bm