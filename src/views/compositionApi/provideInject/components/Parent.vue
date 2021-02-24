<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-24 17:39:50
 * @LastEditTime: 2021-02-24 17:42:45
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li></li>
    </ul>
    <div class="demo">
        Parent
        <hr />
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
    },
    props: {

    }
});
</script>
<style>
</style>