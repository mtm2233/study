<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-23 22:13:47
 * @LastEditTime: 2021-02-24 10:14:09
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>把一个响应式对象转换成普通对象，该对象的每一个property都是一个ref</li>
        <li>当从合成函数返回响应式对象时，toRefs非常有用，这样组件就可以在不丢失响应式的情况下对返回的对象进行分解使用</li>
        <li>问题：reactive对象取出的所有属性都是非响应式的</li>
        <li>解决：利用toRefs可以将一个响应式reactive对象的所有原始属性转换成响应式的ref属性</li>
    </ul>
    <div class="demo">
        <p>name: {{ name }}</p>
        <p>age: {{ age }}</p>
        <button @click="update">修改数据</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
function user1() {
    const user = reactive({
        name1: 'abc',
        age2: 20,
    });
    return {
        ...toRefs(user),
    }
}
export default defineComponent({
    name: 'App',
    setup() {
        const user = reactive({
            name: 'abc',
            age: 20,
        });
        const {name,age} = toRefs(user);
        const update = () =>{
            name.value += "==";
            age.value += 1;
        }
        return {
            // ...toRefs(user),
            name,
            age,
            ...user1(),
            update,
        }
    }
});
</script>
<style>
</style>