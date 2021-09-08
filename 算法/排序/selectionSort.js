/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-27 13:39:09
 * @LastEditTime: 2021-05-27 14:00:48
 * @LastEditors: mTm
 */
let array = [1, 6, 4, 3, 1, 9, 15, 5, 24, -1];

function wrap(a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function selectionSort() {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let mix = i;
        for (let j = i + 1; j < len; j++) {
            if (array[mix] > array[j]) {
                mix = j
            }
        }
        if (mix !== i) {
            wrap(mix, i)
        }
    }
}

selectionSort()
console.log(array);