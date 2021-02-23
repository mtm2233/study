/*
 * @Description: 封装发生ajax请求
 * @Author: mTm
 * @Date: 2021-02-23 21:28:33
 * @LastEditTime: 2021-02-23 22:12:33
 * @LastEditors: mTm
 */
import axios from 'axios';
import { ref } from 'vue'
export default function <T>(url: string) {
    const loading = ref(true);
    const data = ref<T | null>(null);
    const errorMag = ref('');
    axios.get(url).then(res => {
        console.log(res);
        data.value = res.data;
    }).catch(err => {
        errorMag.value = err.message || '未知错误';
    }).finally(() => {
        loading.value = false;
    })
    return {
        loading,
        data,
        errorMag,
    }
}