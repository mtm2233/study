<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-22 10:00:55
 * @LastEditTime: 2021-02-22 10:08:53
 * @LastEditors: mTm
-->
<template>
    <h2>父级</h2>
    <ul>
        <li></li>
    </ul>
    <div class="demo">
        <Child />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import Child from './Child.vue';
export default defineComponent({
    name: 'Parent',
    components: {
        Child,
    }
});
</script>
<style>
</style>