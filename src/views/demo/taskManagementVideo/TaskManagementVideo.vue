<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-28 09:28:10
 * @LastEditTime: 2021-02-28 09:34:55
 * @LastEditors: mTm
-->
<template>
    <div class="taskManagement">
        <Head />
        <List />
        <Footer />
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
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