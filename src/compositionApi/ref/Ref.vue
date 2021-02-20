<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-20 10:30:22
 * @LastEditTime: 2021-02-20 14:42:22
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>ref 一般用来定义一个基本类型数据的响应式数据, 返回一个ref对象，</li>
        <li>如果需要对数据进行操作，ref对象.value</li>
        <li>html模板不需要使用.value</li>
    </ul>
    <div class="demo">
        <p>count--{{ count }}</p>
        <p>demo--{{ demo }}</p>
        <p>obj--{{ obj }}</p>
        <button @click="updateCount">更新数据</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "App",
    setup() {
        const obj = {
            a: 5,
            c: {
                b: [0],
            },
        };
        const count = ref(0);
        const demo = ref(obj);
        // 方法
        function updateCount() {
            // count 是一个Ref对象
            // count++;
            count.value++;
            demo.value.c.b.push(1);
        }

        // 返回一个对象
        return {
            count,
            demo,
            obj,
            updateCount,
        };
    },
});
</script>

<style>
</style>
