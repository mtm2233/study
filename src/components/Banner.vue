<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-20 10:54:40
 * @LastEditTime: 2021-02-20 11:47:06
 * @LastEditors: mTm
-->
<template>
    <div class="banner">
        <h2>{{ $route.meta.title }}</h2>
        <div class="navs">
        <span
            v-for="item in banners"
            :key="item.name"
            :class="{ nav: true, current: item.name === $route.name }"
            @click="goPath(item.name)"
        >
            {{ item.meta.title }}
        </span>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "VBanner",
    computed: {
        banners() {
            return this.$router.options.routes.filter((v) => v.name);
        },
    },
    methods: {
        goPath(name: string) {
            if (this.$route.name === name) {
                return;
            }
            this.$router.push({
                name,
            });
        },
    },
});
</script>

<style scoped>
.banner {
    padding: 0 20px;
}
.navs {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    overflow-y: auto;
}
.nav {
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 5px 0;
    cursor: pointer;
    color: darkblue;
}
.current {
    color: darkorange;
}
</style>
