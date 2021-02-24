<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-22 10:01:12
 * @LastEditTime: 2021-02-22 22:34:00
 * @LastEditors: mTm
-->
<template>
    <h2>子级</h2>
    <div class="demo">
        {{ msg }}
        <button @click="$emit('change')">触发Parent change</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Child',
    props: {
        msg: {
            type: String,
        }
    },
    setup(props,context) {
        console.log('Child--props--',props);
        console.log('Child--context--',context, (context as any).props.msg);
        return {

        }
    }
});
</script>
<style>
</style>