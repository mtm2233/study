/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-25 16:47:44
 * @LastEditTime: 2021-02-25 17:04:29
 * @LastEditors: mTm
 */
export function isRef(obj: any) {
    return obj && obj._is_ref
}

export function isReactive(obj: any) {
    return obj && obj._is_reactive
}

export function isReadonly(obj: any) {
    return obj && obj._is_readonly
}

export function isProxy(obj: any) {
    return obj && (obj._is_reactive || obj._is_readonly)
}