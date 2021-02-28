<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-28 09:32:17
 * @LastEditTime: 2021-02-28 09:42:30
 * @LastEditors: mTm
-->
<template>
    <Item />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Item from './Item.vue'
export default defineComponent({
    name: 'List',
    components: {
        Item
    }
});
</script>