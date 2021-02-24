<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-24 17:19:45
 * @LastEditTime: 2021-02-24 17:51:23
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>
            provide 和 inject 提供依赖注入，功能类型于2.x的 provide/inject
        </li>
        <li>
            实现跨层级组件(祖孙)间通信
        </li>
    </ul>
    <div class="demo">
        <p>color: {{ color }}</p>
        <p>
            <button @click="color = 'red'">红色</button>
        </p>
        <p>
            <button @click="color = 'yellow'">黄色</button>
        </p>
        <p>
            <button @click="color = 'blue'">蓝色</button>
        </p>
        <hr />
        <Parent />
    </div>
</template>
<script lang="ts">
import { defineComponent, provide, ref } from 'vue';
import Parent from './components/Parent.vue';
export default defineComponent({
    name: 'App',
    components: {
        Parent,
    },
    setup() {
        const color = ref('red');
        provide('color', color);
        return {
            color,
        }
    }
});
</script>
<style>
</style>