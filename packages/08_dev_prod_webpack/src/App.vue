<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-19 13:49:42
 * @LastEditTime: 2022-04-19 15:24:13
 * @LastEditors: mTm
-->
<template>
  <HelloWorld />
  <div>
    <h1>
      {{ title }}
    </h1>
  </div>
</template>
<script>
import HelloWorld from './componnets/HelloWorld';
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: 'vue: 我是标题',
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
div {
  color: #000000;
}
</style>
