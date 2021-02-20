<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-20 10:30:22
 * @LastEditTime: 2021-02-20 11:42:15
 * @LastEditors: mTm
-->
<template>
  <ul>
    <li>
      ref 一般用来定义一个基本类型数据的响应式数据,
      返回一个ref对象，
    </li>
    <li>如果需要对数据进行操作，ref对象.value</li>
    <li>html模板不需要使用.value</li>
  </ul>
  <div class="demo">
    <h3>{{ count }}</h3>
    <button @click="updateCount">
      更新数据
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  // 页面打开可以看到数据。点击按钮数据变化
  /* vue2 */
  // data() {
  //   return {
  //     count: 0,
  //   }
  // },
  // methods: {
  //   updateCount() {
  //     this.count++;
  //   }
  // }

  /* vue3 */
  // setup是组合API的入口函数
  setup() {
    // 变量 并不是响应式数据

    // ref 一般用来定义一个基本类型数据的响应式数据,
    // 返回一个ref对象，
    // 如果需要对数据进行操作，ref对象.value
    // html模板不需要使用.value
    const count = ref(0);
    // 方法
    function updateCount() {
      // count 是一个Ref对象
      // count++;
      count.value++
    }

    // 返回一个对象
    return {
      count,
      updateCount,
    }
  }
});
</script>

<style>
</style>
