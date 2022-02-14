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
  <ExampleFive @hello="showHelloMsg" msg="hello mi" school="NJUPT">
    <p>默认插槽AAA</p>
    <p>默认插槽BBB</p>
    <template v-slot:qwer>
      <p>具名插槽AAA</p>
    </template>
    <template v-slot:QWER>
      <p>具名插槽BBB</p>
    </template>
  </ExampleFive>
  <p>----------------------------------------------------</p>
  <ExampleSix/>
  <p>----------------------------------------------------</p>
  <ExampleSeven/>
  <hr>
  具名插槽名字:<input type="text" v-model="slotName">
  <v-switch :case="slotName">
    <template #foo>
      <div>foo</div>
    </template>
    <template #bar>
      <div>bar</div>
    </template>
    <template #default>
      <div>default</div>
    </template>
  </v-switch>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ExampleOne from "./components/ExampleOne.vue"
import ExampleTwo from "./components/ExampleTwo.vue"
import ExampleThree from "./components/ExampleThree.vue"
import ExampleFour from "./components/ExampleFour.vue"
import ExampleFive from "./components/ExampleFive.vue"
import ExampleSix from "./components/ExampleSix.vue"
import ExampleSeven from "./components/ExampleSeven.vue"

// 组件封装
import {ref} from "vue"
import VSwitch from "./components/VSwitch.vue"

export default {
  name: 'App',
  components: {
    HelloWorld,
    ExampleOne,
    ExampleTwo,
    ExampleThree,
    ExampleFour,
    ExampleFive,
    ExampleSix,
    ExampleSeven,
    VSwitch
  },
  setup(){
    let slotName = ref("foo");

    function showHelloMsg(value){
      alert(`hello! you emit hello event.i receive param ${value}`)
    }

    return {showHelloMsg, slotName};
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
