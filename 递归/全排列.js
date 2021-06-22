/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-06-22 11:46:47
 * @LastEditTime: 2021-06-22 14:14:08
 * @LastEditors: mTm
 */
function printPermutations(data, n, k) {
    console.log(data, n, k);
    if (k === 1) {
        let nums = ""
        for(let i = 0; i < n; ++i) {
            nums += data[i] + " "
        }
        console.log(nums);
    }

    for(let i = 0; i < k; ++i) {
        // console.log(data, n, k);
        let temp = data[i]
        data[i] = data[k - 1]
        data[k - 1] = temp

        printPermutations(data, n, k - 1)

        temp = data[i]
        data[i] = data[k - 1]
        data[k - 1] = temp
    }
}


printPermutations([1,2,3],3,3)