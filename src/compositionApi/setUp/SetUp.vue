<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-19 15:02:23
 * @LastEditTime: 2021-02-20 11:41:54
 * @LastEditors: mTm
-->
<template>
  <ul>
    <li>
      setup是组合API的入口函数
    </li>
  </ul>
  <div class="demo">
    <h1>{{ a }}</h1>
  </div>
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
