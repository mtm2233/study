<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-26 11:04:42
 * @LastEditTime: 2021-02-26 11:35:10
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>Teleport提供了一种干净的方法，让组件的html在父组件界面外的特定标签（很可能是body）下插入显示</li>
    </ul>
    <div class="demo">
        <VModal />
    </div>
    <div id="vmodal"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import VModal from './componets/VModal.vue';
export default defineComponent({
    name: 'App',
    components: {
        VModal,
    }
});
</script>
<style>
</style>