<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-28 09:32:36
 * @LastEditTime: 2021-02-28 14:43:37
 * @LastEditors: mTm
-->
<template>
    <div class="footer">
        <div>
            <input
                type="checkbox"
                v-model="checkedAll"
            />
            <span>
                已完成{{ isCheckedNum }}/全部{{ allNum }}
            </span>
        </div>
        <button @click="delAll">清除已完成任务</button>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { Todo } from "../types/Todo";
export default defineComponent({
    name: "Footer",
    props: {
        todos: {
            type: Array as () => Todo[],
            default: () => []
        },
        changeTodoisChecked: {
            type: Function,
            require: true,
        },
        clearIsCheckedTodo: {
            type: Function,
            require: true,
        }
    },
    setup(props) {
        // 全部数
        const allNum = computed(() => {
            return props.todos.length;
        })
        // 已选数
        const isCheckedNum = computed(() => {
            // return props.todos.filter((v: Todo) => v.isChecked).length
            return props.todos.reduce((pre: number,todo: Todo) => pre+(todo.isChecked ? 1 : 0),0);
        })
        // 全选/全不选
        const checkedAll = computed({
            get() {
                return allNum.value === isCheckedNum.value
            },
            set(val) {
                props.todos.forEach((v: Todo) => props.changeTodoisChecked && props.changeTodoisChecked(v, val));
            }
        })
        // 删除所有
        const delAll = () => {
            if(window.confirm('确认清除已完成任务？')) {
                props.clearIsCheckedTodo && props.clearIsCheckedTodo();
            }
        }
        return {
            allNum,
            isCheckedNum,
            checkedAll,
            delAll,
        }
    }
});
</script>
<style lang="less" scoped>
.footer {
    justify-content: space-between;
    margin-top: 20px;
    display: flex;
    align-items: center;
    input[type="checkbox"] {
        width: 20px;
        height: 20px;
        margin: 0;
        margin-right: 10px;
    }
    div {
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
    button {
        color: white;
        background-color: #ff6348;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }
}
</style>