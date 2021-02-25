/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-25 14:03:50
 * @LastEditTime: 2021-02-25 16:57:02
 * @LastEditors: mTm
 */
const readOnlyHandler = {
    get(target: any, prop: any) {
        if (prop === '_is_readonly') return true;
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

function isObject(target: any): boolean {
    return target && typeof target === 'object';
}

export default function readonly(target: any) {
    // 判断当前对象是不是 object类型(对象/数组)
    if (isObject(target)) {
        if(Array.isArray(target)) {
            target.filter(v => isObject(v)).forEach((v,i) => target[i] = readonly(v))
        } else {
            Object.entries(target).filter(([k,v]) => isObject(v)).forEach(([k,v]) => target[k] = readonly(v))
        }
        return new Proxy(target, readOnlyHandler)
    } else {
        throw new Error(`Argument of type '${ target && typeof target }' is not assignable to parameter of type 'object'`)
    } 
}