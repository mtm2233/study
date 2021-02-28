<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-26 15:02:03
 * @LastEditTime: 2021-02-28 09:22:44
 * @LastEditors: mTm
-->
<template>
    <div class="taskManagement">
        <input type="text" placeholder="请输入你的任务，按回车键确认" v-model="inputValue">
        <div class="items">
            <div v-for="v in task" :key="v.id" class="item">
                <div>
                    <input type="checkbox" :id="v.id" :checked="v.isChecked" @change="taskSelect(v.id)" />
                    <label :for="v.id">{{ v.value }}</label>
                </div>
                <button @click="clearSelect(v.id)">删除</button>
            </div>
        </div>
        <div class="footer">
            <div>
                <input type="checkbox" @change="taskExample.SelectAll = !selectAll" :checked="selectAll" />
                <span>
                    已完成{{ taskExample.SelectNum }}/全部{{task.length}}
                </span>
            </div>
            <button @click="clearSelect">清除已完成任务</button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import taskExample from './classTask';
function mousedownHandler(target: any) {
    if (target.key === 'Enter') {
        taskExample.addTask();
    }
    return false;
}
export default defineComponent({
    name: 'App',
    setup() {
        const {task, inputValue, selectAll, clearSelect, taskSelect } = taskExample.values();
        window.addEventListener('keydown', mousedownHandler);
        return {
            taskExample,
            task,
            inputValue,
            selectAll,
            clearSelect,
            taskSelect,
        }
    }
});
</script>
<style lang="less" scoped>
.verticalCenter {
    display: flex;
    align-items: center;
}
.taskManagement {
    input[type='checkbox'] {
        width: 20px;
        height: 20px;
        margin: 0;
        margin-right: 10px;
    }
    padding: 20px;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    margin: 0 auto;
    max-width: 500px;
    input {
        margin-bottom: 20px;
        width: 100%;
        border: 1px solid #d0d0d0;
        border-radius: 5px;
        padding: 5px;
    }
    .items {
        .item {
            padding: 5px 10px;
            border: 1px solid #d0d0d0;
            align-items: center;
            display: flex;
            justify-content: space-between;
            div {
                .verticalCenter();
            }
            button {
                // display: none;
                opacity: 0;
            }
        }
        .item:hover {
            button {
                // display: block;
                opacity: 1;
                transition: .5s;
            }
        }
    }
    .footer {
        justify-content: space-between;
        margin-top: 20px;
        .verticalCenter();
        div {
            .verticalCenter();
            white-space: nowrap;
        }
        button {
            color: white;
            background-color: #ff6348;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        };
    }
}
</style>