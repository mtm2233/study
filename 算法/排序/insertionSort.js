/*
 * @Description: 插入
 * @Author: mTm
 * @Date: 2021-05-27 13:39:19
 * @LastEditTime: 2021-08-29 23:10:05
 * @LastEditors: mTm
 */
let array = [6, 1, 4, 3, 1, 9, 15, 5, 24, -1];

function insertionSort() {
    const len = array.length
    for (let i = 1; i < len; i++) {
        let j = i - 1
        const temp = array[i]
        while(j >= 0 && array[j] > temp) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = temp
    }
}

insertionSort()
console.log(array);