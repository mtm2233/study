/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-27 13:39:19
 * @LastEditTime: 2021-05-27 14:10:39
 * @LastEditors: mTm
 */
let array = [1, 6, 4, 3, 1, 9, 15, 5, 24, -1];

function insertionSort() {
    const len = array.length
    for (let i = 1; i < len; i++) {
        let j = i - 1
        let current = array[i]
        while (j >= 0 && current < array[j]) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = current
    }
}

insertionSort()
console.log(array);