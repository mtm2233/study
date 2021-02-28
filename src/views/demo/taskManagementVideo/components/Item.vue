<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-28 09:32:29
 * @LastEditTime: 2021-02-28 09:41:27
 * @LastEditors: mTm
-->
<template>
    <div class="item">
        <div>
            <input type="checkbox" :id="1" :checked="true" />
            <label :for="1">测试</label>
        </div>
        <button>删除</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Item",
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
        opacity: 0;
    }
}
.item:hover {
    button {
        opacity: 1;
        transition: 0.5s;
    }
}
</style>