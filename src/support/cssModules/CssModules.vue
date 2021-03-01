<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-01 14:28:51
 * @LastEditTime: 2021-03-01 14:56:00
 * @LastEditors: mTm
-->
<template>
    <div :class="style.name">CssModules</div>
</template>
<script lang="ts">
import style from './style.module.css';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'App',
    setup() {
        return {
            style,
        }
    }
});
</script>
<style module scoped>
.name {
    color: darkblue;
}
</style>