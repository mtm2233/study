<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-28 09:32:17
 * @LastEditTime: 2021-02-28 13:59:57
 * @LastEditors: mTm
-->
<template>
    <Item
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo="todo"
        :index="index"
        v-bind="$attrs"
    />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Todo } from "../types/Todo";
import Item from "./Item.vue";
export default defineComponent({
    name: "List",
    props: {
        todos: {
            type: Array as () => Todo[],
        },
    },
    components: {
        Item,
    },
});
</script>