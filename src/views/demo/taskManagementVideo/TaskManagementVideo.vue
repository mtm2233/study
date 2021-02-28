<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-28 09:28:10
 * @LastEditTime: 2021-02-28 15:05:43
 * @LastEditors: mTm
-->
<template>
    <div class="taskManagement">
        <Head :addTodo="addTodo" />
        <List
            :todos="todos"
            :deleteTodo="deleteTodo"
            :changeTodoisChecked="changeTodoisChecked"
        />
        <Footer
            :todos="todos"
            :changeTodoisChecked="changeTodoisChecked"
            :clearIsCheckedTodo="clearIsCheckedTodo"
        />
    </div>
</template>
<script lang="ts">
// import { defineComponent, reactive, toRefs, provide } from "vue";
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import { Todo } from "./types/Todo";
import { setCache, getCache } from './cache'
import Head from "./components/Head.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default defineComponent({
    name: "App",
    components: {
        Head,
        List,
        Footer,
    },
    setup() {
        const state = reactive<{ todos: Todo[] }>({
            todos: [
                {
                    id: 1,
                    title: "测试",
                    isChecked: true,
                },
                {
                    id: 2,
                    title: "测试1",
                    isChecked: false,
                },
                {
                    id: 3,
                    title: "测试2",
                    isChecked: true,
                },
            ],
        });

        onMounted(() => {
            if (getCache('todos')) {
                state.todos = getCache('todos');
            }
        })

        const addTodo = (todo: Todo) => {
            state.todos.unshift(todo);
        };
        const deleteTodo = (index: number) => {
            state.todos.splice(index, 1);
        };

        const changeTodoisChecked = (todo: Todo, isChecked: boolean) => {
            todo.isChecked = isChecked;
        };

        const clearIsCheckedTodo = () => {
            state.todos = state.todos.filter((v: Todo) => !v.isChecked);
        }

        watch(() => state.todos, (value: Todo[]) => {
            setCache('todos', value);
        },{deep: true})

        return {
            ...toRefs(state),
            addTodo,
            deleteTodo,
            changeTodoisChecked,
            clearIsCheckedTodo,
        };
    },
});
</script>
<style scoped>
.taskManagement {
    padding: 20px;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    margin: 0 auto;
    max-width: 500px;
}
</style>