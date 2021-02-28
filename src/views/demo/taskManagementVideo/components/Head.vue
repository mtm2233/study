<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-28 09:32:09
 * @LastEditTime: 2021-02-28 09:37:58
 * @LastEditors: mTm
-->
<template>
    <input class="head" type="text" placeholder="请输入你的任务，按回车键确认" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Head",
});
</script>
<style scoped>
.head {
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    padding: 5px;
}
</style>