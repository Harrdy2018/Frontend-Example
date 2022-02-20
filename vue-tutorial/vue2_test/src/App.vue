<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>-------------------------------------------------------------------</p>
    <ExampleOne/>
    <p>-------------------------------------------------------------------</p>
    <ExampleTwo msg="hello mi" school="NJUPT">
      <!--子组件 $slots 接收插槽-->
      <p>默认插槽AAA</p>
      <p>默认插槽BBB</p>
      <template slot="testA">
        <p>具名插槽AAA</p>
      </template>
      <template slot="testB">
        <p>具名插槽BBB</p>
      </template>
    </ExampleTwo>
    <hr>
    <Parent></Parent>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ExampleOne from './components/ExampleOne.vue'
import ExampleTwo from './components/ExampleTwo.vue'
import Parent from './components/Parent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ExampleOne,
    ExampleTwo,
    Parent
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
