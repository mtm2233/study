<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-25 17:30:43
 * @LastEditTime: 2021-02-25 17:36:02
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>在Vue2中，组件必须由一个根标签</li>
        <li>在Vue3中，组件可以没有根标签，内部会将多个标签包含在一个Fragment虚拟元素中</li>
        <li>好处：减少标签层级，减少内存占用</li>
    </ul>
    <div class="demo"></div>
    <p>p1</p>
    <p>p2</p>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'App',
});
</script>
<style>
</style>