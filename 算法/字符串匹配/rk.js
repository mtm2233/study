/*
 * @Description: Rabin-Karp(hash)
 * @Author: mTm
 * @Date: 2021-07-03 22:54:23
 * @LastEditTime: 2021-07-04 00:12:08
 * @LastEditors: mTm
 */

// 初始化 binaryMap
// 进制 1,10,100,1000
// 进制 1,7,49
function getBinaryMap(binary, n) {
  const binaryMap = new Map();
  let num = 1;
  for (let i = n - 1; i >= 0; --i) {
    binaryMap.set(i, num);
    num *= binary;
  }
  return binaryMap;
}

/* 
    字符串转数字
    a -> 1
    b -> 2
    c -> 3
*/
function getMap(str, n) {
  const hashMap = new Map();
  const m = str.length;
  let hash = 0;
  for (let i = 0; i < m; ++i) {
    if (!hashMap.get(str[i])) {
      hashMap.set(str[i], ++hash);
    }
  }
  const binaryMap = getBinaryMap(hash, n);
  return [hashMap, binaryMap];
}

// 计算hashcode
/* 
    str: 字符串
    n: 长度
    hashMap：字符串转数字
    binaryMap：进制
*/
function hash(str, n, hashMap, binaryMap) {
  //   console.log(str, n, hashMap, binaryMap);
  let hashCode = 0;
  for (let i = 0; i < n; ++i) {
    hashCode += hashMap.get(str[i]) * binaryMap.get(i);
  }
  return hashCode;
}

function rk(main, pattern) {
  const m = main.length;
  const n = pattern.length;
  // 偏移
  const offset = m - n;

  const [hashMap, binaryMap] = getMap(main, n);
  // 模式串hash
  const patternCode = hash(pattern, n, hashMap, binaryMap);
  // 主串初次hash
  let hashCode = hash(main, n, hashMap, binaryMap);

  // 进制
  const binary = binaryMap.get(1);
  for (let i = 0; i <= offset; ++i) {
    if (hashCode === patternCode) {
      return i;
    }
    // 上一个字符
    const code = hashMap.get(main[i]) * binaryMap.get(0);
    /* 
        1 2 3 4 5
        1 2 3
          2 3 4
            3 4 5 
        关系 234 = (123 - (1 * 100)) * 10 + 4 
        关系 345 = (345 - (2 * 100)) * 10 + 5 
    */
    hashCode = binary * (hashCode - code) + hashMap.get(main[i + n]);
  }

  return false;
}

const result = rk("abc1245", "124");
console.log(result);
