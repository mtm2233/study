/*
 * @Description: 基数排序
 * @Author: mTm
 * @Date: 2021-06-03 11:52:43
 * @LastEditTime: 2021-06-03 17:53:02
 * @LastEditors: mTm
 */
function radixSort(arr) {
    if (!(Array.isArray(arr) && arr.length)) {
        return []
    }
    let i = 0
    // 0 ~ 9 用于 计数排序
    let count = 10;
    const len = arr.length
    let a = arr.map(String)
    
    // 获取最长的长度
    let maxLen = a[0].length
    while(++i < len) {
        const temp = a[i].length
        if ( temp > len) {
            maxLen = temp
        }
    }
    // 前面补0
    a = a.map(v => `${v}`.padStart(maxLen, '0'))

    let baseR = []
    for(let i = 0; i < count; i++) {
        baseR[i] = 0
    }
    
    // maxLen = 1
    while(--maxLen >= 0) {
        let r = [...baseR]
        let tempA = []
        for(let i = 0; i < len; i++) {
            r[a[i][maxLen]]++
        }
        for(let i = 1; i < count; i++) {
            r[i] += r[i - 1]
        }
        for(let i = len - 1; i >= 0; i--) {
            tempA[--r[a[i][maxLen]]] = a[i]
        }
        a = tempA
    }
    a = a.map(Number)
    arr.splice(0, len, ...a)
    return a
}

let array = [152620352515,15121541812185,152133548121811,121213548416318,1213548184163185];
radixSort(array)
console.log(array);