<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-28 09:32:09
 * @LastEditTime: 2021-02-28 11:47:39
 * @LastEditors: mTm
-->
<template>
    <input class="head" type="text" placeholder="请输入你的任务，按回车键确认" v-model="title" @keyup.enter="add" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    name: "Head",
    props: {
        addTodo: {
            type: Function,
            required: true,
        }
    },
    setup(props) {
        const title = ref('');
        const add = () => {
            const text = title.value;
            if (text) {
                props.addTodo({
                    id: Date.now(),
                    title: text,
                    isChecked: false,
                })
                title.value = '';
            } 
        }
        return {
            add,
            title,
        }
    }
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