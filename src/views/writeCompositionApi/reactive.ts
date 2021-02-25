/*
 * @Description: shallowReactive
 * @Author: mTm
 * @Date: 2021-02-25 13:13:34
 * @LastEditTime: 2021-02-25 16:56:34
 * @LastEditors: mTm
 */

const reactiveHandler = {
    // 获取属性值
    get(target: any, prop: any) {
        if (prop === '_is_reactive') return true;
        const reflect = Reflect.get(target, prop);
        console.log('拦截了读取操作', target, prop, reflect);
        return reflect;
    },
    // 修改属性或添加
    set(target: any, prop: any, value: any) {
        const reflect = Reflect.set(target, prop, value);
        console.log('拦截了修改属性或添加操作', target, prop, value, reflect);
        return reflect;
    },
    // 删除某个属性
    deleteProperty(target: any, prop: any) {
        const reflect = Reflect.deleteProperty(target, prop);
        console.log('拦截了删除操作', target, prop, reflect);
        return reflect;
    }
}

function isObject(target: any): boolean {
    return target && typeof target === 'object';
}

export default function reactive(target: any) {
    // 判断当前对象是不是 object类型(对象/数组)
    if (isObject(target)) {
        // 递归操作
        if(Array.isArray(target)) {
            target.filter(v => isObject(v)).forEach((v,i) => target[i] = reactive(v))
        } else {
            Object.entries(target).filter(([k,v]) => isObject(v)).forEach(([k,v]) => target[k] = reactive(v));
        }

        return new Proxy(target, reactiveHandler)
    }
    throw new Error(`Argument of type '${ target && typeof target }' is not assignable to parameter of type 'object'`)
}