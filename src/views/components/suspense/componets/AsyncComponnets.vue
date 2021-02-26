<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-26 13:12:57
 * @LastEditTime: 2021-02-26 14:03:52
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>
            {{ msg }}
        </li>
    </ul>
    <div class="demo">
        <AsyncComponents />
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
    name: "App",
    setup() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve({
                msg: '2000'
            }), 2000)
        })

        // return axios.get("/data/arr.json").then((res) => ({
        //     msg: res.data,
        // }));
    },
    // async setup() {
    //     const { data } = await axios.get("/data/arr.json");
    //     return {
    //         msg: data,
    //     };
    // }
});
</script>
<style>
</style>