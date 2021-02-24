<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-24 11:11:36
 * @LastEditTime: 2021-02-24 11:28:48
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>readonly
            <ul>
                <li>深度只读数据</li>
                <li>获取一个对象（响应式或纯对象）或 ref并返回原始代理的只读代理</li>
                <li>只读代理是深层的：访问的任何嵌套proptype也是只读的</li>
            </ul>
        </li>
        <li>
            shallowReadonly
            <ul>
                <li>浅只读数据</li>
                <li>创建一个代理，使其自身的proptype为只读，但不执行嵌套对象的深度只读转换</li>
            </ul>
        </li>
        <li>
            应用场景
            <ul>
                <li>在某些特定情况下，我们可能不希望对数据进行更新操作，那就可以包装生成一个只读代理对象来读取属性，而不能修改或删除</li>
            </ul>
        </li>
    </ul>
    <div class="demo">
        <p>state: {{ state }}</p>
        <p>state1: {{ state1 }}</p>
        <p>state2: {{ state2 }}</p>
        <button @click="update">更新数据</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue';
export default defineComponent({
    name: 'App',
    setup() {
        const state = reactive({
            name: 'aaa',
            age: 18,
            a: {
                b: 'c'
            }
        });
        const state1 = readonly({});
        const state2 = shallowReadonly(state)
        const update = () => {
            // state.name += '=='
            // state1.name += '=='
            state2.a.b += '=='
            console.log(123);
        }
        return {
            state,
            state1,
            state2,
            update,
        }
    }
});
</script>
<style>
</style>