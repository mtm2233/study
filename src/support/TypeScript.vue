<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-01 13:46:49
 * @LastEditTime: 2021-03-01 13:49:56
 * @LastEditors: mTm
-->
<template>
  <h2>TypeScript</h2>
</template>

<script lang="ts">
enum Gender {
  Male,
  Female
}
export default {
  name: 'App',
  setup() {
    console.log(Gender.Male);
    return {}
  }
}
</script>