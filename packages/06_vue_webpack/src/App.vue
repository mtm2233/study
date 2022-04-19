<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-19 13:49:42
 * @LastEditTime: 2022-04-19 13:58:23
 * @LastEditors: mTm
-->
<template>
  <HellowWorld />
  <div>
    <h1>
      {{ title }}
    </h1>
  </div>
</template>
<script>
import HellowWorld from './componnets/HellowWorld.vue';
export default {
  components: {
    HellowWorld,
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
