<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-19 23:03:58
 * @LastEditTime: 2022-04-19 23:23:58
 * @LastEditors: mTm
-->
<template>
  <HelloWorld />
  <h1>Vue: {{ title }}</h1>
</template>
<script>
import HelloWorld from './components/HelloWorld'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      title: '我是title'
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped></style>
