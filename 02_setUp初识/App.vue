<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-19 15:02:23
 * @LastEditTime: 2021-02-19 17:28:36
 * @LastEditors: mTm
-->
<template>
  <div></div>
  <h1>{{ a }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  // 测试 setup是组合 API中第一个要使用的代码
  setup() {
    return {
      a: 123
    }
  }
});
</script>

<style>
</style>
