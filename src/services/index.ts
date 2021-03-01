/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-01 15:16:54
 * @LastEditTime: 2021-03-01 15:59:09
 * @LastEditors: mTm
 */
import axios from 'axios';
import qs from 'qs';

export function getData() {
    return axios({
        url: '/api/calendar/year',
        method: 'post',
        data: qs.stringify({
            year: 2020
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlendcoded',
        }
    }).then(res => {
        return res;
    })
}