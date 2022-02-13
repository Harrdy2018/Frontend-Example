<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <ExampleOne></ExampleOne>
  <p>----------------------------------------------------</p>
  <ExampleTwo/>
  <p>----------------------------------------------------</p>
  <ExampleThree/>
  <p>----------------------------------------------------</p>
  <ExampleFour/>
  <p>----------------------------------------------------</p>
  <ExampleFive msg="hello mi" school="NJUPT">
    
  </ExampleFive>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ExampleOne from "./components/ExampleOne.vue"
import ExampleTwo from "./components/ExampleTwo.vue"
import ExampleThree from "./components/ExampleThree.vue"
import ExampleFour from "./components/ExampleFour.vue"
import ExampleFive from "./components/ExampleFive.vue"

export default {
  name: 'App',
  components: {
    HelloWorld,
    ExampleOne,
    ExampleTwo,
    ExampleThree,
    ExampleFour,
    ExampleFive,
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
