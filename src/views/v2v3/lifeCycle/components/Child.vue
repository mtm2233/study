<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-23 17:10:40
 * @LastEditTime: 2021-02-23 17:49:53
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>3.x的生命周期（组合APi）比2.x的生命周期先执行</li>
    </ul>
    <div class="demo">
        Child: {{ msg }}
    </div>
    <button @click="update">更新Child</button>
</template>
<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured } from 'vue';
export default defineComponent({
    name: 'Child',
    // vue2.x 生命周期钩子
    beforeCreate() {
        console.log('vue2.x -- beforeCreate');
    },
    created() {
        console.log('vue2.x -- created');
    },
    beforeMount() {
        console.log('vue2.x -- beforeMount');
    },
    mounted() {
        console.log('vue2.x -- mounted');
    },
    beforeUpdate() {
        console.log('vue2.x -- beforeUpdate');
    },
    updated() {
        console.log('vue2.x -- updated');
    },
    // vue2.x 中的 beforeDestroy destroyed
    beforeUnmount() {
        console.log('vue2.x -- beforeDestroy vue3.x -- beforeUnmount');
    },
    unmounted() {
        console.log('vue2.x -- destroyed vue3.x -- unmounted');
    },
    setup() {
        console.log('vue3.x -- beforeCreate');
        console.log('vue3.x -- created');

        onBeforeMount(() => {
            console.log('vue3.x -- onBeforeMount');
        });

        onMounted(() => {
            console.log('vue3.x -- onMounted');
        });

        onBeforeUpdate(() => {
            console.log('vue3.x -- onBeforeUpdate');
        });

        onUpdated(() => {
            console.log('vue3.x -- onUpdated');
        });

        onBeforeUnmount(() => {
            console.log('vue3.x -- onBeforeUnmount');
        });

        onUnmounted(() => {
            console.log('vue3.x -- onUnmounted');
        });

        onErrorCaptured(() => {
            console.log('vue3.x -- onErrorCaptured');
        });

        const msg = ref('msg')
        const update = () => {
            msg.value += '==';
        }
        return {
            msg,
            update,
        }
    }
});
</script>
<style>
</style>