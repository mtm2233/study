<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-19 15:02:23
 * @LastEditTime: 2021-02-19 16:07:38
 * @LastEditors: mTm
-->
<template>
  <!-- 没有根标签 -->
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
// 这里可以使用 ts

// defineComponent 定义组件,内部可以传入一个配置对象
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
