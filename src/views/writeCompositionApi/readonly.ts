/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-25 14:03:50
 * @LastEditTime: 2021-02-25 14:49:36
 * @LastEditors: mTm
 */
const readOnlyHandler = {
    get(target: any, prop: any) {
        const reflect = Reflect.get(target, prop);
        console.log('拦截了读取操作', target, prop, reflect);
        return reflect;
    },
    set(target: any, prop: any, value: any) {
        throw new Error(`Cannot assign to '${prop}' because it is a read-only property`);
    },
    deleteProperty(target: any, prop: any) {
        throw new Error(`Cannot assign to '${prop}' because it is a read-only property`);
    }
}

export default function readonly(target: any) {
    // 判断当前对象是不是 object类型(对象/数组)
    if (target && typeof target === 'object') {
        if(Array.isArray(target)) {
            target.forEach((v,i) => target[i] = readonly(v))
        } else {
            Object.entries(target).forEach(([k,v]) => target[k] = readonly(v));
        }
        return new Proxy(target, readOnlyHandler)
    }
    return target;
}