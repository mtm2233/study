<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-28 09:32:36
 * @LastEditTime: 2021-02-28 09:44:36
 * @LastEditors: mTm
-->
<template>
    <div class="footer">
        <div>
            <input
                type="checkbox"
                :checked="true"
            />
            <span>
                已完成0/全部0
            </span>
        </div>
        <button>清除已完成任务</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Footer",
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