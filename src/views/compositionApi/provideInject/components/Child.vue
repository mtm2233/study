<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-24 17:39:43
 * @LastEditTime: 2021-02-24 17:46:02
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li></li>
    </ul>
    <div class="demo" :style="{color}">Child</div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
export default defineComponent({
    name: 'Child',
    setup() {
        const color = inject('color');
        return {
            color,
        }
    }
});
</script>
<style>
</style>