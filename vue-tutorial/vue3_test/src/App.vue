<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <h2>name:{{name}}</h2>
  <h2>age:{{age}}</h2>
  <h2>sex:{{sex}}</h2>
  <button @click="sayHello">speak</button>
  <button @click="sayWelcome">welcome</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {h} from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      sex: 'nan'
    }
  },
  methods: {
    sayWelcome(){
      alert("welcome to china!");
    }
  },
  setup: function () {
    let name = "zhangsan";
    let age = 18;

    function sayHello(){
      alert(`i am ${name} i ${age}`);
    }

    return {name,age,sayHello};

    // 返回一个渲染函数，页面以渲染函数为主
    // return ()=>h('h1', "Hello my render");
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
