<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-23 16:46:54
 * @LastEditTime: 2021-02-23 17:24:21
 * @LastEditors: mTm
-->
<template>
    <button @click="visible = !visible">imgs显示隐藏</button> <br />
    <button @click="isShow = !isShow">Child 子组件显示隐藏</button>
    <ul>
        <li></li>
    </ul>
    <div v-show="visible" class="imgs">
        <div>
            <h3>vue2</h3>
            <img src="./lifecycle2.png" alt="">
        </div>
        <div>
            <h3>vue3</h3>
            <img src="./lifecycle3.png" alt="">
        </div>
    </div>
    <div class="demo">
        <Child v-if="isShow" />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Child from './Child.vue';
export default defineComponent({
    name: 'App',
    components: {
        Child,
    },
    setup() {
        return {
            visible: ref(true),
            isShow: ref(true),
        }
    }
});
</script>
<style scoped>
.imgs {
    display: flex;
}
.imgs div {
    flex: 1;
}
img {
    width: 100%;
}
</style>