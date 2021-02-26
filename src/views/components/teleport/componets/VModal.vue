<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-26 11:16:06
 * @LastEditTime: 2021-02-26 11:35:31
 * @LastEditors: mTm
-->
<template>
    <button @click="visible = true">打开</button>
    <Teleport to="#vmodal">
        <div v-if="visible" class="demo">
            <button @click="visible = false">关闭</button>
        </div>
    </Teleport>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    name: "App",
    setup() {
        const visible = ref(false);
        return {
            visible,
        };
    },
});
</script>
<style>
</style>