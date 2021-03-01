<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <h2>支持</h2>
  <TypeScript />
  <CssJsonImporting />
  <CssModules />
  <Jsx />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TypeScript from './support/TypeScript.vue'
import CssJsonImporting from './support/cssJsonImporting/CssJsonImporting.vue'
import CssModules from './support/cssModules/CssModules.vue'
import Jsx from './support/Jsx'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    TypeScript,
    CssJsonImporting,
    CssModules,
    Jsx,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>