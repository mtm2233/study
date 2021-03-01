<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-01 14:07:08
 * @LastEditTime: 2021-03-01 14:46:22
 * @LastEditors: mTm
-->
<template>
    <div class="demo">CssJsonImporting
        <pre>
            {{ data }}
        </pre>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import data  from './data.json';
import './style.css';
export default defineComponent({
    name: 'App',
    setup() {
        return {
            data,
        }
    }
});
</script>
<style>
</style>