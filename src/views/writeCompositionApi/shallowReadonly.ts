/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-25 14:03:50
 * @LastEditTime: 2021-02-25 14:31:12
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

export default function shallowReadonly(target: any) {
    // 判断当前对象是不是 object类型(对象/数组)
    if (target && typeof target === 'object') {
        return new Proxy(target, readOnlyHandler)
    } else {
        throw new Error(`Argument of type '${ target && typeof target }' is not assignable to parameter of type 'object'`)
    }
}