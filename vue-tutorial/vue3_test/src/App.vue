<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <ExampleOne></ExampleOne>
  <p>----------------------------------------------------</p>
  <ExampleTwo/>
  <p>----------------------------------------------------</p>
  <ExampleThree/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ExampleOne from "./components/ExampleOne.vue"
import ExampleTwo from "./components/ExampleTwo.vue"
import ExampleThree from "./components/ExampleThree.vue"

export default {
  name: 'App',
  components: {
    HelloWorld,
    ExampleOne,
    ExampleTwo,
    ExampleThree,
  }
}
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
