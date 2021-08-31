/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-08-31 23:21:53
 * @LastEditTime: 2021-08-31 23:38:59
 * @LastEditors: mTm
 */
function maxLen(arr) {
    const len = arr.length;
    if (!len || len === 1) {
        return len;
    }
    const max = new Array(len).fill(1);
    for(let i = 0; i < len; ++i) {
        for(let j = 0; j < i; ++j) {
            if (arr[i] > arr[j]) {
                max[i] = Math.max(max[j] + 1, max[i])
            }
        }
    }
    return Math.max(...max)
}

maxLen([10, 9, 2, 5, 3, 7, 101, 18])