<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-28 09:32:29
 * @LastEditTime: 2021-02-28 15:01:53
 * @LastEditors: mTm
-->
<template>
    <div
        class="item"
        @mouseenter="mouseHandler(true)"
        @mouseleave="mouseHandler(false)"
        :style="{backgroundColor: bgColor, color: myColor}"
    >
        <div>
            <input type="checkbox" :id="todo.id" v-model="isComptete" />
            <label :for="todo.id">{{ todo.title }}</label>
        </div>
        <button v-show="isShow" @click="del">删除</button>
    </div>
</template>
<script lang="ts">
// import { defineComponent, ref, inject } from "vue";
import { computed, defineComponent, ref } from "vue";
import { Todo } from "../types/Todo";
export default defineComponent({
    name: "Item",
    props: {
        todo: Object as () => Todo,
        index: {
            type: Number,
            require: true,
        },
        deleteTodo: {
            type:Function,
            require: true,
        },
        changeTodoisChecked: {
            type:Function,
            require: true,
        }
    },
    setup(props) {
        const bgColor = ref('white');
        const myColor = ref('black');
        const isShow = ref(false);
        const mouseHandler = (flag: boolean) => {
            if (flag) {
                bgColor.value = 'pink';
                myColor.value = 'green';
                isShow.value = true;
            } else {
                bgColor.value = 'white';
                myColor.value = 'black';
                isShow.value = false;
            }
        };
        // const deleteTodo: Function | undefined = inject('deleteTodo');
        // const del = () => {
        //     if (window.confirm('确定要删除吗？') && deleteTodo) {
        //         deleteTodo(props.i);
        //     }
        // }

        const del = () => {
            if (window.confirm('确定要删除吗？') && props.deleteTodo) {
                props.deleteTodo(props.index);
            }
        }

        const isComptete = computed({
            get() {
                return props.todo?.isChecked;
            },
            set(val) {
                props.changeTodoisChecked && props.changeTodoisChecked(props.todo, val);
            }
        })
        return {
            mouseHandler,
            bgColor,
            myColor,
            isShow,
            del,
            isComptete,
        };
    },
});
</script>
<style scoped lang="less">
.item {
    padding: 5px 10px;
    border: 1px solid #d0d0d0;
    align-items: center;
    display: flex;
    justify-content: space-between;
    input[type="checkbox"] {
        width: 20px;
        height: 20px;
        margin: 0;
        margin-right: 10px;
    }
    div {
        display: flex;
        align-items: center;
    }
    button {
        color: white;
        background-color: #ff6348;
        border: none;
        cursor: pointer;
    }
}
</style>