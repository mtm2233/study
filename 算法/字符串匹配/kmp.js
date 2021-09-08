/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-07-13 17:23:09
 * @LastEditTime: 2021-07-13 23:42:16
 * @LastEditors: mTm
 */
// pattern表示模式串，n表示模式串的长度
function getNexts(pattern, n) {
    // next[0] 必然是-1
    const next = new Array(n)
    next[0] = -1
    let k = -1
    
    // 因此从next[1]开始求
    for(let i = 1; i < n; ++i) {
        while(k !== -1 && pattern[k + 1] !== pattern[i]) {
            k = next[k]
        }
        // 如果pattern[k + 1] === pattern[i]
        // 则可以向右扩展一位
        if (pattern[k + 1] === pattern[i]) {
            ++k
        }
        next[i] = k
    }
    return next
}

function kmp(main, pattern) {
    const m = main.length
    const n = pattern.length
    /* 
        模式串前缀  最长可匹配前缀字串结尾字符下标
        a -1
        ab -1
        aba 0
        abab 1
        ababc -1
    */
    const next = getNexts(pattern, n)
    // 好前缀的长度
    let j = 0
    for (let i = 0; i < m; ++i) {
        // 找到坏字符，修改好前缀的长度
        while(j > 0 && main[i] !== pattern[j]) {
            j = next[j - 1] + 1
        }
        // 好前缀
        if (main[i] === pattern[j]) {
            ++j;
        }
        // 好前缀的长度，等于模式串的长度，
        // 说明匹配成功
        if (j === n) {
            return i - n + 1
        }
    }

    return -1
}

const result = kmp('aaaaaaaaababacd', 'ababacd')
console.log(result);