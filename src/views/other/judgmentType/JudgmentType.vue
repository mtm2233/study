<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-25 10:40:14
 * @LastEditTime: 2021-02-25 12:00:06
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>isRef: 检查一个值是否为一个ref对象</li>
        <li>isReactive: 检查一个对象是否是由 reactive 创建的响应式</li>
        <li>isReadonly: 检查一个对象是否是由 readonly 创建的只读代理</li>
        <li>isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理</li>
    </ul>
    <div class="demo">
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, isRef, isReactive, reactive, isReadonly, readonly, isProxy } from 'vue';
export default defineComponent({
    name: 'App',
    // isRef: 检查一个值是否为一个ref对象
    // isReactive: 检查一个对象是否是由 reactive 创建的响应式
    // isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
    // isProxy: 检查一个对象是否是由reactive或者readonly方法创建的代理
    setup() {
        // const toString = Object.prototype.toString;
        // const result = toString.call(a).slice(8, -1).toLowerCase();
        // console.log(result);
        
        console.log('isRef(ref({}))', isRef(ref({}))); // true
        console.log('isReactive(reactive({}))', isReactive(reactive({}))); // true
        console.log('isReadonly(readonly({}))', isReadonly(readonly({}))); // true
        console.log('isProxy(readonly({}))', isProxy(readonly({}))); // true
        console.log('isProxy(reactive({}))', isProxy(reactive({}))); // true
        console.log('isProxy(ref({}))', isProxy(ref({}))); // false

        return {
            
        }
    }
});
</script>
<style>
</style>