<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-19 15:02:23
 * @LastEditTime: 2021-02-20 11:41:42
 * @LastEditors: mTm
-->
<template>
  <div class="app-body">
    <VBanner />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VBanner from '@/components/Banner.vue'

export default defineComponent({
  name: 'App',
  components: {
    VBanner,
  }
});
</script>

<style>
.app-body {
  display: flex;
}
.demo {
  padding-left: 20px;
}
</style>